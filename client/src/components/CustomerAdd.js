import React, { useState } from 'react';
import { post } from 'axios';

function CustomerAdd() {
    const [info, setInfo] = useState([{
        file: null,
        useName: '',
        birthday: '',
        gender: '',
        job: '',
        fileName: ''
    }]);

    const { file, userName, birthday, gender, job, fileName } = info;

    function addCustomer() {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('image', info.file)
        formData.append('name', info.userName);
        formData.append('birthday', info.birthday);
        formData.append('gender', info.gender);
        formData.append('job', info.job);
        const config = {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        }
        console.log(formData.values);
        return post(url, formData, config);
    }

    function handleFormSubmit(e) {
        e.preventDefault()
        addCustomer()
        .then((response) => {
            console.log(response.data);
        })
        .catch(err => console.log(err));
        setInfo({
            file: null,
            useName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: ''
        })
        //window.location.reload();
    }

    function handleFileChange(e) {
        const {name, value} = e.target;
        setInfo({
            ...info,
            [name]: value
        })
    }

    function handleValueChange(e) {
        const {name, value} = e.target;
        console.log({name, value});
        setInfo({
            ...info,
            [name]: value
        });
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <h1>고객 추가</h1>
            프로필 이미지 : <input type="file" name="file" file={file} value={fileName} onChange={handleFileChange}/><br/>
            이름 : <input type="text" name="userName" value={userName} onChange={handleValueChange}/><br/>
            생년월일 : <input type="text" name="birthday" value={birthday} onChange={handleValueChange}/><br/>
            성별 : <input type="text" name="gender" value={gender} onChange={handleValueChange}/><br/>
            직업 : <input type="text" name="job" value={job} onChange={handleValueChange}/><br/>
            <button type="submit">추가하기</button>
        </form>
    )
}

export default CustomerAdd;
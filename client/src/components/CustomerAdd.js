import React, {useState} from 'react';
import { post } from 'axios';

function CustomerAdd() {
    const [input, setInput] = useState([{
        file: null,
        userName: '',
        birthday: '',
        gender: '',
        job: '',
        fileName: ''
    }]);

    addCustomer = () => {
        const url = 'api/customers';
        const formData = new FormData();
        formData.append('image', input.file);
        formData.append('name', input.userName);
        formData.append('birthday', input.birthday);
        formData.append('gender', input.gender);
        formData.append('job', input.job);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        addCustomer()
        .then((response) => {
            console.log(response.data);
        })
    }

    handleFileChange = (e) => {
        setInput({
            file: e.target.file[0],
            fileName: e.target.value
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value
        setInput(nextState);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <h1>고객 추가</h1>
            프로필 이미지 : <input type="file" name="file" file={input.file} value={input.fileName} onChange={handleFileChange}/><br/>
            이름 : <input type="text" name="userName" value={input.userName} onChange={handleValueChange}/><br/>
            생년월일 : <input type="text" name="birthday" value={input.birthday} onChange={handleValueChange}/><br/>
            성별 : <input type="text" name="gender" value={input.gender} onChange={handleValueChange}/><br/>
            직업 : <input type="text" name="job" value={input.job} onChange={handleValueChange}/><br/>
            <button type="submit">추가하기</button>
        </form>
    )
}

export default CustomerAdd()
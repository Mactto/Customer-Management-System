import React, { useState } from 'react';
import { post } from 'axios';
//import Dialog from'@material-ui/core/Dialog';
//import DialogActions from '@material-ui/core/DialogActions';
//import DialogTitle from '@material-ui/core/DialogTitle';
//import DialogContent from '@material-ui/core/DialogContent';
//import TextField from '@material-ui/core/TextField';
//import Button from '@material-ui/core/Buttonimport';
//import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    hidden: {
        display: 'none'
    }
})

function CustomerAdd(props) {
    const [info, setInfo] = useState([{
        file: null,
        useName: '',
        birthday: '',
        gender: '',
        job: '',
        fileName: '',
        //open: false
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
        return post(url, formData, config);
    }

    function handleFormSubmit(e) {
        e.preventDefault()
        addCustomer()
        .then((response) => {
            console.log(response.data);
            props.stateRefresh();
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
    }

    function handleFileChange(e) {
        const {name, value} = e.target;
        setInfo({
            ...info,
            [name]: e.target.files[0],
            [fileName]: value
        })
        
        console.log(name, value);
        console.log(e.target.files[0])
    }

    function handleValueChange(e) {
        const {name, value} = e.target;
        setInfo({
            ...info,
            [name]: value
        });
    }
    /* 
    const handleClickOpen = () => {
        setInfo({ open : true})
    }

    const handleClickClose = () => {
        setInfo({
            file: null,
            useName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: '',
            open: false
        })
    }
    const {classes} = props;
    */
    return (
        /*
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                고객 추가하기
            </Button>
            <Dialog>

            </Dialog>
        </div>
        */
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
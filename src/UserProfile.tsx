import React, {useState} from 'react'
import fire from "./fire";
import {Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';

const UserProfile = () => {
    const handleProfile = () => (window.location.href = '/');
    const [userEmail, setUserEmail] = useState('');
    fire.auth().onAuthStateChanged(function (user) {
        if (user) {
            setUserEmail(user.email)

        }
    });

    return (
        <>
            <div className='header'>
        <a onClick={handleProfile} className='logo'>New York Times News </a>
    </div>
    <div className='title1'>
        <h2>Your profile page</h2>
    </div>
    <div className='container'>
    <Avatar size={94} icon={<UserOutlined/>}/>
    <h2>{userEmail}</h2>
    </div>
    </>
);}

export default UserProfile;
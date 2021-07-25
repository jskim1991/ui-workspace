import React from 'react'
import { BASE_URL } from './config'

const LoginPage = () => {
    function onClickKakaoLogin() {
        window.location.assign(BASE_URL + '/oauth2/authorization/kakao')
    }

    return (
        <div>
            <button onClick={onClickKakaoLogin}>카카오로 로그인</button>
        </div>
    )
}

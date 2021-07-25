import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const CLIENT_ID = '37028ae8b585f1edfe79d97004fd06ca'
const REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao'
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`

const LoginPage = () => {
    const history = useHistory()

    const clickKakaoLoginHandler = () => {
        history.push({
            pathname: 'https://kauth.kakao.com/oauth/authorize',
            search:
                '?response_type=code&client_id=37028ae8b585f1edfe79d97004fd06ca&redirect_uri=http://localhost:3000/signup',
            // response_type: 'code',
            // client_id: '37028ae8b585f1edfe79d97004fd06ca',
            // redirect_uri: 'http://localhost:8080/login/oauth2/code/kakao',
        })
    }

    async function onClickKakaoLogin() {
        window.location.assign(`/api/oauth2/authorization/kakao`)
    }

    // async function onClickKakaoLogin() {
    //     const { data } = await axios.get('/api/hello')
    //     console.log(data)
    // }

    function onClickNaverLogin() {
        window.location.assign(`/api/oauth2/authorization/naver`)
    }

    async function testConnection() {
        const { data } = await axios.get(`/api/hello`)
        console.log(data)
        return data
    }

    async function testConnectionTwo() {
        const { data } = await axios.get(`/api/bye`)
        console.log(data)
        return data
    }

    return (
        <div>
            {/*<button onClick={onClickKakaoLogin}>Kakao 로그인</button>*/}
            {/*<button onClick={clickKakaoLoginHandler}>Kakao 로그인2</button>*/}
            {/*<a href="/api/oauth2/authorization/kakao?redirect_uri=http://localhost:8080/login/oauth2/code/kakao">*/}
            {/*    Kakao 로그인2*/}
            {/*</a>*/}
            <a href={KAKAO_AUTH_URL}>Kakao 로그인 NOW</a>
            <button onClick={onClickNaverLogin}>Naver 로그인</button>
            <button onClick={testConnection}>Test</button>
            <button onClick={testConnectionTwo}>Test</button>
        </div>
    )
}

export default LoginPage

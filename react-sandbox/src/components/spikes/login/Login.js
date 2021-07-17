import { useState } from 'react'
import styled from 'styled-components'
import KakaoLogin from 'react-kakao-login'

const KaKaoBtn = styled(KakaoLogin)`
    padding: 0;
    width: 190px;
    height: 44px;
    line-height: 44px;
    color: #783c00;
    background-color: #ffeb00;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
    }
`

const Login = () => {
    const [data, setData] = useState(null)

    function onLoginKakao(res) {
        setData(res)
        alert(JSON.stringify(data))
    }

    return (
        <div>
            <KaKaoBtn
                jsKey={'6449cfdb1c4e8c49f834e75db1af3433'}
                onSuccess={(result) => onLoginKakao(result)}
                onFailure={(result) => console.log(result)}
                render={(props) => <div onClick={props.onClick} />}
                getProfile={true}
                onFail={(result) => console.log(result)}
            />
        </div>
    )
}

export default Login

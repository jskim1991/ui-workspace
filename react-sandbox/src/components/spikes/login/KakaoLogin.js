import React, { Component } from 'react'
import Styled from 'styled-components'
import { withRouter } from 'react-router-dom'

const ButtonWrap = Styled.div`
  background-repeat: no-repeat;
  margin: 38px auto;
  color: transparent;
  width: 183px;
  height: 45px;
`

const { Kakao } = window

class KakaoLogin extends Component {
    state = {
        isLogin: false,
    }
    loginWithKakao = () => {
        try {
            return new Promise((resolve, reject) => {
                console.log('before login')
                if (!Kakao) {
                    reject('인스턴스 없음')
                }
                Kakao.Auth.login({
                    success: (res) => {
                        console.log('success: ', res)
                        localStorage.setItem('token', res.token)
                        this.setState({
                            isLogin: true,
                        })
                        this.props.history.push('/welcome')
                    },
                    fail: (err) => {
                        console.error(err)
                    },
                })
                console.log('after login')
            })
        } catch (err) {
            console.error(err)
        }
    }
    componentDidMount() {
        if (Kakao.Auth.getAccessToken()) {
            console.log('logged in already')
            this.setState({
                isLogin: true,
            })
        }
    }
    render() {
        const { isLogin } = this.state
        console.log('isLogin', isLogin)
        const loginView = (
            <button onClick={this.loginWithKakao}>Kakao Login</button>
        )

        return <div>{!isLogin && <div className="App">{loginView}</div>}</div>
    }
}

export default withRouter(KakaoLogin)

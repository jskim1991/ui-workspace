import React, { Component } from 'react'
import KaKaoLogin from 'react-kakao-login'

export class Home extends Component {
    render() {
        return (
            <div>
                <KaKaoLogin
                    token={'6449cfdb1c4e8c49f834e75db1af3433'}
                    onSuccess={console.log}
                    onFail={console.error}
                    onLogout={console.info}
                />
            </div>
        )
    }
}

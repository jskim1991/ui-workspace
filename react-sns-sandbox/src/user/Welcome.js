import axios from 'axios'

const { REACT_APP_SERVER_URL } = process.env

const Welcome = () => {
    const callBackend = async () => {
        const token = localStorage.getItem('token')
        const { data } = await axios.get(`/api/welcome`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        console.log(data, token)
        return data
    }

    return (
        <div>
            <h1 style={{ marginTop: '90px' }}>The welcome page</h1>
            <button onClick={callBackend}>Hit me</button>
        </div>
    )
}

export default Welcome

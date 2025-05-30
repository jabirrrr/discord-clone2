import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'

import { Button } from '@material-ui/core'

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            <h2>Welcome to the Login page</h2>
            <div className="login__logo">
                <img src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-branding-2.png" alt="" srcset=""/>
            </div>

            <Button onClick={signIn}>SignIn</Button>

        </div>
    )
}

export default Login

import React, { Component } from 'react';

class Login extends Component{

    render(){
        return(
            <div>
                <div>
                    Login
                </div>
                <div>
                    Username
                    <input type="text" placeholder="username"/>
                </div>
                <div>
                    Password
                </div>
            </div>
        )
    }

}

export default Login
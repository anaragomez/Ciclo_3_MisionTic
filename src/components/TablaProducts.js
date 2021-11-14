import React, {
    Fragment, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from 'react-router';
function RegisterPage() {
    const {isAuthenticated } = useAuth0();

    if (localStorage.getItem("state") == "user" && isAuthenticated) {
        return (
            <Fragment>
                <h1>Register Page</h1>
            </Fragment>
        )
    }
    else{
        return <Redirect to="/"></Redirect>
    }
}

export default RegisterPage;
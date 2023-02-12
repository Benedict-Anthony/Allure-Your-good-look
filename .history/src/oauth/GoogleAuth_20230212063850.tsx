import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { oAuth } from '../utils/oauth';


const GoogleAuth = () => {
    const clientId = process.env.REACT_APP_GOOGL_APP_ID as string;
    function handleSuccess(response: any) {
        oAuth(response.authResponse.accessToken, "google")

        console.log(response)
    }

    function handleError(error: any) {
        console.log(error)
    }
    return (
        <GoogleOAuthProvider clientId={clientId} >
            <GoogleLogin
                onSuccess={() => handleSuccess}
                onError={() => handleError}

            />
        </GoogleOAuthProvider>
    )
}

export default GoogleAuth
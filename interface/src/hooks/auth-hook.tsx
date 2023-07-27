import useLocalStorage from "./localstorage-hook";

const CONSTANT_KEYS = {
    preAuthToken: "OAUTH_PRE_AUTH_TOKEN",
    credentials: "OAUTH_CREDENTIALS"
};

const useAuth = () => {

    const localStorage = useLocalStorage();
    
    const authenticate = async (email: string): Promise<AuthenticateResponse> => {
        // TODO: Initialize authentication with the server
        console.log(`[MOCKED] Authorizing for email ${email} confirmed successfully.`)

        localStorage.set(CONSTANT_KEYS.preAuthToken, {auth: 'ok'})

        return {
            success: true
        };
    }

    const confirmCode = async(code: string): Promise<AuthorizationResponse> => {
        // TODO: Validate code calling the server
        console.log(`[MOCKED] Code ${code} confirmed successfully.`)

        const credentials = {
            accessToken: 'asdasdsdd',
            refreshToken: 'asdadsadd'
        };

        localStorage.set(CONSTANT_KEYS.credentials, credentials)
        
        return credentials
    }

    const isAuthenticated = () => {
        // validate expired
        return !!localStorage.get(CONSTANT_KEYS.credentials);
    }

    const isPreAuthenticated = () => {
        return !!localStorage.get(CONSTANT_KEYS.preAuthToken);
    }

    return {
        authenticate,
        isAuthenticated,
        isPreAuthenticated,
        confirmCode
    }
}

export default useAuth;
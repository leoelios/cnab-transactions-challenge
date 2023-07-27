import { Alert, Button, Snackbar, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/auth-hook";
import CenterModal from "../../components/center-modal";

export default () => {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorOpened, setErrorOpened] = useState(false);

    const auth = useAuth();
    const navigate = useNavigate();
    
    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => 
        setEmail(e.currentTarget.value)

    const addError = (message: string) => {
        setErrorOpened(true);
        setMessage(message);

        setTimeout(() => setErrorOpened(false), 2000)
    }

    const signIn = async () => {
        const { success } = await auth.authenticate(email);

        if (!success) {
            addError('An error ocurred during authentication');
            return;
        }
        
        navigate('/login/confirm-code');
    }

    if (auth.isAuthenticated()) {
        return <Navigate to={'/'} />
    }

    if (auth.isPreAuthenticated()) {
        return <Navigate to={'/login/confirm-code'} />
    }

    return <>
        <CenterModal>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }} marginBottom={2}>LOGIN</Typography>
            <Typography paddingBottom={3} sx={{color: 'rgba(255,255,255,0.7)'}}>Authenticate using your e-mail</Typography>
            <TextField fullWidth id="outlined-basic" label="E-mail" variant="outlined" onChange={changeEmail} />
            <Button sx={{marginTop: 5, paddingX: 5}} variant="contained" onClick={signIn}>Sign-in</Button>
        </CenterModal>

        <Snackbar open={errorOpened} anchorOrigin={{ vertical: "top", horizontal: "right"}}>
            <Alert severity="error" sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    </>
}
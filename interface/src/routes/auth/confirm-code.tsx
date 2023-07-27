import { Box, Button, Typography } from "@mui/material"
import CenterModal from "../../components/center-modal"
import CodeInput from "../../components/code-input"
import { Navigate, useNavigate } from "react-router-dom"
import useAuth from "../../hooks/auth-hook"
import { useState } from "react"

export default () => {

    const [code, setCode] = useState("");
    const navigation = useNavigate();
    const { isAuthenticated, confirmCode: confirmEmailCode } = useAuth();

    const confirmCode = () => {
        confirmEmailCode(code);
        navigation('/')
    }

    const onChangeCode = (value: string) => {
        setCode(value);

        return {};
    }

    if (isAuthenticated()) {
        return <Navigate to={'/'} />
    }

    return <CenterModal>
        <Box>
            <Typography variant="h6">Confirm the code sent to your e-mail</Typography>
            <Typography sx={{opacity: '50%', marginBottom: 2}}>Check your inbox and enter the code received above</Typography>
            <CodeInput onChange={onChangeCode} />
        </Box>
        <Button onClick={confirmCode} sx={{marginTop: 4}} variant="contained">Confirm code</Button>
    </CenterModal>
}
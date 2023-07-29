import { Box, Grid } from "@mui/material"
import { ReactNode } from "react"

export default ({ children, ...props }: { children?: ReactNode | undefined, style?: object }) => {
    return <Grid container alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
            <Box {...props} sx={{
                borderRadius: '17px',
                border: '4px solid #615283',
                background: '#19172F',
                minWidth: '60vw',
                minHeight: '92vh'
            }} padding={10}>
                {children}
            </Box>
        </Grid>
}
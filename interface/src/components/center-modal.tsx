import { Box, Grid } from "@mui/material"

export default ({ children, ...props }: React.PropsWithChildren) => {
    return <Grid container alignItems="center" justifyContent="center" style={{ height: '100vh' }}>
            <Box {...props} sx={{
                borderRadius: '17px',
                border: '4px solid #615283',
                background: '#19172F', 
                minWidth: '25vw'
            }} padding={10}>
                {children}
            </Box>
        </Grid>
}
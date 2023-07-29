import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, Button, Typography } from "@mui/material"

export default ({value, label}: {value: string, label: string}) => {
    return  <Box borderRadius={'14px'} border={'3px solid #615283'} p={2} display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
        <Box sx={{backgroundColor: '#615283', mr: 2}} p={1} px={2} borderRadius={'14px'}>
            <Typography fontWeight={'bold'} textTransform={"uppercase"}>{label}</Typography>
        </Box>
        <Typography mr={2} fontWeight={'bold'}>{value}</Typography>
        <Button variant="contained" color="secondary">
            <FontAwesomeIcon icon="clipboard" /> 
        </Button>
    </Box>
}
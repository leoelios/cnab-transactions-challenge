import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Typography } from "@mui/material";
import { FileUploader } from "react-drag-drop-files";


function DragDrop({ onChange, buttonMessage = "Upload File", loading = false }: {onChange: (file: File) => void, buttonMessage?: string, loading?: boolean}) {

  return (
    <FileUploader disabled={loading} handleChange={onChange} name="file" hoverTitle=" ">
        <Box marginY={4} sx={{ borderRadius: '14px', border: '4px dashed #615283', cursor: loading ? "default" : "pointer", opacity: loading ? 0.3 : 1}} padding={2} minWidth={'50vw'} minHeight={'50vh'}
            display={"flex"}
            flexDirection={'column'}
            alignItems={"center"}
            justifyContent={'center'}>
            <FontAwesomeIcon icon={{
                prefix: 'fas',
                iconName: 'file-alt'
            }} size={"4x"} color="#615283" />
            <Typography marginTop={4} variant="h6" color='#AB95DD'>Click for upload or drop a CNAB file here</Typography>
        </Box>
        <Button disabled={loading} sx={{padding: 3}} fullWidth variant="contained" color="secondary">
          {loading ? <FontAwesomeIcon icon="rotate" spin size="2x" /> : <></>}
          <Typography mx={2} sx={{fontWeight: 'bold'}}>{buttonMessage}</Typography>
        </Button>
    </FileUploader>
  );
}

export default DragDrop;
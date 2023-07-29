import { useNavigate } from "react-router-dom";
import CenterModal from "../../components/center-modal";
import { Typography } from "@mui/material";
import DragDrop from "../../components/drag-drop-cnab";
import { useState } from "react";
import PrivateRoute from "../../components/private-route";

export default () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>();
  const navigate = useNavigate();

  const loadFile = (file: File) => {
    console.log(file);

    setLoading(true);
    setMessage("PLEASE WAIT, VALIDATING CNAB STRUCTURE...");

    setTimeout(
      () => navigate("/upload-cnab/10948492-594e-4f4a-85f5-e60278b87219"),
      700
    );
  };

  return (
    <PrivateRoute>
      <CenterModal>
        <Typography variant="h5" fontWeight={"bold"}>
          Upload CNAB file
        </Typography>
        <Typography sx={{ opacity: "50%" }}>
          Load transactions balance through uploading a file.
        </Typography>
        <DragDrop
          loading={loading}
          onChange={loadFile}
          buttonMessage={message}
        />
      </CenterModal>
    </PrivateRoute>
  );
};

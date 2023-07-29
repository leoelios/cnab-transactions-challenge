import { Box, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export default () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isUploading = () => {
    return location.pathname.includes("/upload-cnab");
  };

  const viewingMerchants = () => {
    return location.pathname.includes("/merchants");
  };

  return (
    <Box
      sx={{
        m: 2,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          borderRadius: "17px",
          border: "4px solid #615283",
          background: "#19172F",
        }}
        padding={3}
      >
        <nav>
          <Button
            sx={{ mx: 2 }}
            variant={isUploading() ? "contained" : "outlined"}
            color="secondary"
            onClick={() => navigate("/upload-cnab")}
          >
            UPLOAD
          </Button>
          <Button
            variant={viewingMerchants() ? "contained" : "outlined"}
            color="secondary"
            onClick={() => navigate("/merchants")}
          >
            MERCHANTS
          </Button>
        </nav>
      </Box>
    </Box>
  );
};

import { Box, Typography } from "@mui/material";
import { Merchant } from "../types/merchant";
import { useNavigate } from "react-router-dom";

export default ({ merchant }: { merchant: Merchant }) => {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate("/merchant/6a6503a7-fd12-4333-a1c9-ebff61984694")}
      display={"flex"}
      flexDirection={"row"}
      my={1}
      sx={{
        p: 3,
        borderRadius: 3,
        cursor: "pointer",
        border: "4px solid #615283",
        ":hover": {
          backgroundColor: "#615283",
        },
      }}
    >
      <Typography fontWeight={900}>{merchant.name}</Typography>
    </Box>
  );
};

import { Box, Button, TextField, Typography } from "@mui/material";
import CenterModal from "../../components/center-modal";
import PrivateRoute from "../../components/private-route";
import { useEffect, useState } from "react";
import { Merchant } from "../../types/merchant";
import MerchantView from "../../components/merchant-line";

export default () => {
  const [merchants, setMerchants] = useState<Array<Merchant>>();

  useEffect(() => {
    console.log("test");

    setMerchants([
      {
        name: "Leonardo Test",
      },
      {
        name: "Leonardo Test",
      },
      {
        name: "Leonardo Test",
      },
      {
        name: "Leonardo Test",
      },
      {
        name: "Leonardo Test",
      },
    ]);
  }, []);

  return (
    <PrivateRoute>
      <CenterModal>
        <Typography variant="h5" fontWeight={900} mb={2}>
          Select a merchant
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.7 }} mb={5}>
          Show data assigned to a merchant by selecting one above.
        </Typography>

        <Box
          sx={{
            borderRadius: "17px",
            border: "4px solid #615283",
            padding: 4,
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            sx={{
              mb: 2,
            }}
          >
            <TextField
              variant="outlined"
              color="secondary"
              fullWidth
              label="Search by merchant name"
              id="fullWidth"
            />
            <Button
              variant="contained"
              sx={{ p: 2, px: 4, fontWeight: 900, ml: 2 }}
            >
              Search
            </Button>
          </Box>
          <Box display={"flex"} flexDirection={"column"} flexWrap={"wrap"}>
            {merchants?.map((merchant, index) => (
              <MerchantView key={"merchant_" + index} merchant={merchant} />
            ))}
          </Box>
        </Box>
      </CenterModal>
    </PrivateRoute>
  );
};

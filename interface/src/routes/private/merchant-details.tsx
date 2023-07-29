import { Box, Button, Typography } from "@mui/material";
import CenterModal from "../../components/center-modal";
import PrivateRoute from "../../components/private-route";
import { useEffect, useState } from "react";
import { MerchantDetails } from "../../types/merchant-details";
import TransactionLine from "../../components/transaction-line";

export default () => {
  const [merchantDetails, setMerchantDetails] = useState<MerchantDetails>();

  useEffect(() => {
    // TODO: Load merchant detail

    setMerchantDetails({
      merchant: {
        name: "Leonardo Test",
      },
      balance: 51.22,
      transactions: [
        {
          typeCode: 1,
          amount: 22.2,
          customer: {
            cardNumber: "1234***********1111",
            cpf: "123.532.123-52",
          },
          merchant: {
            name: "Leonardo Elias",
          },
          timestamp: new Date(),
        },
        {
          typeCode: 1,
          amount: 22.2,
          customer: {
            cardNumber: "1234***********1111",
            cpf: "123.532.123-52",
          },
          merchant: {
            name: "Leonardo Elias",
          },
          timestamp: new Date(),
        },
        {
          typeCode: 1,
          amount: 22.2,
          customer: {
            cardNumber: "1234***********1111",
            cpf: "123.532.123-52",
          },
          merchant: {
            name: "Leonardo Elias",
          },
          timestamp: new Date(),
        },
      ],
    });
  }, []);

  return (
    <PrivateRoute>
      <CenterModal>
        <Typography variant="h4" fontWeight={900} mb={7}>
          {merchantDetails?.merchant.name}
        </Typography>

        <Box mb={7}>
          <Typography variant="h5" fontWeight={800} sx={{ opacity: 0.5 }}>
            Balance
          </Typography>
          <Typography variant="h2">R$ {merchantDetails?.balance}</Typography>
        </Box>

        <Box>
          <Box display={"flex"} flexDirection={"row"} mb={3}>
            <Typography variant="h5" fontWeight={800} sx={{ opacity: 0.5 }}>
              Transactions
            </Typography>
            <Button variant="contained" sx={{ ml: 2, fontWeight: 900 }}>
              View all (55)
            </Button>
          </Box>

          {merchantDetails?.transactions.map((transaction, index) => (
            <Box mb={3}>
              <TransactionLine index={index} transaction={transaction} />
            </Box>
          ))}
        </Box>
      </CenterModal>
    </PrivateRoute>
  );
};

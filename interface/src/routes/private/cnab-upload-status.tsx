import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Typography,
  Zoom,
} from "@mui/material";
import CenterModal from "../../components/center-modal";
import ClickAndCopy from "../../components/click-and-copy";
import { useEffect, useState } from "react";
import { Transaction } from "../../types/transaction";
import PrivateRoute from "../../components/private-route";
import TransactionLine from "../../components/transaction-line";

export default () => {
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState<Array<Transaction>>([]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 100);

    setTimeout(
      () =>
        setTransactions([
          {
            typeCode: 1,
            amount: 22.2,
            customer: {
              cardNumber: "1234***********1111",
              cpf: "123.532.123-52",
            },
            merchant: {
              name: "Roberto Nogueira",
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
              name: "Raquel Cristina",
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
              name: "Marcelle Elias",
            },
            timestamp: new Date(),
          },
        ]),
      500
    );
  }, []);

  return (
    <PrivateRoute>
      <CenterModal>
        <Zoom in={!loading}>
          <Alert
            variant="filled"
            severity="success"
            sx={{
              color: "#fff",
              width: "100%",
              padding: 2,
              "& .MuiAlert-message": { textAlign: "center", width: "inherit" },
              mb: 4,
            }}
          >
            <Typography fontWeight={"bold"}>VALID CNAB FILE</Typography>
          </Alert>
        </Zoom>
        <Box display={"inline-block"}>
          <ClickAndCopy
            label="CNAB key"
            value="10948492-594e-4f4a-85f5-e60278b87219"
          />
        </Box>
        <Box
          display={"flex"}
          mt={8}
          mb={2}
          flexDirection={"row"}
          alignItems={"center"}
        >
          <Typography variant="h6" mr={2} fontWeight={"bold"}>
            Parsing status
          </Typography>
          <Button variant="contained">
            <Typography fontWeight={"bold"} mr={1}>
              55
            </Typography>{" "}
            processed rows
          </Button>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={transactions.length === 0 ? "center" : "flex-start"}
          justifyContent={transactions.length === 0 ? "center" : "flex-start"}
          minHeight={"50vh"}
        >
          {transactions.length === 0 ? (
            <>
              <CircularProgress />
              <Typography sx={{ opacity: 0.5 }} mt={5}>
                Please, wait some seconds, we are processing the first
                records...
              </Typography>
            </>
          ) : (
            <>
              {transactions.map((transaction, index) => (
                <TransactionLine transaction={transaction} index={index} />
              ))}
            </>
          )}
        </Box>
      </CenterModal>
    </PrivateRoute>
  );
};

import { Box, Button, Typography } from "@mui/material";
import { Transaction } from "../types/transaction";
import { Merchant } from "../types/merchant";

export default ({
  index,
  transaction,
}: {
  index: number;
  transaction: Transaction;
}) => {
  const merchantNameAlias = (merchant: Merchant) => {
    const names = merchant.name.split(" ");

    return names.map((word) => word.charAt(0).toUpperCase()).join("");
  };

  return (
    <Box
      width={"100%"}
      my={1}
      key={index}
      p={2}
      px={4}
      borderRadius={"14px"}
      border={"3px solid #615283"}
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        position={"relative"}
        top={10}
      >
        <Box
          width={70}
          height={70}
          borderRadius={"50%"}
          bgcolor={"#fff"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography color={"#717171"} fontWeight={"bold"}>
            {merchantNameAlias(transaction.merchant)}
          </Typography>
        </Box>
        <Box
          sx={{ position: "relative", top: -20 }}
          borderRadius={20}
          bgcolor={"#45A24C"}
          p={0.5}
          px={2}
        >
          <Typography fontSize={12} fontWeight={900}>
            DEB
          </Typography>
        </Box>
      </Box>

      <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
        <Typography mx={1}>{transaction.customer.cpf}</Typography>
        <Typography mx={1}>{transaction.customer.cardNumber}</Typography>
      </Box>

      <Box>
        <Button variant="contained">
          <Typography fontWeight={900}>R$ 50,00</Typography>
        </Button>
      </Box>

      <Typography>{transaction.timestamp.toLocaleTimeString()}</Typography>
    </Box>
  );
};

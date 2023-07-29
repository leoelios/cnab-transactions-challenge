import { Navigate } from "react-router-dom";
import useAuth from "../hooks/auth-hook";
import NavBar from "./nav-bar";
import { Container } from "@mui/material";

export default ({ children }: React.PropsWithChildren) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated()) {
    return <Navigate to={"/login"} />;
  }

  return (
    <Container>
      <NavBar />
      {children}
    </Container>
  );
};

import { Container, Box, Typography, ThemeProvider } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "./link";
import { ReactNode } from "react";
import { createTheme } from "@mui/material/styles";
import { amber, grey, lightBlue } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: lightBlue,
    secondary: amber,
  },
});

theme.typography.h1 = {
  fontSize: "1.4rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.4rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
  },
};

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box component="main" sx={{ minHeight: "100vh" }}>
        {children}
      </Box>
      <Box component="footer">
        <Container sx={{ my: 3 }}>
          <Typography
            variant="subtitle1"
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            &copy; {new Date().getFullYear()} - Made With{" "}
            <FavoriteBorderIcon sx={{ mx: 1 }} /> by{" "}
            <Link href="https://tomfordweb.com" target="_blank" sx={{ mx: 1 }}>
              tomfordweb
            </Link>{" "}
            <Link href="https://github.com/tomfordweb/fitness-calculator">
              github
            </Link>
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

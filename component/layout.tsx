import { Container, Box, Typography, ThemeProvider } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "./link";
import { ReactNode } from "react";
import { AppBreadcrumbs } from "./breadcrumbs";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({});
export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box component="header" sx={{ py: 3, bgcolor: "primary.main" }}>
        <Container>
          <Typography variant="h6" align="center" component="div">
            <Link
              sx={{
                textDecoration: "none",
                textTransform: "uppercase",
                color: "text.primary",
              }}
              href="/'"
            >
              Fitness Calculators
            </Link>
          </Typography>
        </Container>
      </Box>
      <Box component="main">{children}</Box>
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
            <Link href="#">github</Link>
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

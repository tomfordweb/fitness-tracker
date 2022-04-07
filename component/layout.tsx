import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ReactNode } from "react";
import { AppBreadcrumbs } from "./breadcrumbs";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header>
        <AppBar position="fixed">
          <Toolbar>
            <Typography>Fitness Calculators</Typography>
          </Toolbar>
        </AppBar>
      </header>
      <Container style={{ marginTop: "100px" }}>
        <AppBreadcrumbs />
        <main style={{ marginTop: "20px" }}>{children}</main>
      </Container>
      <footer></footer>
    </>
  );
};

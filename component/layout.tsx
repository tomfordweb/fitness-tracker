import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import Link from "./link";
import { ReactNode } from "react";
import { AppBreadcrumbs } from "./breadcrumbs";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header>
        <AppBar position="fixed">
          <Toolbar>
            <Typography>
              <Link href="/">Fitness Calculators</Link>
            </Typography>
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

import { AppBar, Toolbar, Typography } from "@mui/material";
import { ReactNode } from "react";
import { AppBreadcrumbs } from "./breadcrumbs";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header>
        <AppBar>
          <Toolbar>
            <Typography>Fitness Calculators</Typography>
          </Toolbar>
        </AppBar>
        <AppBreadcrumbs />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

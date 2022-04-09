import {
  AppBar,
  Button,
  Switch,
  Container,
  Menu,
  MenuItem,
  Box,
  Toolbar,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "./link";
import { ReactNode, useState } from "react";
import { AppBreadcrumbs } from "./breadcrumbs";

export const Layout = ({ children }: { children: ReactNode }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <header>
        <AppBar sx={{ display: "flex" }} position="fixed">
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography component="div">Fitness Calculators</Typography>
            </Box>
            <Box mr="3">
              <Button
                id="basic-button"
                color="success"
                variant="contained"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Change Unit{" "}
                <Typography variant="subtitle2">(Standard)</Typography>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Metric</MenuItem>
                <MenuItem onClick={handleClose}>Standard</MenuItem>
              </Menu>
            </Box>
            <Switch
              inputProps={{ "aria-label": "Light Mode" }}
              defaultChecked
            />
          </Toolbar>
        </AppBar>
      </header>
      <Container style={{ marginTop: "100px", minHeight: "100vh" }}>
        <AppBreadcrumbs />
        <main style={{ marginTop: "20px" }}>{children}</main>
      </Container>
      <footer>
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
      </footer>
    </>
  );
};

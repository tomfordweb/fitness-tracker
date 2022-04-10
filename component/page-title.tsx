import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { AppBreadcrumbs } from "./breadcrumbs";

export const PageTitle = (props: { h1: string; caption?: string }) => {
  return (
    <>
      <Box component="header" sx={{ py: 3, bgcolor: "secondary.main" }}>
        <Typography align="center" component="h1" variant="h1">
          {props.h1}
        </Typography>
        {props.caption && (
          <Typography component="p" align="center" variant="h3">
            {props.caption}
          </Typography>
        )}
      </Box>
      <Container component="nav" sx={{ py: 3 }}>
        <AppBreadcrumbs />
      </Container>
    </>
  );
};

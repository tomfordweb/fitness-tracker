import { Box, Breadcrumbs, Container, Typography } from "@mui/material";
import Link from "./link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const convertBreadcrumb = (string: string) => {
  return string
    .replace(/-/g, " ")
    .replace(/oe/g, "ö")
    .replace(/ae/g, "ä")
    .replace(/ue/g, "ü")
    .toUpperCase();
};

export const AppBreadcrumbs = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<
    { breadcrumb: string; href: string }[]
  >([]);

  useEffect(() => {
    if (router) {
      const path = router.asPath.split("?")[0];
      const linkPath = path.split("/");
      linkPath.shift();

      const pathArray = linkPath
        .map((path, i) => {
          return {
            breadcrumb: path,
            href: "/" + linkPath.slice(0, i + 1).join("/"),
          };
        })
        .filter((bc) => bc.breadcrumb.length > 0);

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs.length) {
    return null;
  }

  return (
    <>
      <Breadcrumbs sx={{ py: 5 }} aria-label="breadcrumb">
        <Link href="/">HOME</Link>
        {breadcrumbs.map((breadcrumb, i) => {
          return (
            <Link sx={{ fc: "text.light" }} key={i} href={breadcrumb.href}>
              {i === breadcrumbs.length - 1 ? (
                <Typography color="text.primary">
                  {convertBreadcrumb(breadcrumb.breadcrumb)}
                </Typography>
              ) : (
                convertBreadcrumb(breadcrumb.breadcrumb)
              )}
            </Link>
          );
        })}
      </Breadcrumbs>
    </>
  );
};

import * as React from "react";
import Head from "next/head";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import logoPath from "../public/images/logotype/hmgrouplogo.svg";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import next from "next";
function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function Navbar() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down(376));
  const isSm = useMediaQuery(theme.breakpoints.down(769));

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages = [
    { name: "Tech at H&M Group", url: "/techathmgroup" },
    { name: "How we hire", url: "/hiringprocess" },
    { name: "FAQ", url: "/faq" },
  ];

  if (isXs || isSm) {
    pages.push({
      name: "Explore all tech jobs",
      url: "https://careers.smartrecruiters.com/HMGroup/hmgrouptechcareers",
    });
  }

  return (
    <HideOnScroll>
      <AppBar
        position="absolute"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Container>
          <Head>
            {/* OneTrust Cookies Consent Notice start for techcareers.hmgroup.com */}
            <script
              type="text/javascript"
              src="https://cdn.cookielaw.org/consent/8b30c581-623e-450b-b2a2-7a4c276bb8e9/OtAutoBlock.js"
              defer
            ></script>
            <script
              src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
              data-document-language="true"
              type="text/javascript"
              charset="UTF-8"
              data-domain-script="8b30c581-623e-450b-b2a2-7a4c276bb8e9"
              defer
            ></script>
            {/* OneTrust Cookies Consent Notice end for techcareers.hmgroup.com  */}
          </Head>
          <Toolbar
            disableGutters
            style={
              isXs || isSm ? { display: "flex", justifyContent: "center" } : {}
            }
          >
            {(isXs || isSm) && (
              <>
                <Button
                  className={styles.hamburgerButton}
                  onClick={handleOpenNavMenu}
                  style={{ position: "absolute", left: 0, color: "white" }}
                >
                  ☰
                </Button>
                <Menu
                  anchorEl={anchorElNav}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  disableScrollLock={true}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                      <Link href={page.url} passHref>
                        {page.name}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            )}
            <Link
              href="/"
              style={
                isXs || isSm
                  ? { display: "flex", justifyContent: "center", width: "100%" }
                  : {}
              }
            >
              <Image
                src={logoPath}
                width={140}
                height={26.82}
                alt="H&M Group Logo"
              />
            </Link>
            <Box
              className={styles.navBarLinks}
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              {pages.map((page) => (
                <Link key={page.name} href={page.url} passHref>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Box>
            {!(isXs || isSm) && (
              <Button
                className={styles.navBarCta}
                variant="outlined"
                href="https://careers.smartrecruiters.com/HMGroup/hmgrouptechcareers"
                target="_blank"
                style={{
                  color: "white",
                  borderColor: "white",
                  padding: "16px 32px",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "21px",
                  borderRadius: "0",
                }}
              >
                Explore all tech jobs
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}

export default Navbar;

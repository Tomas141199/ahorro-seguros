import * as React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Logo from "../../images/logo-footer.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Stack
      component={"footer"}
      sx={{
        bgcolor: "white",
        marginTop: "auto",
        paddingX: 10,
      }}
      alignItems={"center"}
      justifyContent={"space-between"}
      direction={{ xs: "column", sm: "row" }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={1}
        alignItems="center"
      >
        <Box>
          <img src={Logo} width={180} alt="logo ahorro seguros" />
        </Box>
        <Stack>
          <Stack spacing={1} justifyContent="center">
            <Stack direction="row">
              <Button
                sx={{ textTransform: "lowercase" }}
                startIcon={<MailOutlineIcon color="secondary" />}
              >
                <a
                  style={{ textDecoration: "none", color: "#00477A" }}
                  href={`mailto:ROBERTO.LAGUNES@AHORRO-SEGUROS.COM`}
                >
                  {"roberto.lagunes@ahorro-seguros.com"}
                </a>
              </Button>
            </Stack>
            <Stack direction="row">
              <Button startIcon={<LocalPhoneIcon color="primary" />}>
                <a
                  style={{ textDecoration: "none", color: "#00477A" }}
                  href={`tel:2711538665`}
                >
                  {"271 153 8665"}
                </a>
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Stack>
        <Stack spacing={1} direction="column">
          <Stack direction={"row"}>
            <FacebookIcon style={{ color: "#2050b3" }} />
            <Typography
              component={"a"}
              href="https://www.facebook.com/profile.php?id=1517430488&mibextid=LQQJ4d"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              Roberto Lagunes Cabrera
            </Typography>
          </Stack>
          <Stack direction={"row"}>
            <InstagramIcon style={{ color: "#E1306C" }} />
            <Typography
              component={"a"}
              target="_blank"
              href="https://instagram.com/robert_lagunes?igshid=YmMyMTA2M2Y="
              style={{ textDecoration: "none", color: "black" }}
            >
              Roberto Lagunes Cabrera
            </Typography>
          </Stack>

          <Stack direction={"row"}>
            <LinkedInIcon style={{ color: "#2050b3" }} />
            <Typography
              component={"a"}
              target="_blank"
              href="https://www.linkedin.com/in/roberto-lagunes-cabrera-09a74b261"
              style={{ textDecoration: "none", color: "black" }}
            >
              Roberto Lagunes Cabrera
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;

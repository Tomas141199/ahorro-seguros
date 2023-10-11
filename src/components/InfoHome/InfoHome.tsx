import * as React from "react";
import { useStaticQuery, Link } from "gatsby";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { Button, Rating, Stack, Typography } from "@mui/material";
import gray from "@mui/material/colors/grey";
import Grid from "@mui/material/Grid";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { homeInfo } from "../../constants";

const InfoHome = () => {
  const info = homeInfo;
  const { nombre, puesto, urlImg, telefono, correo, descripcion } = info;

  return (
    <Container maxWidth="sm" sx={{ marginTop: "60px", marginX: "auto" }}>
      <Grid container spacing={{ xs: 2 }}>
        <Grid item xs={2}>
          <Avatar
            alt="Roberto Lagunes Profile"
            sx={{
              width: 90,
              height: 90,
              "& .MuiAvatar-img": { width: 90 },
            }}
            src={urlImg}
          />
        </Grid>
        <Grid item xs={10}>
          <Stack>
            <Typography variant="h6" component={"h1"}>
              {nombre}
            </Typography>
            <Typography
              component={"h6"}
              color={gray[600]}
              sx={{ fontWeight: 100 }}
            >
              {puesto}
            </Typography>
            <Rating name="read-only" value={5} readOnly />
            <Stack
              component={"div"}
              direction={"row"}
              spacing={1}
              mt={2}
              width="100%"
            >
              <Typography variant="h3" component={"h3"} fontWeight={"bold"}>
                ELIGE
              </Typography>
              <Typography
                variant={"h2"}
                component={"h2"}
                fontWeight={"bold"}
                color="primary"
                className="before"
              >
                AHORRO
              </Typography>
            </Stack>

            <Stack mt={4} spacing={1} justifyContent="center">
              {descripcion.map((item: any) => (
                <Stack direction="row" key={item.id}>
                  <FiberManualRecordIcon sx={{ width: 8, display: "inline" }} />
                  <Typography component={"h4"} fontWeight="500">
                    {item.descripcion}
                  </Typography>
                </Stack>
              ))}
            </Stack>

            <Stack mt={4} spacing={1} justifyContent="center">
              <Stack direction="row">
                <Button
                  sx={{ textTransform: "lowercase" }}
                  startIcon={<MailOutlineIcon color="secondary" />}
                >
                  <a
                    style={{ textDecoration: "none", color: "#00477A" }}
                    href={`mailto:${correo}`}
                  >
                    {correo}
                  </a>
                </Button>
              </Stack>
              <Stack direction="row">
                <Button startIcon={<LocalPhoneIcon color="primary" />}>
                  <a
                    style={{ textDecoration: "none", color: "#00477A" }}
                    href={`tel:${telefono}`}
                  >
                    {telefono}
                  </a>
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Link
          to="/sobre"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            textDecoration: "none",
          }}
        >
          <Button
            sx={{
              marginTop: 2,
              width: "auto",
            }}
            variant="contained"
            color="primary"
          >
            Conóceme
          </Button>
        </Link>
      </Grid>
    </Container>
  );
};

export default InfoHome;

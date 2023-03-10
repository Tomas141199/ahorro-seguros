import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { MainLayout, SEO } from "../templates";
import { Avatar, Button, Container, Paper } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Stack } from "@mui/system";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Awards } from "../components/Awards";
import { HeadFC } from "gatsby";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <MainLayout>
      <Container component={"div"} maxWidth="md" sx={{ marginTop: 10 }}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              aria-label="basic tabs example"
            >
              <Tab label="¿Quién soy?" {...a11yProps(0)} />
              <Tab label="Experiencia" {...a11yProps(1)} />
              <Tab label="Certificaciones" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent="center"
              alignItems={"center"}
              gap={3}
            >
              <Box>
                <Typography component={"h1"} variant="h6">
                  Roberto Lagunes Cabrera
                </Typography>
                <Typography component={"h2"} color={grey[400]}>
                  Agente Profesional de Seguros
                </Typography>
                <Typography component={"p"} marginTop={4} textAlign="left">
                  Actualmente soy Agente Profesional de Seguros. Estoy
                  certificado ante la Comisión Nacional de Seguros y Finanzas,
                  con cédula c334854. Anteriormente me gradué con honores como
                  Master en Comportamiento Humano y Liderazgo con Cédula
                  09155084, así mismo tengo la Licenciatura en Contaduría
                  Pública con Cédula 3139374, Mi intención es fomentar la
                  cultura de estar protegidos tanto como individualmente como
                  familia, así como nuestro patrimonio, esto a través de la
                  industria Aseguradora.
                </Typography>
              </Box>
              <Avatar
                alt="Roberto Lagunes Profile"
                sx={{
                  width: 240,
                  height: 240,
                  "& .MuiAvatar-img": { width: 240 },
                }}
                src={
                  "https://res.cloudinary.com/my-account-145/image/upload/v1675912995/Whats_App_Image_2023_02_08_at_20_41_34_removebg_preview_c5702c11c1.png?updated_at=2023-02-10T03:44:39.135Z"
                }
              />
            </Stack>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Typography component={"h3"} variant="h6" fontWeight={"bold"}>
              Axa Seguros S.A de C.V.
            </Typography>
            <Typography
              component={Stack}
              color={grey[500]}
              mt={1}
              flexDirection="row"
              alignItems={"center"}
            >
              <ArrowRightIcon />
              Inicie como Ejecutivo de Siniestros de Autos 2015-2019
            </Typography>
            <Typography
              component={Stack}
              color={grey[500]}
              mt={1}
              flexDirection="row"
              alignItems={"center"}
            >
              <ArrowRightIcon />
              Ultimo puesto: Gerente Comercial de la zona Córdoba-Orizaba
              2019-2022
            </Typography>

            <Typography
              component={"h3"}
              variant="h6"
              fontWeight={"bold"}
              mt={2}
            >
              BANAMEX S.A. de C.V.
            </Typography>
            <Typography
              component={Stack}
              color={grey[500]}
              mt={1}
              flexDirection="row"
              alignItems={"center"}
            >
              <ArrowRightIcon />
              Último puesto: Gerente sucursal (varias) 2006-2015
            </Typography>

            <Typography
              component={"h3"}
              variant="h6"
              fontWeight={"bold"}
              mt={2}
            >
              UNIVERSIDAD BANAMEX
            </Typography>
            <Typography
              component={Stack}
              color={grey[500]}
              mt={1}
              flexDirection="row"
              alignItems={"center"}
            >
              <ArrowRightIcon />
              Alumno con Honores
            </Typography>
            <Typography
              component={Stack}
              color={grey[500]}
              mt={1}
              flexDirection="row"
              alignItems={"center"}
            >
              <ArrowRightIcon />
              Participación en Proyecto Educación Financiera
            </Typography>
            <Typography
              component={"h3"}
              variant="h6"
              fontWeight={"bold"}
              mt={2}
            >
              UNIVERSIDAD VERACRUZANA
            </Typography>
            <Typography
              component={Stack}
              color={grey[500]}
              mt={1}
              flexDirection="row"
              alignItems={"center"}
            >
              <ArrowRightIcon />
              Titulado con examen CENEVAL
            </Typography>
          </TabPanel>

          <TabPanel value={value} index={2}>
            <Awards />
          </TabPanel>
        </Box>
        <Stack direction="column" justifyContent={"center"}>
          <Button
            sx={{ marginX: "auto" }}
            variant="contained"
            color="secondary"
            startIcon={<LocalPhoneIcon />}
          >
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="tel:271 153 8665"
            >
              Comunicate conmigo
            </a>
          </Button>
        </Stack>
      </Container>
    </MainLayout>
  );
}

export const Head: HeadFC = () => (
  <SEO title="Sobre mi Roberto Lagunes Cabrera" />
);

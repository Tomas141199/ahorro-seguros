import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { MainLayout, SEO } from "../templates";
import { Button, Container, Paper } from "@mui/material";
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
      <Container component={"div"} maxWidth="sm" sx={{ marginTop: 10 }}>
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
              <Tab label="Reconocimientos" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Typography component={"h1"} variant="h6">
              Roberto Lagunes Cabrera
            </Typography>
            <Typography component={"h2"} color={grey[400]}>
              Agente Profesional de Seguros
            </Typography>
            <Typography component={"p"} marginTop={4}>
              Actualmente soy Agente Profesional de Seguros. Estoy certificado
              ante la comisión Nacional de Seguros y Finanzas, con cédula
              c334854. Anteriormente me gradué con honeres como Master en
              Comportamiento Humano y Liderazgo con Cédula 09155084, así mismo
              tengo la Licenciatura en contaduría Pública con Cédula 3139374, Mi
              intención es fomentar la cultura de estar protegidos tanto como
              individualmente como familia, así como nuestro patrimonio, esto a
              travez de la industrua Aseguradora.
            </Typography>
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
              Inicie como Ejecutivo de Siniestros contra Autos 2015-2019
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
              Último puesto: Gerente sucursal (varias) del 2006-2015
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

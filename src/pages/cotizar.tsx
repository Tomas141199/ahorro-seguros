import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { MainLayout, SEO } from "../templates";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormHelperText from "@mui/material/FormHelperText";
import { red } from "@mui/material/colors";
import { HeadFC } from "gatsby";
import { Automovil, Hogar, Salud, Vida } from "../components/Forms";
import Otro from "../components/Forms/Otro/Otro";
import Typography from "@mui/material/Typography";

const Cotizar = () => {
  const [subValidation, setSubValidation] = useState({});

  const validationSchema = yup.object({
    nombre: yup.string().required("El nombre es obligatorio"),
    telefono: yup.string().required("El telefono es requerido"),
    email: yup
      .string()
      .email("Ingrese un email valido")
      .required("El correo es obligatorio"),
    seguro: yup.string().required("Seleccione un tipo de seguro"),
    presupuesto: yup.number().required("El presupuesto es obligatorio"),
    ...subValidation,
  });

  const formik = useFormik({
    initialValues: {
      nombre: "",
      telefono: "",
      email: "",
      seguro: "",
      presupuesto: "",
      marca: "",
      modelo: "",
      anio: "",
      edad: "",
      cp: "",
      descripcionAuto: "",
      superficie: "",
      vivienda: "",
      valor: "",
      descripcionVivienda: "",
      sexo: "",
      enfermedad: "",
      comentarios: "",
      vida: "",
      extra: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("Nombre", values.nombre);
      formData.append("Correo", values.email);
      formData.append("Telefono", values.telefono);
      formData.append("Tipo", values.seguro);
      formData.append("Presupuesto", values.presupuesto);

      switch (values.seguro) {
        case "automovil":
          {
            formData.append("Marca del vehículo", values.marca);
            formData.append("Modelo del vehículo", values.modelo);
            formData.append("Año del modelo", values.anio);
            formData.append("Edad del propetario", values.edad);
            formData.append("Código Postal", values.cp);
            formData.append("Descripción del vehículo", values.descripcionAuto);
            console.log("Entre en vehiculo");
          }
          break;

        case "hogar":
          {
            formData.append("Superficie de la vivienda", values.superficie);
            formData.append("Tipo de vivienda", values.vivienda);
            formData.append("Valor aproximado de la vivienda", values.valor);
            formData.append("Código Postal", values.cp);
            formData.append(
              "Descripción de la vivienda",
              values.descripcionVivienda
            );
          }
          break;

        case "salud":
          {
            formData.append("Sexo del solicitante", values.sexo);
            formData.append("Edad del solicitante", values.edad);
            formData.append("Código Postal", values.cp);
            formData.append("Enfermedad", values.enfermedad);
            formData.append("Comentarios", values.comentarios);
          }
          break;

        case "vida":
          {
            formData.append("Tipo de servicio", values.vida);
            formData.append("Comentarios extra", values.comentarios);
          }
          break;
        case "otros":
          {
            formData.append("Servicio solicitado", values.extra);
          }
          break;

        default:
          break;
      }

      fetch("https://getform.io/f/45fc1cf4-cbf0-47ce-a906-f6f8706ba327", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          window.location.replace("/respuesta");
        })
        .catch((error) => console.log(error));
    },
  });

  const handleSeguro = (e: any) => {
    console.log(e.target.value);
    const tipo = e.target.value;
    switch (tipo) {
      case "automovil":
        {
          setSubValidation({
            marca: yup.string().required("La marca es obligatoria"),
            modelo: yup.string().required("El modelo es obligatorio"),
            anio: yup.string().required("El año es obligatorio"),
            edad: yup.number().required("La edad es obligatoria"),
            cp: yup.number().required("El código postal es obligatorio"),
            descripcionAuto: yup
              .string()
              .required("La descripción es obligatoria"),
          });
        }
        break;
      case "hogar":
        {
          setSubValidation({
            superficie: yup.number().required("La superficie es obligatoria"),
            vivienda: yup
              .string()
              .required("El tipo de vivienda es obligatoria"),
            valor: yup.number().required("El valor aproximado es obligatorio"),
            cp: yup.number().required("El código postal es obligatorio"),
            descripcionVivienda: yup.string(),
          });
        }
        break;
      case "salud":
        {
          setSubValidation({
            sexo: yup.string().required("El sexo es obligatorio"),
            edad: yup.number().required("La edad es obligatoria"),
            cp: yup.number().required("El código postal es obligatorio"),
            enfermedad: yup.string().required("Este campo es obligatorio"),
          });
        }
        break;
      case "vida":
        {
          setSubValidation({
            vida: yup.string().required("Los detalles son obligatorios"),
          });
        }
        break;
      case "otros":
        {
          setSubValidation({
            extra: yup.string().required("Los detalles son obligatorios"),
          });
        }
        break;
      default:
        setSubValidation({});
    }
  };

  return (
    <MainLayout>
      <Container style={{ marginTop: 30, padding: 5 }} maxWidth={"md"}>
        <Typography component={"h1"} variant="h4" color={"primary"} mb={2}>
          PONTE EN CONTACTO CONMIGO PARA UNA ASESORÍA PERSONAL
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2} columnSpacing={2}>
            <Grid item xs={12} md={4}>
              <TextField
                id="nombre"
                label="Nombre"
                type="text"
                variant="filled"
                fullWidth
                margin="normal"
                value={formik.values.nombre}
                onChange={formik.handleChange}
                error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                helperText={formik.touched.nombre && formik.errors.nombre}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                id="telefono"
                label="Telefono"
                type="tel"
                variant="filled"
                fullWidth
                margin="normal"
                value={formik.values.telefono}
                onChange={formik.handleChange}
                error={
                  formik.touched.telefono && Boolean(formik.errors.telefono)
                }
                helperText={formik.touched.telefono && formik.errors.telefono}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                id="email"
                label="Correo"
                type="email"
                variant="filled"
                fullWidth
                margin="normal"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
          </Grid>

          <Grid container mt={3}>
            <Grid item sm={12} md={8}>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Tipo de seguro:
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="seguro"
                value={formik.values.seguro}
                onChange={(e) => {
                  formik.handleChange(e);
                  handleSeguro(e);
                }}
              >
                <FormControlLabel
                  value="automovil"
                  control={<Radio />}
                  label="Automóvil"
                />
                <FormControlLabel
                  value="hogar"
                  control={<Radio />}
                  label="Hogar"
                />
                <FormControlLabel
                  value="salud"
                  control={<Radio />}
                  label="Salud"
                />
                <FormControlLabel
                  value="vida"
                  control={<Radio />}
                  label="Vida"
                />
                <FormControlLabel
                  value="otros"
                  control={<Radio />}
                  label="Otros"
                />
              </RadioGroup>
              <FormHelperText sx={{ color: red[800], textAlign: "left" }}>
                {formik.touched.seguro && formik.errors.seguro}
              </FormHelperText>
            </Grid>
            <Grid item sm={12} md={4}>
              <TextField
                id="presupuesto"
                label="Presupuesto"
                type="number"
                variant="filled"
                fullWidth
                margin="normal"
                value={formik.values.presupuesto}
                onChange={formik.handleChange}
                error={
                  formik.touched.presupuesto &&
                  Boolean(formik.errors.presupuesto)
                }
                helperText={
                  formik.touched.presupuesto && formik.errors.presupuesto
                }
              />
            </Grid>
          </Grid>
          {formik.values.seguro === "automovil" && (
            <Automovil formik={formik} />
          )}
          {formik.values.seguro === "hogar" && <Hogar formik={formik} />}
          {formik.values.seguro === "salud" && <Salud formik={formik} />}
          {formik.values.seguro === "vida" && <Vida formik={formik} />}
          {formik.values.seguro === "otros" && <Otro formik={formik} />}
          <Button
            variant="contained"
            color="success"
            type="submit"
            sx={{ marginTop: 4 }}
          >
            Enviar
          </Button>
        </form>
      </Container>
    </MainLayout>
  );
};

export default Cotizar;

export const Head: HeadFC = () => <SEO title="Cotiza ahora" />;

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
      alert(JSON.stringify(values, null, 2));

      const formData = new FormData();
      formData.append("nombre", values.nombre);
      formData.append("email", values.email);
      formData.append("tel", values.telefono);
      formData.append("tipo", values.seguro);
      formData.append("presupuesto", values.presupuesto);

      window.location.replace("/tenkiu");

      // fetch("https://getform.io/f/1ba51b12-9df1-47c0-a3cb-2ecdfff766d6", {
      //   method: "POST",
      //   body: formData,
      // })
      //   .then((response) => console.log(response))
      //   .catch((error) => console.log(error));
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
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2} columnSpacing={2}>
            <Grid item xs={12} md={4}>
              <TextField
                id="nombre"
                label="nombre"
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
                label="telefono"
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
                label="email"
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
                label="presupuesto"
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

import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { MainLayout } from "../templates";
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
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

const validationSchema = yup.object({
  nombre: yup.string().required("El nombre es obligatorio"),
  telefono: yup.string().required("El telefono es requerido"),
  email: yup
    .string()
    .email("Ingrese un email valido")
    .required("El correo es obligatorio"),
  seguro: yup.string().required("Seleccione un tipo de seguro"),
  presupuesto: yup.number().required("El presupuesto es obligatorio"),
});

const Cotizar = () => {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      telefono: "",
      email: "",
      seguro: "",
      presupuesto: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
            <Grid item sm={12} md={9}>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Tipo de seguro:
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="seguro"
                value={formik.values.seguro}
                onChange={formik.handleChange}
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
                  value="otro"
                  control={<Radio />}
                  label="Otros"
                />
              </RadioGroup>
              <FormHelperText sx={{ color: red[800], textAlign: "left" }}>
                {formik.touched.seguro && formik.errors.seguro}
              </FormHelperText>
            </Grid>
            <Grid item sm={12} md={3}>
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
          <Button variant="contained" color="success" type="submit">
            Enviar
          </Button>
        </form>
      </Container>
    </MainLayout>
  );
};

export default Cotizar;

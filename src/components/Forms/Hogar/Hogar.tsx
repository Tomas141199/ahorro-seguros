import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

interface Props {
  formik: any;
}

const Hogar: FC<Props> = ({ formik }) => {
  return (
    <Grid container spacing={2} columnSpacing={2}>
      <Grid item xs={12} md={3}>
        <TextField
          id="superficie"
          label="Superficie(m2)"
          type="number"
          variant="filled"
          fullWidth
          margin="normal"
          value={formik.values.superficie}
          onChange={formik.handleChange}
          error={formik.touched.superficie && Boolean(formik.errors.superficie)}
          helperText={formik.touched.superficie && formik.errors.superficie}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField
          id="vivienda"
          label="Tipo de vivienda"
          type="text"
          variant="filled"
          fullWidth
          margin="normal"
          value={formik.values.vivienda}
          onChange={formik.handleChange}
          error={formik.touched.vivienda && Boolean(formik.errors.vivienda)}
          helperText={formik.touched.vivienda && formik.errors.vivienda}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField
          id="cp"
          label="CP"
          type="number"
          variant="filled"
          fullWidth
          margin="normal"
          value={formik.values.cp}
          onChange={formik.handleChange}
          error={formik.touched.cp && Boolean(formik.errors.cp)}
          helperText={formik.touched.cp && formik.errors.cp}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField
          id="valor"
          label="Valor aprox. de la vivienda"
          type="number"
          variant="filled"
          fullWidth
          margin="normal"
          value={formik.values.valor}
          onChange={formik.handleChange}
          error={formik.touched.valor && Boolean(formik.errors.valor)}
          helperText={formik.touched.valor && formik.errors.valor}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="descripcionVivienda"
          label="Descripción de la vivienda (opcional)"
          type="text"
          variant="filled"
          fullWidth
          margin="normal"
          value={formik.values.descripcionVivienda}
          onChange={formik.handleChange}
          error={
            formik.touched.descripcionVivienda &&
            Boolean(formik.errors.descripcionVivienda)
          }
          helperText={
            formik.touched.descripcionVivienda &&
            formik.errors.descripcionVivienda
          }
        />
      </Grid>
    </Grid>
  );
};

export default Hogar;

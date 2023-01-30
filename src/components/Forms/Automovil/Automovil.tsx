import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

interface Props {
  formik: any;
}

const Automovil: FC<Props> = ({ formik }) => {
  return (
    <Grid container spacing={2} columnSpacing={2}>
      <Grid item xs={12} md={3}>
        <TextField
          id="marca"
          label="marca"
          type="text"
          variant="filled"
          fullWidth
          margin="normal"
          value={formik.values.marca}
          onChange={formik.handleChange}
          error={formik.touched.marca && Boolean(formik.errors.marca)}
          helperText={formik.touched.marca && formik.errors.marca}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField
          id="modelo"
          label="modelo"
          type="tel"
          variant="filled"
          fullWidth
          margin="normal"
          value={formik.values.modelo}
          onChange={formik.handleChange}
          error={formik.touched.modelo && Boolean(formik.errors.modelo)}
          helperText={formik.touched.modelo && formik.errors.modelo}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <TextField
          id="anio"
          label="año"
          type="number"
          variant="filled"
          fullWidth
          margin="normal"
          value={formik.values.anio}
          onChange={formik.handleChange}
          error={formik.touched.anio && Boolean(formik.errors.anio)}
          helperText={formik.touched.anio && formik.errors.anio}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <TextField
          id="edad"
          label="edad"
          type="number"
          variant="filled"
          fullWidth
          margin="normal"
          value={formik.values.edad}
          onChange={formik.handleChange}
          error={formik.touched.edad && Boolean(formik.errors.edad)}
          helperText={formik.touched.edad && formik.errors.edad}
        />
      </Grid>
      <Grid item xs={12} md={2}>
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
      <Grid item xs={12}>
        <TextField
          id="descripcionAuto"
          label="Descripción del auto (STD, AUTM, etc)"
          type="text"
          variant="filled"
          fullWidth
          margin="normal"
          value={formik.values.descripcionAuto}
          onChange={formik.handleChange}
          error={
            formik.touched.descripcionAuto &&
            Boolean(formik.errors.descripcionAuto)
          }
          helperText={
            formik.touched.descripcionAuto && formik.errors.descripcionAuto
          }
        />
      </Grid>
    </Grid>
  );
};

export default Automovil;

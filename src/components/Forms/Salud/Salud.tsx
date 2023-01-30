import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

interface Props {
  formik: any;
}

const Salud: FC<Props> = ({ formik }) => {
  return (
    <Grid container spacing={2} columnSpacing={2}>
      <Grid item xs={12} md={4}>
        <TextField
          id="sexo"
          label="Sexo(F ó M)"
          type="string"
          variant="filled"
          fullWidth
          margin="normal"
          value={formik.values.sexo}
          onChange={formik.handleChange}
          error={formik.touched.sexo && Boolean(formik.errors.sexo)}
          helperText={formik.touched.sexo && formik.errors.sexo}
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <TextField
          id="edad"
          label="Edad"
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
      <Grid item xs={12} md={4}>
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
          id="enfermedad"
          label="Padecimientos o enfermedades actuales"
          type="text"
          variant="filled"
          fullWidth
          margin="normal"
          value={formik.values.enfermedad}
          onChange={formik.handleChange}
          error={formik.touched.enfermedad && Boolean(formik.errors.enfermedad)}
          helperText={formik.touched.enfermedad && formik.errors.enfermedad}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="comentarios"
          label="Comentarios extras(opcional)"
          type="text"
          variant="filled"
          fullWidth
          margin="normal"
          value={formik.values.comentarios}
          onChange={formik.handleChange}
          error={
            formik.touched.comentarios && Boolean(formik.errors.comentarios)
          }
          helperText={formik.touched.comentarios && formik.errors.comentarios}
        />
      </Grid>
    </Grid>
  );
};

export default Salud;

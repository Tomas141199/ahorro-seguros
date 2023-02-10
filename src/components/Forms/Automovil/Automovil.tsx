import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import { red } from "@mui/material/colors";

interface Props {
  formik: any;
}

const Automovil: FC<Props> = ({ formik }) => {
  return (
    <>
      <FormLabel
        id="demo-row-radio-buttons-group-label"
        sx={{ mt: 2, display: "block" }}
      >
        Datos adicionales del propetario:
      </FormLabel>
      <Grid container spacing={2} columnSpacing={2}>
        <Grid item xs={12} md={3}>
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
      </Grid>
      <FormLabel
        id="demo-row-radio-buttons-group-label"
        sx={{ mt: 2, display: "block" }}
      >
        Datos del automóvil:
      </FormLabel>
      <Grid container spacing={2} columnSpacing={2}>
        <Grid item xs={12} md={3}>
          <TextField
            id="marca"
            label="Marca"
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
            label="Versión"
            type="text"
            variant="filled"
            fullWidth
            margin="normal"
            value={formik.values.modelo}
            onChange={formik.handleChange}
            error={formik.touched.modelo && Boolean(formik.errors.modelo)}
            helperText={formik.touched.modelo && formik.errors.modelo}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            id="anio"
            label="Año"
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

        <Grid item xs={12} md={3}>
          <FormControl variant="filled" fullWidth sx={{ marginTop: 2 }}>
            <InputLabel id="demo-simple-select-filled-label">
              Tipo de automóvil
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="tipo"
              name="tipo"
              value={formik.values.tipo}
              onChange={formik.handleChange}
              error={formik.touched.tipo && Boolean(formik.errors.tipo)}
            >
              <MenuItem value={"Auto"}>Auto</MenuItem>
              <MenuItem value={"Pick-up"}>Pick up</MenuItem>
              <MenuItem value={"Camión"}>Camión</MenuItem>
              <MenuItem value={"Tractor"}>Tractor</MenuItem>
            </Select>
            <FormHelperText sx={{ color: red[800], textAlign: "left" }}>
              {formik.touched.tipo && formik.errors.tipo}
            </FormHelperText>
          </FormControl>
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
    </>
  );
};

export default Automovil;

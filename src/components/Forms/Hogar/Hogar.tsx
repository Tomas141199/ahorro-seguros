import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import { red } from "@mui/material/colors";
import FormLabel from "@mui/material/FormLabel";

interface Props {
  formik: any;
}

const Hogar: FC<Props> = ({ formik }) => {
  return (
    <>
      <FormLabel
        id="demo-row-radio-buttons-group-label"
        sx={{ mt: 2, display: "block" }}
      >
        Datos de la vivienda:
      </FormLabel>
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
            error={
              formik.touched.superficie && Boolean(formik.errors.superficie)
            }
            helperText={formik.touched.superficie && formik.errors.superficie}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FormControl variant="filled" fullWidth sx={{ marginTop: 2 }}>
            <InputLabel id="demo-simple-select-filled-label">
              Tipo de vivienda
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="vivienda"
              name="vivienda"
              value={formik.values.vivienda}
              onChange={formik.handleChange}
              error={formik.touched.vivienda && Boolean(formik.errors.vivienda)}
            >
              <MenuItem value={"Básica"}>Básica</MenuItem>
              <MenuItem value={"Media"}>Media</MenuItem>
              <MenuItem value={"Alta"}>Alta</MenuItem>
            </Select>
            <FormHelperText sx={{ color: red[800], textAlign: "left" }}>
              {formik.touched.vivienda && formik.errors.vivienda}
            </FormHelperText>
          </FormControl>
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
            label="Valor aproximado"
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
    </>
  );
};

export default Hogar;

import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormHelperText from "@mui/material/FormHelperText";
import { red } from "@mui/material/colors";

interface Props {
  formik: any;
}

const Vida: FC<Props> = ({ formik }) => {
  return (
    <Grid container spacing={2} columnSpacing={2}>
      <Grid item sm={12} md={8}>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Detallar datos requeridos:
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="vida"
          value={formik.values.vida}
          onChange={formik.handleChange}
        >
          <FormControlLabel
            value="proteccion"
            control={<Radio />}
            label="Protección"
          />
          <FormControlLabel value="ahorro" control={<Radio />} label="Ahorro" />
          <FormControlLabel value="retiro" control={<Radio />} label="Retiro" />
        </RadioGroup>
        <FormHelperText sx={{ color: red[800], textAlign: "left" }}>
          {formik.touched.vida && formik.errors.vida}
        </FormHelperText>
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

export default Vida;

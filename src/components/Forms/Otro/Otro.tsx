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

const Otro: FC<Props> = ({ formik }) => {
  return (
    <Grid item xs={12}>
      <TextField
        id="extra"
        label="Sea lo más especifico"
        type="text"
        variant="filled"
        fullWidth
        margin="normal"
        value={formik.values.comentarios}
        onChange={formik.handleChange}
        error={formik.touched.comentarios && Boolean(formik.errors.comentarios)}
        helperText={formik.touched.comentarios && formik.errors.comentarios}
      />
    </Grid>
  );
};

export default Otro;
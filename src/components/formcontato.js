import React from "react";
import MaskedInput from "react-text-mask";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  formControl: {
    margin: theme.spacing(1),
    width: 300
  }
}));

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "(",
        /[1-9]/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      guide={true}
      placeholderChar={"\u2000"}
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired
};

function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "Fulano Sicrano"
  });

  const handleChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value
    });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        required
        id="standard-name"
        label="Nome"
        className={classes.textField}
        onChange={handleChange("name")}
        margin="normal"
      />
      <TextField
        required
        id="standard-email"
        label="E-mail"
        className={classes.textField}
        margin="normal"
      />
      <br />
      <TextField
        required
        id="standard-assunto"
        label="Assunto"
        className={classes.textField}
        margin="normal"
      />
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="standard-tel">Telefone</InputLabel>
        <Input
          value={values.textmask}
          onChange={handleChange("textmask")}
          id="standard-tel"
          inputComponent={TextMaskCustom}
          style={{ marginTop: 24 }}
        />
      </FormControl>
      <TextField
        required
        id="standard-mensagem"
        label="Mensagem"
        multiline
        rows="4"
        rowsMax="8"
        style={{ marginTop: 8, marginBottom: 8, marginLeft: 8, marginRight: 8 }}
        fullWidth
        margin="normal"
      />
    </form>
  );
}

export default TextFields;

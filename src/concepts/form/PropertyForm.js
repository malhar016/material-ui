import {
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  TextareaAutosize,
  TextField,
  Typography,
  Checkbox,
  FormGroup,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";

const PropertyForm = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    gender: "",
    threeBhk: false,
    threeAndHalfBhk: false,
    fourBhk: false,
    budgetRange: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleCheckbox = ({ target: { name, checked } }) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        [name]: checked,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "3em",
        border: "2px solid lightskyblue",
        maxWidth: "60%",
        borderRadius: "0.8em",
      }}
    >
      <Typography
        style={{ marginBottom: "1em" }}
        variant="h4"
        color="textPrimary"
      >
        Property Inquiry Form
      </Typography>
      <section>
        <TextField
          name="firstName"
          style={{ marginRight: "5em", minWidth: "40%" }}
          variant="standard"
          placeholder="First Name"
          value={inputs.firstName}
          onChange={handleChange}
        />
        <TextField
          name="lastName"
          style={{ marginRight: "5em", minWidth: "40%" }}
          variant="standard"
          placeholder="Last Name"
          value={inputs.lastName}
          onChange={handleChange}
        />
        <TextField
          name="email"
          style={{ marginTop: "2em", minWidth: "87%" }}
          variant="outlined"
          placeholder="Email Address"
          type="email"
          value={inputs.email}
          onChange={handleChange}
        />
        <TextField
          name="phoneNumber"
          style={{ marginTop: "2em", minWidth: "87%" }}
          variant="outlined"
          placeholder="Phone Number"
          type="tel"
          value={inputs.phoneNumber}
          onChange={handleChange}
        />
        <TextareaAutosize
          name="address"
          style={{ marginTop: "2em", minWidth: "87%" }}
          placeholder="Address"
          variant="soft"
          minRows={6}
          value={inputs.address}
          onChange={handleChange}
        />
        <FormControl style={{ marginTop: "2em", minWidth: "87%" }}>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            name="gender"
            value={inputs.gender}
            onChange={handleChange}
            row
          >
            <FormControlLabel
              value="male"
              control={<Radio color="primary" />}
              label="Male"
            />
            <FormControlLabel
              value="female"
              control={<Radio color="primary" />}
              label="Female"
            />
          </RadioGroup>
        </FormControl>
      </section>
      <section>
        <FormGroup style={{ marginTop: "2em", minWidth: "87%" }}>
          <FormLabel>Interested Configuration</FormLabel>
          <FormGroup row style={{ marginTop: "0.3em", minWidth: "87%" }}>
            <FormControlLabel
              name="threeBhk"
              value={inputs.threeBhk}
              label="3 bhk"
              onChange={handleCheckbox}
              control={<Checkbox color="primary" />}
            />
            <FormControlLabel
              name="threeAndHalfBhk"
              value={inputs.threeAndHalfBhk}
              label="3.5 bhk"
              onChange={handleCheckbox}
              control={<Checkbox color="primary" />}
            />
            <FormControlLabel
              name="fourBhk"
              value={inputs.fourBhk}
              label="4 bhk"
              onChange={handleCheckbox}
              control={<Checkbox color="primary" />}
            />
          </FormGroup>
        </FormGroup>
        <FormControl style={{ marginTop: "2em", minWidth: "87%" }}>
          <InputLabel>Budget Range</InputLabel>
          <Select
            name="budgeRange"
            value={inputs.budgetRange}
            onChange={handleChange}
          >
            <MenuItem value="below1">Below 1cr</MenuItem>
            <MenuItem value="1to2">1cr to 2cr</MenuItem>
            <MenuItem value="2to3">2cr to 3cr</MenuItem>
            <MenuItem value="above3">Above 3cr</MenuItem>
          </Select>
        </FormControl>
      </section>
      <Button
        style={{ marginTop: "2em", minWidth: "87%" }}
        variant="contained"
        color="primary"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </form>
  );
};

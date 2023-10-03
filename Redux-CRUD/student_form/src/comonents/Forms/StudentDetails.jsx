/* eslint-disable react-hooks/exhaustive-deps */
import { FieldArray, FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addStudent } from "../../reducers/studentSlice";

import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import * as Yup from "yup";

const theme = createTheme();

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z ]*$/, "Only letters and spaces are allowed")
    .required("Name is required"),
  rollNumber: Yup.string().required("Roll Number is required"),
  address: Yup.string().required("Address is required"),
  gender: Yup.string().required("Gender is required"),
  proof: Yup.array().min(1, "At least one proof is required"),
  contactSets: Yup.array()
    .of(
      Yup.object().shape({
        type: Yup.string().required("Type is required"),
        number: Yup.string()
          .matches(/[0-9]{10}/, "Must be a 10-digit number")
          .required("Number is required"),
      })
    )
    .required("At least one contact is required"),
});

const StudentDetails = () => {
  const { students } = useSelector((state) => state.students);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    rollNumber: "",
    address: "",
    gender: "",
    proof: [],
    contactSets: [{ type: "", number: "" }],
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (location.pathname.split("/")[1] === "students") {
        const remainData = students?.filter(
          (student) => student.id !== location.pathname.split("/")[2] && student
        );
        dispatch(
          addStudent([
            ...remainData,
            { ...values, id: location.pathname.split("/")[2] },
          ])
        );
        navigate(`/students`);
      } else {
        const id = crypto.randomUUID();
        dispatch(addStudent([...students, { ...values, id }]));
        navigate(`/students`);
      }
    },
  });

  const { values, errors, touched, setFieldValue } = formik;

  useEffect(() => {
    const id = location.pathname.split("/")[2];
    const data = students?.find((student) => student.id === id);

    if (data) {
      setFieldValue("name", data?.name);
      setFieldValue("rollNumber", data?.rollNumber);
      setFieldValue("address", data?.address);
      setFieldValue("gender", data?.gender);
      setFieldValue("proof", data?.proof);
      setFieldValue("contactSets", data?.contactSets);
    }
  }, [location.pathname.split("/")[1] === "students"]);

  return (
    <Container>
      <Typography variant="h4" sx={{ marginBottom: 2, textAlign: "center" }}>
        Student Information Form
      </Typography>
      <FormikProvider value={formik}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={3}
            style={{ padding: theme.spacing(3), width: 500 }}
          >
            <form onSubmit={formik.handleSubmit}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <TextField
                  id="name"
                  label="Name"
                  name="name"
                  value={values.name}
                  fullWidth
                  onChange={formik.handleChange}
                  error={touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                  sx={{ marginBottom: 2 }}
                />

                <TextField
                  label="Roll Number"
                  name="rollNumber"
                  id="rollNumber"
                  value={values.rollNumber}
                  fullWidth
                  onChange={formik.handleChange}
                  error={touched.rollNumber && !!errors.rollNumber}
                  helperText={touched.rollNumber && errors.rollNumber}
                  sx={{ marginBottom: 2 }}
                />

                <TextField
                  label="Address"
                  name="address"
                  id="address"
                  value={values.address}
                  fullWidth
                  multiline
                  rows={4}
                  onChange={formik.handleChange}
                  error={touched.address && !!errors.address}
                  helperText={touched.address && errors.address}
                  sx={{ marginBottom: 2 }}
                />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    error={touched.gender && !!errors.gender}
                    sx={{ marginBottom: 2 }}
                  >
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                      name="gender"
                      value={values.gender}
                      onChange={formik.handleChange}
                    >
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                        sx={{ marginBottom: 1 }}
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                    </RadioGroup>
                    {touched.gender && errors.gender && (
                      <FormHelperText>{errors.gender}</FormHelperText>
                    )}
                  </FormControl>

                  <FormControl
                    sx={{ marginBottom: 2 }}
                    error={touched.proof && !!errors.proof}
                  >
                    <FormLabel component="legend" sx={{ textAlign: "center" }}>
                      Proof
                    </FormLabel>
                    <div>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="proof"
                            value="Aadhar card"
                            checked={values?.proof?.includes("Aadhar card")}
                            onChange={formik.handleChange}
                          />
                        }
                        label="Aadhar card"
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            name="proof"
                            value="PAN Card"
                            checked={values?.proof?.includes("PAN Card")}
                            onChange={formik.handleChange}
                          />
                        }
                        label="PAN Card"
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            name="proof"
                            value="licence"
                            checked={values?.proof?.includes("licence")}
                            onChange={formik.handleChange}
                          />
                        }
                        label="Licence"
                      />
                    </div>
                    {touched.proof && errors.proof && (
                      <FormHelperText sx={{ color: "red" }}>
                        {errors.proof}
                      </FormHelperText>
                    )}
                  </FormControl>

                  <FormControl
                    component="fieldset"
                    error={touched.contactSets && !!errors.contactSets}
                  >
                    <FormLabel component="legend" sx={{ textAlign: "center" }}>
                      Contacts
                    </FormLabel>
                    <FieldArray name="contactSets">
                      {({ push, remove }) => (
                        <div>
                          {values.contactSets.map((contactSet, index) => (
                            <div key={index} className="contact-set">
                              <TextField
                                type="text"
                                name={`contactSets[${index}].type`}
                                label="Type"
                                fullWidth
                                value={contactSet.type}
                                onChange={formik.handleChange}
                                error={
                                  touched.contactSets &&
                                  touched.contactSets[index] &&
                                  errors.contactSets &&
                                  errors.contactSets[index]?.type
                                }
                                helperText={
                                  touched.contactSets &&
                                  touched.contactSets[index] &&
                                  errors.contactSets &&
                                  errors.contactSets[index]?.type
                                }
                                sx={{ marginBottom: 1 }}
                              />

                              <TextField
                                type="tel"
                                name={`contactSets[${index}].number`}
                                label="Number"
                                fullWidth
                                value={contactSet.number}
                                onChange={formik.handleChange}
                                error={
                                  touched.contactSets &&
                                  touched.contactSets[index] &&
                                  errors.contactSets &&
                                  errors.contactSets[index]?.number
                                }
                                helperText={
                                  touched.contactSets &&
                                  touched.contactSets[index] &&
                                  errors.contactSets &&
                                  errors.contactSets[index]?.number
                                }
                                sx={{ marginBottom: 1 }}
                              />

                              {index > 0 && (
                                <Button
                                  type="button"
                                  onClick={() => remove(index)}
                                  variant="outlined"
                                  sx={{
                                    marginBottom: 2,
                                  }}
                                >
                                  Remove Contact
                                </Button>
                              )}
                            </div>
                          ))}

                          <Button
                            type="button"
                            onClick={() => push({ type: "", number: "" })}
                            variant="outlined"
                          >
                            Add Contact
                          </Button>
                        </div>
                      )}
                    </FieldArray>
                  </FormControl>

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: 2 }}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </form>
          </Paper>
        </Box>
      </FormikProvider>
    </Container>
  );
};

export default StudentDetails;

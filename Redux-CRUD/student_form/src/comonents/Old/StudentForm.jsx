/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../../reducers/studentSlice";
import { useLocation, useNavigate } from "react-router-dom";

const StudentForm = () => {
  const [selectedProof, setSelectedProof] = useState(null);
  const [contacts, setContacts] = useState([{ type: "", number: "" }]);
  const [customeError, setCustomerError] = useState("");
  const { students } = useSelector((state) => state.students);
  const location = useLocation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const validateProof = (value) => {
    if (!value || value.length === 0) {
      return "At least one proof must be selected";
    }
    return true;
  };
  const validateInput = (value, pattern, errorMessage) => {
    if (!pattern.test(value)) {
      return errorMessage;
    }
    return true;
  };
  const namePattern = /^[A-Za-z\s]+$/;
  const addressPattern = /^[A-Za-z0-9\s\-/]+$/;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data, e) => {
    const check =
      contacts.filter(
        (data) => data.type.trim() === "" && data.number.trim() === "" && data
      ).length > 0;
    const studentData = {
      ...data,
      contacts: contacts,
    };
    console.log("check: ", check);
    if (location.pathname.split("/")[1] === "students") {
      if (!check) {
        const remainData = students?.filter(
          (student) => student.id !== Number(location.pathname.split("/")[2])
        );
        console.log("remainData: ", remainData);
        studentData.id = Number(location.pathname.split("/")[2]);
        dispatch(addStudent([...remainData, studentData]));
        setSelectedProof(null);
        setContacts([]);
        e.target.reset();
        navigate(`/students`);
      } else {
        setCustomerError("Please add valid contact details!");
      }
    } else {
      if (contacts.length > 0 && !check) {
        studentData.id = students.length + 1;
        dispatch(addStudent([...students, studentData]));
        setSelectedProof(null);
        setContacts([]);
        e.target.reset();
        navigate(`/students`);
      } else {
        setCustomerError("Please add valid contact details!");
      }
    }
  };

  useEffect(() => {
    const id = Number(location.pathname.split("/")[2]);
    const data = students?.find((student) => student.id === id);

    if (data) {
      setValue("name", data.name);
      setValue("rollNumber", data.rollNumber);
      setValue("address", data.address);
      setValue("gender", data.gender);
      setValue("checkbox", data.checkbox);

      setContacts(data.contacts);
    }
  }, [location.pathname.split("/")[1] === "students"]);

  const handleAddContact = () => {
    setContacts((prevContacts) => [...prevContacts, { type: "", number: "" }]);
  };

  const handleRemoveContact = (index) => {
    setContacts((prevContacts) =>
      prevContacts.filter((_, i) => Number(i) !== Number(index))
    );
  };

  const inputHandler = (e) => {
    const { value, name } = e.target;
    const splitedName = name.split("-");
    if (splitedName.length > 1) {
      const tempState = [...contacts.map((data) => ({ ...data }))];
      tempState[Number(splitedName[1])] = {
        ...tempState[Number(splitedName[1])],
        [splitedName[0]]: value,
      };
      setContacts(tempState);
    }
  };

  return (
    <div className="max-w-md p-4 mx-auto mt-8 border rounded shadow ">
      <h3>Fill Student Information</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: "Name is required",
              validate: (value) =>
                validateInput(
                  value,
                  namePattern,
                  "Only letters are allowed in the name"
                ),
            })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="rollNumber" className="block mb-1 font-medium">
            Roll Number
          </label>
          <input
            type="number"
            id="rollNumber"
            {...register("rollNumber", { required: "Roll Number is required" })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.rollNumber && (
            <p className="text-red-500">{errors.rollNumber.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="contacts" className="block mb-1 font-medium">
            Contacts
          </label>
          {contacts.map((contact, index) => (
            <div key={index} className="flex mb-2 space-x-4">
              <input
                className={`flex-grow px-3 py-2 border rounded ${
                  errors.contacts && errors.contacts[index]?.type
                    ? "border-red-500"
                    : ""
                }`}
                type="text"
                placeholder="Type"
                name={`type-${index}`}
                value={contact.type}
                onChange={inputHandler}
              />
              <input
                className={`flex-grow px-3 py-2 border rounded ${
                  errors.contacts && errors.contacts[index]?.type
                    ? "border-red-500"
                    : ""
                }`}
                type="number"
                name={`number-${index}`}
                value={contact.number}
                onChange={inputHandler}
                placeholder="Enter 10-digit number"
              />
              {index > 0 && (
                <button
                  className="px-2 py-1 font-bold text-red-600 transition duration-300 border border-red-600 rounded-full remove-contact hover:bg-red-600 hover:text-white"
                  onClick={() => handleRemoveContact(index)}
                  type="button"
                >
                  -
                </button>
              )}
            </div>
          ))}
          {customeError.trim() !== "" && (
            <p className="text-red-500">{customeError}</p>
          )}
          <button
            id="add-contact"
            onClick={handleAddContact}
            className="text-blue-600"
            type="button"
          >
            + Add Contact
          </button>
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block mb-1 font-medium">
            Address
          </label>
          <textarea
            id="address"
            {...register("address", {
              required: "Address is required",
              validate: (value) =>
                validateInput(
                  value,
                  addressPattern,
                  "Special characters are not allowed in the address"
                ),
            })}
            className="w-full px-3 py-2 border rounded"
            rows="4"
          />
          {errors.address && (
            <p className="text-red-500">{errors.address.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Gender</label>
          <label className="block mb-2">
            <input
              type="radio"
              value="male"
              {...register("gender", { required: "Gender is required" })}
            />
            Male
          </label>
          <label className="block mb-2">
            <input
              type="radio"
              value="female"
              {...register("gender", { required: "Gender is required" })}
            />
            Female
          </label>
          {errors.gender && (
            <p className="text-red-500">{errors.gender.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Proof</label>
          <label className="block mb-2">
            <input
              {...register("checkbox", {
                validate: validateProof,
              })}
              type="checkbox"
              value="Aadharcard"
            />
            Aadhar Card
          </label>
          <label className="block mb-2">
            <input
              type="checkbox"
              value="Pancard"
              {...register("checkbox", {
                validate: validateProof,
              })}
            />
            PAN Card
          </label>
          <label className="block mb-2">
            <input
              type="checkbox"
              value="License"
              {...register("checkbox", {
                validate: validateProof,
              })}
            />
            Licence
          </label>
          {errors.checkbox && (
            <p className="text-red-500">{errors.checkbox.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 text-white bg-green-500 rounded hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentForm;

// return (
//   <Container>
//     <Typography variant="h4">Student Information Form</Typography>
//     <div>
//       <FormikProvider value={formik}>
//         <form onSubmit={formik.handleSubmit}>
//           <TextField
//             id="name"
//             label="Name"
//             name="name"
//             value={values.name}
//             fullWidth
//             onChange={formik.handleChange}
//             error={touched.name && !!errors.name}
//             helperText={touched.name && errors.name}
//           />
//           <TextField
//             label="Roll Number"
//             name="rollNumber"
//             id="rollNumber"
//             value={values.rollNumber}
//             fullWidth
//             onChange={formik.handleChange}
//             error={touched.rollNumber && !!errors.rollNumber}
//             helperText={touched.rollNumber && errors.rollNumber}
//           />
//           <TextField
//             label="Address"
//             name="address"
//             id="address"
//             value={values.address}
//             fullWidth
//             multiline
//             rows={4}
//             onChange={formik.handleChange}
//             error={touched.address && !!errors.address}
//             helperText={touched.address && errors.address}
//           />
//           <FormControl
//             component="fieldset"
//             error={touched.gender && !!errors.gender}
//           >
//             <FormLabel component="legend">Gender</FormLabel>
//             <RadioGroup
//               name="gender"
//               value={values.gender}
//               onChange={formik.handleChange}
//             >
//               <FormControlLabel
//                 value="male"
//                 control={<Radio />}
//                 label="Male"
//               />
//               <FormControlLabel
//                 value="female"
//                 control={<Radio />}
//                 label="Female"
//               />
//             </RadioGroup>
//             {touched.gender && errors.gender && (
//               <FormHelperText>{errors.gender}</FormHelperText>
//             )}
//           </FormControl>
//           <div>
//             <label>Proof</label>
//             <div>
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     name="proof"
//                     value="Aadhar card"
//                     checked={values?.proof?.includes("Aadhar card")}
//                     onChange={formik.handleChange}
//                   />
//                 }
//                 label="Aadhar card"
//               />
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     name="proof"
//                     value="PAN Card"
//                     checked={values?.proof?.includes("PAN Card")}
//                     onChange={formik.handleChange}
//                   />
//                 }
//                 label="PAN Card"
//               />
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     name="proof"
//                     value="licence"
//                     checked={values?.proof?.includes("licence")}
//                     onChange={formik.handleChange}
//                   />
//                 }
//                 label="Licence"
//               />
//             </div>
//             {touched.proof && errors.proof && (
//               <div style={{ color: "red" }}>{errors.proof}</div>
//             )}
//           </div>
//           <div>
//             <FormControl
//               component="fieldset"
//               error={touched.contactSets && !!errors.contactSets}
//             >
//               <FormLabel component="legend">Contacts</FormLabel>
//               <FieldArray name="contactSets">
//                 {({ push, remove }) => (
//                   <div>
//                     {values.contactSets.map((contactSet, index) => (
//                       <div key={index} className="contact-set">
//                         <TextField
//                           type="text"
//                           name={`contactSets[${index}].type`}
//                           label="Type"
//                           fullWidth
//                           value={contactSet.type}
//                           onChange={formik.handleChange}
//                           error={
//                             touched.contactSets &&
//                             touched.contactSets[index] &&
//                             errors.contactSets &&
//                             errors.contactSets[index]?.type
//                           }
//                           helperText={
//                             touched.contactSets &&
//                             touched.contactSets[index] &&
//                             errors.contactSets &&
//                             errors.contactSets[index]?.type
//                           }
//                         />
//                         <TextField
//                           type="tel"
//                           name={`contactSets[${index}].number`}
//                           label="Number"
//                           fullWidth
//                           value={contactSet.number}
//                           onChange={formik.handleChange}
//                           error={
//                             touched.contactSets &&
//                             touched.contactSets[index] &&
//                             errors.contactSets &&
//                             errors.contactSets[index]?.number
//                           }
//                           helperText={
//                             touched.contactSets &&
//                             touched.contactSets[index] &&
//                             errors.contactSets &&
//                             errors.contactSets[index]?.number
//                           }
//                         />
//                         {index > 0 && (
//                           <Button type="button" onClick={() => remove(index)}>
//                             Remove Contact
//                           </Button>
//                         )}
//                       </div>
//                     ))}
//                     <Button
//                       type="button"
//                       onClick={() => push({ type: "", number: "" })}
//                     >
//                       Add Contact
//                     </Button>
//                   </div>
//                 )}
//               </FieldArray>
//             </FormControl>
//           </div>
//           <Button type="submit" variant="contained" color="primary">
//             Submit
//           </Button>
//         </form>
//       </FormikProvider>
//     </div>
//   </Container>
// );

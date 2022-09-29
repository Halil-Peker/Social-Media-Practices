import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import validationSchema from "./validations";
import Card from "@mui/material/Card";
import "./SingUp.css";

function SingUp() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        surname: "",
        email: "",
        password: "",
        confirmPassword: "",
        picture: "",
        phoneNumber: "",
        birthDate: "",
        address: "",
        webSite: "",
        ipAddress: "",
        roleId:1,
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema,
    });

  const [user, setUser] = useState([{}]);

  const getUsers = () => {
    fetch("link...", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        surname: values.surname,
        password: values.password,
        phoneNumber: values.phoneNumber,
        address: values.address,
        email: values.email,
        birthDate: values.birthDate,
        picture: values.picture,
        webSite: values.webSite,
        ipAddress: values.ipAddress,
        roleId: values.roleId,
      }),
    })
      .then((response) => response.json())
      .then((data) => setUser(data));
    console.log(user);

    //  if (user.some(u => JSON.stringify(u.email) === JSON.stringify(values.email))) {
    //     console.log('Your e-mail or password is wrong. Try again.');
    //   } else {
    //     console.log('SignUp');
    //   }
  };

  return (
    <div>
      <Card className="Cardd" sx={{ maxWidth: 345 }}>
        <div className="signn">
          <h1>Sign Up</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <br />
          <TextField
            name="name"
            value={values.name}
            onChange={handleChange}
            id="standard-basic"
            label="Name"
            variant="standard"
          />
          <br />
          <br />
          <TextField
            name="surname"
            value={values.surname}
            onChange={handleChange}
            id="standard-basic"
            label="surname"
            variant="standard"
          />
          <br />
          <br />
          <TextField
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            id="standard-basic"
            label="E-Mail"
            variant="standard"
          />
          {/* Buruda inputun içine girilen değerler kontrol ediliyor. touched ve handleBlur kodlarının
            görevi: inputtan çıkıldığı anda hata verdirme görevinde. */}
          {errors.email && touched.email && (
            <div className="error">{errors.email}</div>
          )}
          <br />
          <br />
          <TextField
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            id="standard-basic"
            label="Password"
            variant="standard"
          />
          {/* Buruda inputun içine girilen değerler kontrol ediliyor. touched ve handleBlur kodlarının
            görevi: inputtan çıkıldığı anda hata verdirme görevinde. */}
          {errors.password && touched.password && (
            <div className="error">{errors.password}</div>
          )}
          <br />
          <br />
          <TextField
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            id="standard-basic"
            label="Confirm Password"
            variant="standard"
          />
          {/* Buruda inputun içine girilen değerler kontrol ediliyor. touched ve handleBlur kodlarının
            görevi: inputtan çıkıldığı anda hata verdirme görevinde. */}
          {errors.confirmPassword && touched.confirmPassword && (
            <div className="error">{errors.confirmPassword}</div>
          )}
          <br />
          <br />
          <TextField
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            id="standard-basic"
            label="Phone Number"
            variant="standard"
          />
          <br />
          <br />
          <TextField
            name="address"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            id="standard-basic"
            label="Address"
            variant="standard"
          />
          <br />
          <br />
          <TextField
            name="ipAddress"
            value={values.ipAddress}
            onChange={handleChange}
            id="standard-basic"
            label="IP Address"
            variant="standard"
          />
          <br />
          <br />
          <TextField
            name="webSite"
            value={values.webSite}
            onChange={handleChange}
            id="standard-basic"
            label="Web Site"
            variant="standard"
          />
          <br />
          <br />
          <label>Profil Fotoğrafı</label>
          <input
            type="file"
            name="picture"
            onChange={handleChange}
            value={values.picture}
          />
          <br />
          <br />
          <label>Birth Date</label>
          <input
            type="date"
            name="birthDate"
            onChange={handleChange}
            value={values.birthDate}
          />
          <br />
          <br />
          <Button
            type="submit"
            onClick={getUsers}
            disabled={
              !values.name ||
              !values.surname ||
              !values.email ||
              !values.picture ||
              !values.password ||
              !values.confirmPassword ||
              !values.phoneNumber ||
              !values.address ||
              !values.ipAddress ||
              !values.webSite ||
              !values.birthDate
            }
            variant="outlined"
          >
            Submit
          </Button>
          <br />
          <br />
          {/* Mail: "{values.email}"
          <br />
          {<code>Password: {JSON.stringify(values.password)}</code>} */}
        </form>
        {/* {user.map((userr, id)=>(
        <div key={id}>{userr.name}</div>
        ))} */}
      </Card>
      <br />
    </div>
  );
}

export default SingUp;

import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import validationSchema from "./validations";
import Card from "@mui/material/Card";
import "./LogIn.css";

function SingUp() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema,
    });

  const [user, setUser] = useState([{}]);

  useEffect(()=>{
    fetch("link...", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setUser(data)); 
  }, [])

  const setUsers = async () => {
    if (user.some(u => JSON.stringify(u.email) === JSON.stringify(values.email) && JSON.stringify(u.password) === JSON.stringify(values.password))) {
      console.log('LogIn Success');
    } else {
      console.log('Your e-mail or password is wrong. Try again.');
    }

  }


  return (
    <div>

        {/* {user.map((userr, id)=>(
        <div key={id}>{userr.name}</div>
        ))}  */}

      <Card className="Cardd" sx={{ maxWidth: 345 }}>
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          
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


          <Button type="submit"  onClick={setUsers} variant="outlined">
            Submit
          </Button>

          <br />
          <br />
          Mail: "{values.email }"
          <br />
          {<code>Password: {JSON.stringify(values.password)}</code> }

        </form>
      </Card>
    </div>
  );
}

export default SingUp;

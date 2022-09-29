import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import validationSchema from "./validations";
import Card from "@mui/material/Card";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import "./PostSent.css";

function SingUp() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        usersId: 0,
        comId: 0,
        topic: "",
        contents: "",
        likeCount: 0,
        dislikeCount: 0,
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema,
    });

  const [post, setpost] = useState([{}]);

  const getPosts = () => {
    fetch("link...", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usersId: values.usersId,
        comId: values.comId,
        topic: values.topic,
        contents: values.contents,
        likeCount: values.likeCount,
        dislikeCount: values.dislikeCount,
      }),
    })
      .then((response) => response.json())
      .then((data) => setpost(data));
    console.log(post);

    //  if (post.some(u => JSON.stringify(u.email) === JSON.stringify(values.email))) {
    //     console.log('Your e-mail or password is wrong. Try again.');
    //   } else {
    //     console.log('SignUp');
    //   }
  };

  return (
    <div>
      <Card className="Cardd" sx={{ maxWidth: 345 }}>
        <div className="signn">
          <h1>Post Sent</h1>
        </div>
        
        <form onSubmit={handleSubmit}>
          <br />
          <TextField
            name="usersId"
            value={values.usersId}
            onChange={handleChange}
            onBlur={handleBlur}
            id="standard-basic"
            label="User Id"
            variant="standard"
          />
          {errors.usersId && touched.usersId && (
            <div className="error">{errors.usersId}</div>
          )}
          <br />
          <br />

          <TextField
            name="comId"
            value={values.comId}
            onChange={handleChange}
            onBlur={handleBlur}
            id="standard-basic"
            label="Comminity Id"
            variant="standard"
          />
          {errors.comId && touched.comId && (
            <div className="error">{errors.comId}</div>
          )}
          <br />
          <br />

          <TextField
            name="topic"
            value={values.topic}
            onChange={handleChange}
            onBlur={handleBlur}
            id="standard-basic"
            label="Topic"
            variant="standard"
          />
          {errors.topic && touched.topic && (
            <div className="error">{errors.topic}</div>
          )}

          <br />
          <br />
          <label>Contents</label>
          <TextareaAutosize
            name="contents"
            aria-label="maximum height"
            value={values.contents}
            onChange={handleChange}
            onBlur={handleBlur}
            maxRows={6}
            minRows={6}
            label="Content"
            placeholder="Contents"
            style={{ width: 200 }}
          />
          {errors.contents && touched.contents && (
            <div className="error">{errors.contents}</div>
          )}
          <br />
          <br />

          <TextField
            name="likeCount"
            value={values.likeCount}
            onChange={handleChange}
            onBlur={handleBlur}
            id="standard-basic"
            label="Like Count"
            variant="standard"
          />
          {errors.likeCount && touched.likeCount && (
            <div className="error">{errors.likeCount}</div>
          )}
          <br />
          <br />

          <TextField
            name="dislikeCount"
            value={values.dislikeCount}
            onChange={handleChange}
            onBlur={handleBlur}
            id="standard-basic"
            label="Dislike"
            variant="standard"
          />
          {errors.dislikeCount && touched.dislikeCount && (
            <div className="error">{errors.dislikeCount}</div>
          )}
          <br />
          <br />

          <Button
            type="submit"
            onClick={getPosts}
            disabled={
              !values.usersId ||
              !values.comId ||
              !values.topic ||
              !values.contents ||
              !values.likeCount ||
              !values.dislikeCount
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
        {/* {post.map((postr, id)=>(
        <div key={id}>{postr.name}</div>
        ))} */}
      </Card>
      <br />
    </div>
  );
}

export default SingUp;

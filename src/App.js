// import logo from './logo.svg';
import './App.css';
import { useFormik } from 'formik';

import * as yup from "yup";
function App() {
  const formik=useFormik({
    initialValues:{
      Username:"",
      Email:"",
      Password:"",
      country:"",
      status:"",
    },

    onSubmit:(values)=>{
      console.log(values)
    },
    validationSchema:yup.object({
     Username:yup.string()
     .max(10,"not more than 10")
     .required("this is required field")
    })
  }

  )

  // console.log(formik.values)
  return (
    <div className="container">
      <h1>SignUp</h1>
      <form onSubmit={formik.handleSubmit} 
      action="" className='flex flex-col'>
      <input type="text" name="Username" id=""
      onChange={ formik.handleChange} 
      value={formik.values.Username}
      placeholder='Username'
      onBlur={formik.handleBlur}
      required/>
{formik.touched.Username && formik.errors.Username && <p style={{color:"red"}}>{formik.errors.Username}</p>}
<br />
<input type="text" name="Email" id=""
      onChange={ formik.handleChange} 
      value={formik.values.Email}
      placeholder='Email'
      required/>
      <br />

<input type="text" name="Password" id=""
      onChange={ formik.handleChange} 
      value={formik.values.Password}
      placeholder='Password'
      required
      />
<br />
<label>save you password</label>
      <input type="radio"
      name='status'
      value="yes"
      required
      onChange={formik.handleChange}
      />
<br />
<select name="country" id="" onChange={formik.handleChange}>
  <option value="">select country</option>

  <option value="india">india</option>

  <option value="pakistan">pakistan</option>
</select>
      <button  type='submit'>SignUp</button>
      </form>
    </div>
  );
}

export default App;


// import React from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// // import "./SignUp.css";
// import * as yup from "yup";
// import { Formik } from "formik";

// const schema = yup.object({
//   username: yup.string().required('Please Enter a username'),
//   email: yup
//     .string()
//     .email()
//     .required('Please Enter your Email'),
//   confirmEmail: yup
//     .string()
//     .email()
//     .required()
//     .oneOf([yup.ref("email"), null], "Emails must match"),
//   password: yup
//     .string()
//     .required('Please Enter your password')
//     .matches(
//       "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
//       "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
//     ),
//   confirmPassword: yup
//     .string()
//     .required()
//     .oneOf([yup.ref("password"), null], "Passwords must match")
// });

// const SignUp = props => {
//   return (
//     <Formik
//     validationSchema={schema}
//     onSubmit={console.log}
//     initialValues={{ 
//       username: "",
//       email : "",
//       confirmEmail : "",
//       password: "",
//       confirmPassword : ""
//     }}
//   >
//   {({
//     handleSubmit,
//     handleChange,
//     handleBlur,
//     values,
//     touched,
//     isValid,
//     errors,
//   }) => (
//     <div className="SignUpForm">
//       <h1 className="SignInHeading">SIGN UP</h1>
//       <Form noValidate onSubmit={handleSubmit}>
//         <Form.Group controlId="formBasicUserName">
//           <Form.Control
//             size="lg"
//             className="SignUpFormControls"
//             type="text"
//             name="username"
//             value={values.username}
//             onChange={handleChange}
//             placeholder="Username"
//             isInvalid={!!errors.username}
//           />
//           <Form.Control.Feedback className="FeedBack" type="invalid">
//           {errors.username}
//         </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group controlId="formBasicEmail">
//           <Form.Control
//             type="email"
//             placeholder="Email"
//             value={values.email}
//             onChange={handleChange}
//             name="email"
//             className="SignUpFormControls"
//             size="lg"
//             isInvalid={!!errors.email}
//           />
//           <Form.Control.Feedback className="FeedBack" type="invalid">
//           {errors.email}
//         </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group controlId="formBasicConfirmEmail">
//           <Form.Control
//             type="email"
//             className="SignUpFormControls"
//             size="lg"
//             name="confirmEmail"
//             value = {values.confirmEmail}
//             onChange={handleChange}
//             placeholder="Confirm Email"
//             isInvalid={!!errors.confirmEmail}
//           />
//           <Form.Control.Feedback className="FeedBack" type="invalid">
//           {errors.confirmEmail}
//         </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//           <Form.Control
//             className="SignUpFormControls"
//             size="lg"
//             type="password"
//             name="password"
//             value={values.password}
//             onChange={handleChange}
//             placeholder="Password"
//             isInvalid={!!errors.password}
//           />
//           <Form.Control.Feedback className="FeedBack" type="invalid">
//           {errors.password}
//         </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group controlId="formBasicConfirmPassword">
//           <Form.Control
//             className="SignUpFormControls"
//             size="lg"
//             name="confirmPassword"
//             onChange={handleChange}
//             type="password"
//             value={values.confirmPassword}
//             placeholder="Confirm Password"
//             isInvalid={!!errors.confirmPassword}
//           /><Form.Control.Feedback className="FeedBack" type="invalid">
//           {errors.confirmPassword}
//         </Form.Control.Feedback>
//         </Form.Group>

//         <Button variant="primary" className="SignUpButton" type="submit">
//           Sign Up
//         </Button>
//         <Form.Text>
//           Already a User?{" "}
//           <a href="#signin" onClick={props.toggle}>
//             Sign In
//           </a>
//         </Form.Text>
//       </Form>
//     </div>)}
//     </Formik>
//   );
// };

// export default SignUp;
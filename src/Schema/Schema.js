import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(15).required("please enter your name"),
  email: Yup.string().email().required("please enter your email"),
  password: Yup.string()
    .required("please enter your password")
    .min(8)
    .max(16)
    .matches(/[a-z]/, "password contain lower case")
    .matches(/[A-Z]/, "password contain atleast one Upper case")
    .matches(/[@_-]/, "password contain atleast one special character"),
  confirmpassword: Yup.string()
    .required("please enter your confirmpassword")
    .oneOf([Yup.ref("password"), null], "password must be same"),
  mobile: Yup.string()
    .required("please enter your mobile no.")
    .min(10)
    .max(10)
    .matches(/[0-9]/),
  city: Yup.string().required("please enter your city")
});

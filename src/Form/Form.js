import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { signUpSchema } from "../Schema/Schema";
import "./Form.css";
import { useState } from "react";
import Pop from "./Pop";

const Form = () => {
    const [getPop, setPop] = useState("")
    const [getFlag,setFlag]=useState(false)
    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
        mobile: "",
        city: ""
    };

    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        resetForm,
        isValid
    } = useFormik({
        initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            isValidHandler()
            action.resetForm();
            
        }
    });

    const isValidHandler = () => {
        if (isValid) {
            setFlag(true)
            setPop("successfully register")
            setTimeout(()=>{
                setFlag(false)
                setPop("")
            },2000)
            
        }
    }




    return (
        <div>
        <div className="container" style={{ width: "30%" }}>
            <form onSubmit={handleSubmit}>
                <div>
                    <TextField
                        error={errors.name && touched.name}
                        margin="normal"
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={errors.name && touched.name ? errors.name : null}
                    />
                </div>
                <div>
                    <TextField
                        error={errors.email && touched.email}
                        helperText={errors.email && touched.email ? errors.email : null}
                        margin="normal"
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div>
                    <TextField
                        error={errors.password && touched.password}
                        helperText={
                            errors.password && touched.password ? errors.password : null
                        }
                        margin="normal"
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div>
                    <TextField
                        error={errors.confirmpassword && touched.confirmpassword}
                        helperText={
                            errors.confirmpassword && touched.confirmpassword
                                ? errors.confirmpassword
                                : null
                        }
                        margin="normal"
                        id="outlined-basic"
                        label="Confirm Password"
                        variant="outlined"
                        name="confirmpassword"
                        type="password"
                        value={values.confirmpassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div>
                    <TextField
                        error={errors.mobile && touched.mobile}
                        helperText={errors.mobile && touched.mobile ? errors.mobile : null}
                        margin="normal"
                        id="outlined-basic"
                        label="Mobile No."
                        variant="outlined"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div>
                    <TextField
                        error={errors.city && touched.city}
                        helperText={errors.city && touched.city ? errors.city : null}
                        margin="normal"
                        id="outlined-basic"
                        label="City"
                        variant="outlined"
                        name="city"
                        value={values.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>

                <div>
                    <Button color="success" variant="outlined" type="submit">
                        Sign Up
                    </Button>
                    <Button
                        color="secondary"
                        variant="outlined"
                        type="reset"
                        onClick={() => resetForm()}
                    >
                        Reset
                    </Button>
                </div>
            </form>
           
        </div>
        {getFlag && <Pop getPop={getPop} />}
        </div>
    );
};
export default Form;

import { useDispatch, useSelector } from "react-redux";

import { useFormik } from "formik";
import * as Yup from "yup";
import LoadingButton from "@mui/lab/LoadingButton";

import { login } from "../../redux/auth/operations";
import { selectLoading } from "../../redux/auth/selectors";

import s from "./LoginForm.module.css";
import { TextField } from "@mui/material";

export default function LoginForm() {
  const loading = useSelector(selectLoading);

  const dispatch = useDispatch();

  const ValidationSchema = Yup.object().shape(
    {
      email: Yup.string().email().required("Required"),
      password: Yup.string().min(6, "Too Short!").required("Required"),
    },
    { strict: true }
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: ValidationSchema,
    onSubmit: (values, action) => {
      dispatch(
        login({
          email: values.email.trim(),
          password: values.password.trim(),
        })
      );
      action.resetForm();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className={s.form}>
        <h2 className={s.title}>Login</h2>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <LoadingButton
          type="submit"
          loading={loading}
          loadingIndicator="Loading…"
          variant="outlined"
          className={s.btn}>
          <span>Log in</span>
        </LoadingButton>
      </form>
    </>
  );
}

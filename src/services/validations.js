import * as yup from "yup";

export const loginSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .required("Email is required field*")
      .matches(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "Please enter valid email"
      ),
    password: yup
      .string()
      .required("Password is required field*")
      .matches(
        /^(?=.*\d).{8,}$/,
        "Minimum 8 characters and 1 number is required*"
      ),
  })
  .required();

export const singupSchema = yup
  .object()
  .shape({
    name: yup
      .string()
      .required("Name is required field*")
      .matches(/[a-zA-Z]/, "Only characters allowed*"),
    email: yup
      .string()
      .required("Email is required field*")
      .matches(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "Please enter valid email*"
      ),
    password: yup
      .string()
      .required("Password is required field*")
      .matches(
        /^(?=.*\d).{8,}$/,
        "Minimum 8 characters and 1 number is required*"
      ),
  })
  .required();

export const taskSchema = yup
  .object()
  .shape({
    title: yup.string().required("Title is required field*"),
    description: yup.string().required("Description is required field"),
  })
  .required();

import { useDispatch } from "react-redux";
import { updateWholeUser } from "../store/authSlice";
import { Formik, Form } from "formik";
import { Form as BsForm, Button } from "react-bootstrap";
import Input from "../../components/Input";

const initialValues = { email: "", name: "", password: "" };

const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(updateWholeUser(values));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validateOnChange>
      <Form as={BsForm} noValidate>
        <Input id="email" label="Email" type="email" />
        <Input id="name" label="Name" />
        <Input id="password" label="Password" type="password" />
        <Button type="submit">Connexion</Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;

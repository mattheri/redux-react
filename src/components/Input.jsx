import { useField } from "formik";
import Form from "react-bootstrap/Form";

const Input = ({ id, label, type = "text", ...props }) => {
  const [field, { touched, error }] = useField(id);

  return (
    <Form.Group>
      {label && <Form.Label htmlFor={id}>{label}</Form.Label>}
      <Form.Control
        id={id}
        type={type}
        {...props}
        {...field}
        isInvalid={touched && error}
      />
      {touched && error && (
        <Form.Text className="text-danger">{error}</Form.Text>
      )}
    </Form.Group>
  );
};

export default Input;

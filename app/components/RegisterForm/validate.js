export const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  }

  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  if (values.password && values.password.length < 10) {
    errors.password = 'Password must be at least 10 symbols';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Required';
  }

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords must be the same';
  }

  return errors;
};

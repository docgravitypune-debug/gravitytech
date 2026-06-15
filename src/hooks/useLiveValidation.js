import { useMemo, useState } from "react";

export default function useLiveValidation(initialValues, validators) {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});

  const errors = useMemo(() => {
    return Object.entries(validators).reduce((result, [field, validate]) => {
      const error = validate(values[field], values);

      if (error) {
        result[field] = error;
      }

      return result;
    }, {});
  }, [validators, values]);

  const isValid = Object.keys(errors).length === 0;

  function setFieldValue(name, value) {
    setValues((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleChange(event) {
    const { name, value, files, type } = event.target;
    setFieldValue(name, type === "file" ? files?.[0] || null : value);
  }

  function handleBlur(event) {
    const { name } = event.target;
    setTouched((current) => ({
      ...current,
      [name]: true,
    }));
  }

  function touchAll() {
    setTouched(
      Object.keys(validators).reduce((result, field) => {
        result[field] = true;
        return result;
      }, {}),
    );
  }

  function reset() {
    setValues(initialValues);
    setTouched({});
  }

  return {
    errors,
    handleBlur,
    handleChange,
    isValid,
    reset,
    setFieldValue,
    setTouched,
    setValues,
    touchAll,
    touched,
    values,
  };
}

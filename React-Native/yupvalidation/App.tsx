import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Yup from "yup";

interface FormValues {
  email: string;
  password: string;
  mobile: string;
}

interface FormErrors {
  email?: string;
  password?: string;
  mobile?: string;
}

const userFormSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string().min(6, "password is too short").max(10, "password is too long").required("password is required"),
  mobile: Yup.string()
    .matches(/^\d{10}$/, 'Mobile number must be exactly 10 digits')
    .required('Mobile number is required'),

});

const App: React.FC = () => {
  const [initialValues, setInitialValues] = useState<FormValues>({
    email: "",
    password: "",
    mobile: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [message, setMessage] = useState<string>("");

  const handleChange = (key: keyof FormValues, val: string) => {
    setInitialValues({ ...initialValues, [key]: val });
    setErrors({ ...errors, [key]: undefined });
  };

  // Reference: https://beyondthecloud.dev/blog/then-vs-async-await-in-lwc
  // https://dev.to/masteringjs/using-then-vs-async-await-in-javascript-2pma
  const handleSubmit = async () => {
    try {
      await userFormSchema.validate(initialValues, { abortEarly: false });
      setErrors({});
      setMessage("Form is valid");
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        setMessage("Form is invalid");
        const newErrors = error.inner.reduce((acc: FormErrors, cur) => {
          acc[cur.path as keyof FormErrors] = cur.message;
          return acc;
        }, {});
        setErrors(newErrors);
      }
    }
  };


  return (
    <View style={Styles.container}>
      <TextInput
        style={Styles.input}
        placeholder="Email"
        value={initialValues.email}
        onChangeText={(value) => handleChange("email", value)}
      />
      {errors.email && <Text style={Styles.error}> {errors.email} </Text>}
      <TextInput
        style={Styles.input}
        placeholder="Password"
        value={initialValues.password}
        onChangeText={(value) => handleChange("password", value)}
        secureTextEntry
      />
      {errors.password && <Text style={Styles.error}> {errors.password} </Text>}
      <TextInput
        style={Styles.input}
        placeholder="Mobile Number"
        value={initialValues.mobile}
        onChangeText={(value) => handleChange("mobile", value)}
      />
      {errors.mobile && <Text style={Styles.error}> {errors.mobile} </Text>}
      <TouchableOpacity style={Styles.button} onPress={handleSubmit as any}>
        <Text style={Styles.buttonText}> Submit </Text>
      </TouchableOpacity>
      {message === "Form is valid" ? (
        <Text style={Styles.message}>{message}</Text>
      ) : (
        <Text style={Styles.error}>{message}</Text>
      )}
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  error: {
    marginBottom: 10,
    color: "red",
  },
  button: {
    backgroundColor: "#0084ff",
    width: "70%",
    borderRadius: 4,
    alignItems: "center",
    padding: 12,
  },
  input: {
    borderWidth: 2,
    padding: 15,
    marginBottom: 10,
    width: "70%",
    borderColor: "black",
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  message: {
    marginBottom: 10,
    color: "green",
  },
});

export default App;

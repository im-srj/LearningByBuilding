import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import * as Yup from 'yup';

interface FormValues {
  email: string;
  password: string;
  phone: string;
}

interface FormErrors {
  email?: string;
  password?: string;
  phone?: string;
}

const userFormSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string()
    .min(6, 'Password is too short')
    .max(10, 'Password is too long')
    .required('Password is required'),
  phone: Yup.string()
    .required('Mobile number is required'),
});


const App: React.FC = () => {
  const [initialValues, setInitialValues] = useState<FormValues>({
    email: '',
    password: '',
    phone: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [countryCode, setCountryCode] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [display, setDisplay] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);

  const handleChange = (key: keyof FormValues, val: string) => {
    setInitialValues({ ...initialValues, [key]: val });
    setErrors({ ...errors, [key]: undefined });
  };

  const handleSubmit = async () => {
    try {
      await userFormSchema.validate(initialValues, { abortEarly: false });
      setErrors({});
      const checkValid = phoneInput.current?.isValidNumber(initialValues.phone);
      setValid(checkValid ? checkValid : false);
      setDisplay(true);
      setCountryCode(phoneInput.current?.getCountryCode() || '');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
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
      {display && (
        <View style={Styles.message}>
          <Text>Email : {initialValues.email}</Text>
          <Text>Country Code : {countryCode}</Text>
          <Text>Value : {initialValues.phone}</Text>
          <Text>Formatted Value : {formattedValue}</Text>
          <Text>Valid : {valid ? 'true' : 'false'}</Text>
        </View>
      )}
      <TextInput
        style={Styles.input}
        placeholder="Email"
        value={initialValues.email}
        onChangeText={(value) => handleChange('email', value)}
      />
      {errors.email && <Text style={Styles.error}> {errors.email} </Text>}
      <TextInput
        style={Styles.input}
        placeholder="Password"
        value={initialValues.password}
        onChangeText={(value) => handleChange('password', value)}
        secureTextEntry
      />
      {errors.password && <Text style={Styles.error}> {errors.password} </Text>}
      <PhoneInput
        ref={phoneInput}
        value={initialValues.phone}
        defaultCode="IN"
        layout="first"
        onChangeText={(value) => handleChange('phone', value)}
        onChangeFormattedText={(text) => {
          setFormattedValue(text);
          setCountryCode(phoneInput.current?.getCountryCode() || '');
        }}
        countryPickerProps={{ withAlphaFilter: true }}
        containerStyle={{
          borderWidth: 2,
          marginBottom: 10,
          width: '70%',
          borderColor: 'black',
          borderRadius: 4,
        }}
        withDarkTheme
        withShadow
        autoFocus
      />
      {errors.phone && <Text style={Styles.error}> {errors.phone} </Text>}
      <TouchableOpacity style={Styles.button} onPress={handleSubmit}>
        <Text style={Styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    marginBottom: 10,
    color: 'red',
  },
  button: {
    backgroundColor: '#0084ff',
    width: '70%',
    borderRadius: 4,
    alignItems: 'center',
    padding: 12,
    marginTop: 10,
  },
  input: {
    borderWidth: 2,
    padding: 15,
    marginBottom: 10,
    width: '70%',
    borderColor: 'black',
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    marginBottom: 10,
    color: 'green',
  },
});

export default App;

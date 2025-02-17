import { Formik, FormikHelpers } from 'formik';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Yup from 'yup';

interface FormValues {
    email: string;
    password: string;
    mobile: string;
}


const userFormSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is Required"),
    password: Yup.string().min(6, "password is too short").max(10, "password is too long").required("password is required"),
    mobile: Yup.string()
        .matches(/^\d{10}$/, 'Mobile number must be exactly 10 digits')
        .required('Mobile number is required'),

});

// Reference: https://beyondthecloud.dev/blog/then-vs-async-await-in-lwc
// https://dev.to/masteringjs/using-then-vs-async-await-in-javascript-2pma
const App = () => {
    const [message, setMessage] = useState<string>("");

    // const handleSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
    //     try {
    //         await userFormSchema.validate(values, { abortEarly: false });
    //         setMessage("Form is valid");
    //         actions.resetForm();
    //     } catch (error) {
    //             setMessage("Form is invalid");
    //         }
    //     }
    // };


    const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
        userFormSchema.validate(values, { abortEarly: false })
            .then(() => {
                setMessage("Form is valid");
                // actions.resetForm();
            })
            .catch((errors) => {
                setMessage("Form is invalid");
                // actions.resetForm();

            });
    };

    return (
        <View style={Styles.container}>
            <Formik
                initialValues={{ email: '', password: '', mobile: '' }}
                onSubmit={(values, actions) => handleSubmit(values, actions)}
                validationSchema={userFormSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View style={{ width: '80%' }}>
                        <TextInput
                            style={Styles.input}
                            placeholder="Email"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />
                        {touched.email && errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
                        <TextInput
                            style={Styles.input}
                            placeholder="Password"
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry
                        />
                        {touched.password && errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}
                        <TextInput
                            style={Styles.input}
                            placeholder="Mobile"
                            onChangeText={handleChange('mobile')}
                            onBlur={handleBlur('mobile')}
                            value={values.mobile}
                            keyboardType="numeric"
                        />
                        {touched.mobile && errors.mobile && <Text style={{ color: 'red' }}>{errors.mobile}</Text>}
                        <TouchableOpacity style={Styles.button} onPress={handleSubmit as any}>
                            <Text style={Styles.buttonText}> Submit 1 </Text>
                        </TouchableOpacity>
                        <Text> {message} </Text>
                    </View>
                )}
            </Formik>
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
        width: "100%",
        justifyContent: "center",
        borderRadius: 4,
        alignItems: "center",
        padding: 12,
    },
    input: {
        borderWidth: 2,
        padding: 15,
        marginBottom: 10,
        width: "100%",
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

import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { Button, HStack, VStack } from "@chakra-ui/react";
import { Text, Box } from "@chakra-ui/react";

const RegistrationFrom = () => {
  const categoryOptions = [
    { key: "Please Select Your Category", value: "" },
    { key: "General", value: "General" },
    { key: "OBC(NCL)", value: "OBC(NCL)" },
    { key: "EWS", value: "EWS" },
    { key: "SC", value: "SC" },
    { key: "ST", value: "ST" },
  ];
  const experienceOptions = [
    { key: "Please Select Experience", value: "" },
    { key: "Yes", value: true },
    { key: "No", value: false },
  ];
  const btechRadioOptions = [
    { key: "Yes", value: "true" },
    { key: "No", value: "false" },
  ];
  const languageOptions = [
    { key: "English", value: "eng" },
    { key: "Hindi", value: "hin" },
  ];
  const initialValues = {
    name: "",
    email: "",
    category: "",
    experience: "",
    dob: "",
    btechdegree: "",
    mathorstatdegree: true,
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    category: Yup.string().required("Required"),
    experience: Yup.boolean().required("Required"),
    dob: Yup.date().required("Required"),
    btechdegree: Yup.boolean().required("Required"),
    mathorstatdegree: Yup.string().when("btechdegree", {
      is: "false",
      then: Yup.string().required("Required"),
    }),
  });
  const onSubmit = async (values) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <VStack align="center">
              <Text fontWeight="bold" align="center">
                Registration Form
              </Text>
              <HStack spacing="40px" mb="5px" align="center">
                <VStack align="center">
                  <FormikControl
                    control="input"
                    label="Name"
                    name="name"
                    type="text"
                  />
                  <FormikControl
                    control="select"
                    label="Previous Experience"
                    name="experience"
                    options={experienceOptions}
                    type="select"
                  />
                  <FormikControl
                    control="input"
                    label="Email"
                    name="email"
                    type="email"
                  />

                  <FormikControl
                    control="radio"
                    label="Do you have a B.Tech Degree ?"
                    name="btechdegree"
                    options={btechRadioOptions}
                    type="radio"
                  />
                  {formik.values.btechdegree === "false" && (
                    <FormikControl
                      control="radio"
                      label="Do you have a Bachelor's degree with mathematics or statistics as subject?"
                      name="mathorstatdegree"
                      options={btechRadioOptions}
                      type="radio"
                    />
                  )}
                </VStack>

                <VStack>
                  <FormikControl
                    control="select"
                    label="Category"
                    name="category"
                    options={categoryOptions}
                    type="text"
                  />

                  <FormikControl
                    control="input"
                    label="Date of Birth"
                    name="dob"
                    type="date"
                  />
                </VStack>
              </HStack>
              <Button
                type="submit"
                isDisabled={!(formik.isValid && formik.dirty)}
              >
                Submit
              </Button>
            </VStack>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegistrationFrom;

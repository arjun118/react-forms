import React from "react";
import InputField from "./fields/InputField";
import RadioButton from "./fields/RadioButton";
import DropDown from "./fields/DropDown";
import TextArea from "./fields/TextArea";
import CheckBoxField from "./fields/CheckBoxField";
const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <InputField {...rest} />;
    case "nestedinput":
      return <NestedInputField {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <DropDown {...rest} />;
    case "nestedselect":
      return <NestedDropDown {...rest} />;
    case "radio":
      return <RadioButton {...rest} />;
    case "checkbox":
      return <CheckBoxField {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;

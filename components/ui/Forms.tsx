import React from "react";
import Form from "./Form";
import { useTheme } from "../context/ThemeContext";
import Input from "./Input";
import Buttom from "./Buttom";

const Orders = () => {
  const { theme, isButton } = useTheme();
  return (
    <div
      className={`${theme.background} ${theme.text} flex size-full items-center  flex-col   `}
    >
      <div className="mt-40 flex items-center flex-col gap-5">
        <p className="text-4xl font-bold">Team Up with Us!</p>
        <Form className="flex flex-col gap-5 w-[700px] items-center">
          <p className="text-xl  text-gray-500">Personal Details</p>
          <Input placeHolder="Full Name" />
          <Input placeHolder="Birthdate" />
          <Input placeHolder="Address" />
          <Input placeHolder="State" />
          <Input placeHolder="Post code" />
          <Input placeHolder="Phone" />
          <Input placeHolder="Email" />
          <p className="text-xl  text-gray-500">Physical Details</p>
          <Input placeHolder="Skin Color" />
          <Input placeHolder="Eye Color" />
          <Input placeHolder="HairColor" />
          <Buttom label="Apply now" type="submit" />
        </Form>
      </div>
    </div>
  );
};

const Register = () => {
  const { theme, isButton } = useTheme();

  return (
    <div
      className={`${theme.background} ${theme.text} flex size-full items-center  flex-col   `}
    >
      <div className="mt-40 flex items-center flex-col gap-5">
        <p className="text-4xl font-bold">Become a Part of Our Journey</p>
        <Form className="flex flex-col gap-5 w-[700px] items-center">
          <p className="text-xl  text-gray-500">Personal Details</p>
          <Input placeHolder="Full Name" />
          <Input placeHolder="Birthdate" />
          <Input placeHolder="Address" />
          <Input placeHolder="State" />
          <Input placeHolder="Post code" />
          <Input placeHolder="Phone" />
          <Input placeHolder="Email" />
          <p className="text-xl  text-gray-500">Physical Details</p>
          <Input placeHolder="Skin Color" />
          <Input placeHolder="Eye Color" />
          <Input placeHolder="HairColor" />

          <p className="text-xl  text-gray-500">Physical Details</p>

          <div className="flex gap-5 mt-10 mb-10">
            <Input placeHolder="upload photo" />{" "}
            <Buttom
              label="upload"
              type="button"
              className="font-normal w-1/3"
            />
          </div>
          <Buttom label="Apply now" type="submit" />
        </Form>
      </div>
    </div>
  );
};

//Render Forms
const RenderForms = ({ name }: { name: string }) => {
  switch (name) {
    case "Orders":
      return <Orders />;
    case "Register":
      return <Register />;
  }
};

export default RenderForms;

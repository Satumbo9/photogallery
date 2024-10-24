import React, { useState } from "react";
import Form from "./Form";
import { useTheme } from "../context/ThemeContext";
import Input from "./Input";
import Buttom from "./Buttom";
import { usePathname } from "next/navigation";
import next from "next";

const Orders = () => {
  const { theme, isButton } = useTheme();
  const [steps, setSteps] = useState<number>(0);
  const nextStep = [
    {
      text: "Personal Details",
      id: 0,
    },
    {
      text: "Physical Details",
      id: 1,
    },
    {
      text: "Upload photo",
      id: 2,
    },
  ];
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
  const [currentStep, setCurrentStep] = useState<number>(0);
  const nextStep = [
    {
      text: "Personal Details",
      id: 0,
    },
    {
      text: "Physical Details",
      id: 1,
    },
    {
      text: "Upload photo",
      id: 2,
    },
  ];

  return (
    <div
      className={`${theme.background} ${theme.text} flex size-full items-center  flex-col   `}
    >
      <div className="mt-10 p-10 flex items-center flex-col gap-5">
        <p className="text-4xl font-bold text-gray-500">Become a Model</p>

        <Form className="flex flex-col gap-5 w-[700px] items-center">
          <div className="flex gap-5">
            {nextStep.map((items, i) => {
              return (
                <p
                  key={i}
                  className={`font-semibold text-gray-500 ${
                    currentStep === items.id ? "text-red-500 " : null
                  }`}
                >
                  {items.text}
                </p>
              );
            })}
          </div>
          {currentStep === 0 && (
            <div className="w-full flex items-center justify-center flex-col gap-5">
              <p className="text-xl  text-gray-500">Personal Details</p>
              <Input placeHolder="Full Name" />
              <Input placeHolder="Birthdate" />
              <Input placeHolder="Address" />
              <Input placeHolder="State" />
              <Input placeHolder="Post code" />
              <Input placeHolder="Phone" />
              <Input placeHolder="Email" />
            </div>
          )}
          {currentStep === 1 && (
            <div className="w-full flex items-center justify-center flex-col gap-5">
              <p className={`text-xl  text-gray-500 `}>Physical Details</p>
              <Input placeHolder="Skin Color" />
              <Input placeHolder="Eye Color" />
              <Input placeHolder="HairColor" />
            </div>
          )}

          {currentStep === 2 && (
            <div
              className={`w-full flex items-center justify-center flex-col gap-5 ${
                currentStep === 2 ? "mb-10" : null
              }`}
            >
              <p className="text-xl  text-gray-500">Upload photo</p>

              <div className="flex gap-5">
                <Input placeHolder="upload photo" />{" "}
                <Buttom
                  label="upload"
                  type="button"
                  className="font-normal w-1/3"
                />
              </div>
            </div>
          )}
          <div className="flex gap-5">
            {currentStep !== 0 && (
              <Buttom
                onClick={() => {
                  console.log("NextStep", currentStep);
                  setCurrentStep((prev) => prev - 1);
                }}
                label="Back"
                type="button"
              />
            )}
            {currentStep !== 2 && (
              <Buttom
                onClick={() => {
                  console.log("NextStep", currentStep);
                  setCurrentStep((prev) => prev + 1);
                }}
                label="Next"
                type="button"
              />
            )}
            {currentStep === 2 && <Buttom label="Apply now" type="submit" />}
          </div>
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

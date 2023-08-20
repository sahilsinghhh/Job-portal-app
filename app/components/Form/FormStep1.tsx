import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Label from "@/app/common/Label";
import Input from "@/app/common/Input";
import Button from "@/app/common/Button";
import { IJobDetailProps } from "./Types";

interface FormStep1Props {
  handleNextForm: () => void;
  handleSubmit: (
    onSubmit: (data: any) => void
  ) => React.FormEventHandler<HTMLFormElement>;
}

const FormStep1: React.FC<FormStep1Props> = ({
  handleNextForm,
  handleSubmit,
}) => {
  const {
    formState: { isDirty, isValid },
  } = useForm();

  const onSubmit: SubmitHandler<IJobDetailProps> = (data) => {
    handleNextForm();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-[32px] bg-white rounded-md h-[564px] w-[577px]"
    >
      <div className="flex justify-between align flex-wrap">
        <h3 className="text-xl font-medium">Create Job</h3>
        <h5 className="font-medium text-base">Step 1</h5>
      </div>
      <div className="mt-4">
        <Label
          htmlFor="jobTitle"
          label="Job title"
          isRequired
          className="lock text-gray-700 font-medium text-sm"
        />
        <Input
          placeholder="ex.UX UI Designer"
          name="jobTitle"
          className="h-[36px] w-[513px] px-3 py-2 mt-1 border rounded-md  focus:ring-1 focus:ring-blue-200 focus:outline-none text-sm"
          errorMessage="Job title is required"
        />
      </div>
      <div>
        <Label
          htmlFor="companyName"
          label="Company name"
          isRequired
          className="lock text-gray-700 font-medium text-sm"
        />
        <Input
          placeholder="ex. Google"
          name="companyName"
          className="h-[36px] w-[513px] px-3 py-2 mt-1 border rounded-md  focus:ring-1 focus:ring-blue-200 focus:outline-none text-sm"
          errorMessage="Company name is required"
        />
      </div>
      <div>
        <Label
          htmlFor="industry"
          label="Industry"
          isRequired
          className="lock text-gray-700 font-medium text-sm"
        />
        <Input
          placeholder="ex.Information Technology"
          name="industry"
          className="h-[36px] w-[513px] px-3 py-2 mt-1 border rounded-md  focus:ring-1 focus:ring-blue-200 focus:outline-none text-sm"
          errorMessage="Industry name is required"
        />
      </div>
      <div className="flex flex-wrap">
        <div className="lg:w-1/2 md:w-full sm:w-full pr-2">
          <Label
            htmlFor="location"
            label="Location"
            className="lock text-gray-700 font-medium text-sm"
          />
          <Input
            placeholder="ex.Chennai"
            className="h-[36px] w-[244.5px] px-3 py-2 border rounded-md focus:ring-1 focus:ring-1-blue-200 focus:outline-none  text-sm"
            name="location"
          />
        </div>
        <div className="lg:w-1/2 md:w-full sm:w-full gap-x-6 pl-2">
          <Label
            htmlFor="remoteType"
            label="Remote Type"
            className="lock text-gray-700 font-medium text-sm"
          />
          <Input
            placeholder="ex. In-office"
            className="h-[36px] w-[244.5px] px-3 py-2 border rounded-md focus:ring-1 focus:ring-1-blue-200 focus:outline-none  text-sm"
            name="remoteType"
          />
        </div>
      </div>
      <div className=" mt-[67px] flex justify-end">
        <Button
          type="submit"
          className="h-[40px] w-[68px] bg-primary-blue text-white font-bold py-2 px-4 rounded px-4 py-2 rounded"
          disable={!isDirty && !isValid}
        >
          Next
        </Button>
      </div>
    </form>
  );
};

export default FormStep1;

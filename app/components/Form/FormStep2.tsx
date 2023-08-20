import React from "react";
import { toast } from "react-toastify";
import { SubmitHandler } from "react-hook-form";
import Button from "@/app/common/Button";
import Input from "@/app/common/Input";
import Label from "@/app/common/Label";
import { handlePostData, handleUpdateData } from "@/app/service/api";

interface FormStep2Props {
  handleSubmit: (
    onSubmit: (data: any) => void
  ) => React.FormEventHandler<HTMLFormElement>;
  handleCloseModal: () => void;
}

const FormStep2: React.FC<FormStep2Props> = ({
  handleSubmit,
  handleCloseModal,
}) => {
  const onSubmit: SubmitHandler<any> = (data) => {
    if (data?.id) {
      handleUpdateData("job", data)
        .then((res) => {
          handleCloseModal();
          toast("Job updated successfully", {
            type: "success",
          });
        })
        .catch((error) => {
          toast("Error while updating job detail,Please try again", {
            type: "error",
          });
        });
    } else {
      handlePostData("job", data)
        .then((res) => {
          handleCloseModal();
          toast("Job created successfully", {
            type: "success",
          });
        })
        .catch((error) => {
          toast("Error while creating job, Please try again", {
            type: "error",
          });
        });
    }
  };

  return (
    <form
      className="p-[32px] h-[564px] w-[577px] bg-white rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex justify-between align flex-wrap ">
        <h3 className="text-xl font-medium">Create a job</h3>
        <h5 className="font-medium text-base">Step 2</h5>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="lg:w-1/2 md:w-full sm:w-full pr-2">
          <Label
            htmlFor="experience"
            label="Experience"
            className="block text-gray-700 font-medium text-sm"
          />
          <Input
            type="number"
            name="minExperience"
            placeholder="Minimum"
            className="h-[36px] w-[244.5px] px-3 py-2 border rounded-md focus:ring-1 focus:ring-1-blue-200 focus:outline-none text-sm"
          />
        </div>
        <div className="lg:w-1/2 md:w-full sm:w-full gap-x-6 pl-2">
          <Input
            type="number"
            name="maxExperience"
            placeholder="Maximum"
            className="h-[36px] w-[244.5px] mt-5 px-3 py-2 border rounded-md focus:ring-1 focus:ring-1-blue-200 focus:outline-none text-sm"
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="lg:w-1/2 md:w-full sm:w-full pr-2">
          <Label
            htmlFor="Salary"
            label="Salary"
            className="block text-gray-700 font-medium text-sm"
          />
          <Input
            type="number"
            name="minSalary"
            placeholder="Minimum"
            className="h-[36px] w-[244.5px] px-3 py-2 border rounded-md focus:ring-1 focus:ring-1-blue-200 focus:outline-none text-sm"
          />
        </div>
        <div className="lg:w-1/2 md:w-full sm:w-full gap-x-6 pl-2">
          <Input
            type="number"
            name="maxSalary"
            placeholder="Maximum"
            className="h-[36px] w-[244.5px] mt-5 px-3 py-2 border rounded-md focus:ring-1 focus:ring-1-blue-200 focus:outline-none text-sm"
          />
        </div>
      </div>
      <div>
        <Label
          htmlFor="total employee"
          label="Total employee"
          className="block text-gray-700 font-medium text-sm mt-1"
        />
        <Input
          name="totalEmployee"
          placeholder="ex.100"
          className="h-[36px] w-[513px] px-3 py-2 border rounded-md  focus:ring-1 focus:ring-blue-200 focus:outline-none text-sm"
        />
      </div>
      <div>
        <Label
          htmlFor="experience"
          label="Apply type"
          className="block text-gray-700 font-medium mb-1 text-sm"
        />
        <div className="flex mt-2 flex-wrap">
          <div className="flex items-center">
            <Input
              type="radio"
              className="pr-4 border rounded-lg"
              name="applyType"
              value="quickApply"
            />
            <Label
              htmlFor="radio"
              label="Quick apply"
              className="ml-1 me-2 text-sm"
            />
          </div>
          <div className="flex items-center">
            <Input
              type="radio"
              className="md:ml-4 border rounded-lg"
              name="applyType"
              value="externalApply"
            />
            <Label
              htmlFor="radio"
              label="External apply"
              className="ml-1 text-sm"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <Button
          type="submit"
          className="h-[40px] w-[68px] mt-[96px] bg-primary-blue text-white font-bold py-2 px-4 rounded px-4 py-2 rounded"
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default FormStep2;

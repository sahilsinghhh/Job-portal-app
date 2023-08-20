"use client";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useForm, FormProvider } from "react-hook-form";
import Button from "../common/Button";
import Modal from "../common/Modal";
import JobList from "../components/List/JobList";
import FormStep1 from "../components/Form/FormStep1";
import FormStep2 from "../components/Form/FormStep2";
import { fetchJobData, handleDeleteData } from "../service/api";
import { IJobDetailDataProps } from "../components/Card/Types";

const Dashboard = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [showStepTwoForm, setShowStepTwoForm] = useState<boolean>(false);
  const [jobData, setJobData] = useState([]);
  const [jobDetailById, setJobDetailById] = useState({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const methods = useForm({ values: jobDetailById });
  const { handleSubmit, reset } = methods;

  useEffect(() => {
    handleGetjobData();
  }, [isShow]);

  const handleGetjobData = () => {
    setIsLoading(true);
    fetchJobData("job")
      .then((res) => {
        setIsLoading(false);
        setJobData(res);
      })
      .catch((error) => {
        toast("Something went wrong", {
          type: "error",
        });
      });
  };

  const handleOpenModal = () => {
    setJobDetailById({});
    setIsShow(true);
  };

  const handleCloseModal = () => {
    reset({});
    setIsShow(false);
    setShowStepTwoForm(false);
  };

  const handleNextForm = () => {
    setShowStepTwoForm(true);
  };

  const handleEditJobDetail = (detail: IJobDetailDataProps) => {
    setJobDetailById(detail);
    setIsShow(true);
  };

  const handleDeleteJobDetail = (id: string) => {
    handleDeleteData("job", id)
      .then((res) => {
        handleGetjobData();
        toast("Job deleted successfully", {
          type: "success",
        });
      })
      .catch((error) => {
        toast("Error while deleting job, Please try again", {
          type: "error",
        });
      });
  };
  return (
    <div className="p-6 bg-secondary-grey">
      <Button
        onClick={handleOpenModal}
        className="rounded bg-sky-500 text-white py-2 px-4 font-medium"
      >
        Create Job
      </Button>
      <Modal
        isShow={isShow}
        handleCloseModal={handleCloseModal}
        className="h-auto w-[577px]"
      >
        <FormProvider {...methods}>
          {showStepTwoForm ? (
            <FormStep2
              handleSubmit={handleSubmit}
              handleCloseModal={handleCloseModal}
            />
          ) : (
            <FormStep1
              handleNextForm={handleNextForm}
              handleSubmit={handleSubmit}
            />
          )}
        </FormProvider>
      </Modal>
      <JobList
        isLoading={isLoading}
        jobData={jobData}
        handleEditJobDetail={handleEditJobDetail}
        handleDeleteJobDetail={handleDeleteJobDetail}
      />
    </div>
  );
};

export default Dashboard;

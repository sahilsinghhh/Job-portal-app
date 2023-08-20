import React from "react";
import Card from "../Card/Card";
import Loader from "@/app/common/SkeletonLoader";
import { IJobDetailDataProps } from "../Card/Types";

interface JobListProps {
  isLoading: boolean;
  jobData: Array<IJobDetailDataProps>;
  handleEditJobDetail: (detail: IJobDetailDataProps) => void;
  handleDeleteJobDetail: (id: string) => void;
}

const JobList: React.FC<JobListProps> = (props) => {
  const { isLoading, jobData, handleEditJobDetail, handleDeleteJobDetail } =
    props || {};
  const skeletonLoader = [0, 1, 2, 3];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      {jobData?.length > 0 &&
        jobData.map((detail) => (
          <div key={detail.id}>
            <Card
              detail={detail}
              handleEditJobDetail={handleEditJobDetail}
              handleDeleteJobDetail={handleDeleteJobDetail}
            />
          </div>
        ))}
      {isLoading && skeletonLoader.map((_, index) => <Loader key={index} />)}
    </div>
  );
};

export default JobList;

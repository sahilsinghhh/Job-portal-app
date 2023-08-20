import React from "react";
import Image from "next/image";
import logo from "../../images/logo.png";
import Button from "@/app/common/Button";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { IJobDetailDataProps } from "./Types";

interface CardProps {
  detail: IJobDetailDataProps;
  handleEditJobDetail: (detail: IJobDetailDataProps) => void;
  handleDeleteJobDetail: (id: string) => void;
}

const Card: React.FC<CardProps> = ({
  detail,
  handleEditJobDetail,
  handleDeleteJobDetail,
}) => {
  return (
    <div className="w-[830px] h-[320px] flex my-6 bg-white rounded-lg shadow-md py-4 px-6 border sm:w-full">
      <div className="flex flex-wrap">
        <Image
          src={logo}
          className="inline w-10 h-10 rounded-md me-2"
          alt="logo"
        />
        <div>
          <p className="text-2xl font-semibold break-words break-all">
            {detail.jobTitle}
          </p>
          <p className="text-base mt-1 font-medium break-words break-all">
            {detail?.companyName} - {detail?.industry}
          </p>
          <p
            className={`text-base mb-3 mt-1 text-primary-grey break-words break-all`}
          >
            {detail?.location} (In-office)
          </p>
          <p className="text-base mt-5 break-words break-all">
            {detail.remoteType} (9.00 am - 5.00 pm IST)
          </p>
          <p className="text-base mt-1 break-words break-all">
            {`Experience (${detail.minExperience} - ${detail.maxExperience} years)`}
          </p>
          <p className="text-base mt-1 break-words break-all">
            {`INR(₹) ${detail.minSalary} - ${detail.maxSalary} / Month`}
          </p>
          <p className="text-base mt-1 break-words break-all">
            {`${detail.totalEmployee ? detail.totalEmployee : 0} employees`}
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Button
              className={`${detail.applyType !== "quickApply" && "hidden"} 
              border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white font-medium py-2 px-4 rounded-md`}
            >
              Apply Now
            </Button>
            <Button
              className={`${detail.applyType !== "externalApply" && "hidden"} 
              h-[42px] border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white font-medium py-2 px-4 rounded-md`}
            >
              External Apply
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-end">
        <PencilSquareIcon
          className="h-6 w-6 text-blue-200 hover:text-blue-500  cursor-pointer"
          title="Edit"
          onClick={() => handleEditJobDetail(detail)}
        />
        <TrashIcon
          className="h-6 w-6 ms-3 text-red-200 hover:text-red-500 cursor-pointer"
          title="Delete"
          onClick={() => handleDeleteJobDetail(detail?.id)}
        />
      </div>
    </div>
  );
};

export default Card;

export interface IJobDetailProps {
  jobTitle: string;
  companyName?: string;
  industry?: string;
  location?: string;
  remoteType?: string;
  minExperience: number;
  maxExperience: number;
  minSalary: number;
  maxSalary: number;
  totalEmployee?: number;
  applyType: "quickApply" | "externalApply";
}

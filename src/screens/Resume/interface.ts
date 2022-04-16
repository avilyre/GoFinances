import { ResumeCardProps } from "../../components/ResumeCard/interface";

export interface ResumeCategoryData extends ResumeCardProps {
  id: string;
  total: number;
  percent: string;
}

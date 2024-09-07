export interface ImageElement {
  Question_ID: number;
  Question_Image: string;
  Answer_Image: string;
  Time: Date;
  Subject: string;
  Section: string;
  Year: number;
  Set: string;
  Topic: string;
  Keyword: string;
  Question_URL: string;
  Answer_URL: string;
}
export interface ImageElementVIT {
  Question_ID: number;
  Question_text: string | null;
  Module: number;
  Assessment_Type: string;
  Subject: string;
  Question_Alt: string | null;
  Question_URL: string | null;
  Answer_URL: string | null;
}
export type FilterFormProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onYearChange: (value: string) => void;
  onSubjectChange: (value: string) => void;
  onTopicChange: (value: string) => void;
  onSectionChange: (value: string) => void;
};
export type FilterFormPropsVIT = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onModuleChange: (value: string) => void;
  onSubjectChange: (value: string) => void;
  onSearchChange: (value: string) => void;
};
export type ImageElementType = ImageElement | ImageElementVIT;

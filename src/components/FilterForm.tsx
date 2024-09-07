import SelectInput from "./SelectInput";
import SubmitButton from "./SubmitButton";
import { FilterFormProps } from "../util/references";

export default function FilterForm({
  onSubmit,
  onYearChange,
  onSubjectChange,
  onTopicChange,
  onSectionChange,
}: FilterFormProps) {
  return (
    <div className='container p-3 mt-1'>
      <h2 className='text-center ubBoldSm'>CBSE Question Bank</h2>
      <form onSubmit={onSubmit} className='container'>
        <div className='row ubLightSm'>
          <SelectInput
            label='Year'
            options={["2023", "2022", "2021"]}
            onChange={(event) => onYearChange(event.target.value)}
          />
          <SelectInput
            label='Subject'
            options={["Mathematics", "Physics", "Chemistry"]}
            onChange={(event) => onSubjectChange(event.target.value)}
          />
          <SelectInput
            label='Topic'
            options={["Algebra", "Geometry", "Applications of Derivatives"]}
            onChange={(event) => onTopicChange(event.target.value)}
          />
          <SelectInput
            label='Section'
            options={[
              "1 Mark",
              "2 Mark",
              "3 Mark",
              "4 Mark",
              "5 Mark",
              "6 Mark",
              "Case Study",
            ]}
            onChange={(event) => onSectionChange(event.target.value)}
          />
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}

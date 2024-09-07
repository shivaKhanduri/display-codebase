import SelectInput from "./SelectInput";
import SubmitButton from "./SubmitButton";
import { FilterFormPropsVIT } from "../util/references";

export default function FilterFormVIT({
  onSubmit,
  onModuleChange,
  onSubjectChange,
  onSearchChange,
}: FilterFormPropsVIT) {
  return (
    <div className='container p-3 mt-1'>
      <h2 className='text-center ubBoldSm'>VIT Question Bank</h2>
      <form onSubmit={onSubmit} className='container'>
        <div className='row ubLightSm'>
          
          <SelectInput
            label='Subject'
            options={[
              "Engineering Physics",
              "Complex Variables and Linear Algebra",
              "Probability and Statistics",
              "Discrete Mathematics and Graph Theory",
              "Digital Systems Design",
              "Microprocessors and Microcontrollers",
              "Data Structures and Algorithms",
              "Design and Analysis of Algorithms",
              "Computer Architecture and Organization",
              "Software Engineering",
              "Database Systems",
              "Operating Systems",
              "Theory of Computation",
              "Embedded Systems",
              "Artificial Intelligence",
              "Compiler Design",
              "Computer Networks",
              "Cryptography and Network Security",
              "Information Security Analysis and Audit",
              "Information Security Management",
            ]}
            onChange={(event) => onSubjectChange(event.target.value)}
          />
          <SelectInput
            label='Module'
            options={["1", "2", "3", "4", "5", "6", "7"]}
            onChange={(event) => onModuleChange(event.target.value)}
          />
          <div className='col-md-12'>
            <label htmlFor='keyword'>Search By keyword</label>
            <input
              type='text'
              id='keyword'
              className='form-control'
              placeholder='keyword'
              onChange={(event) => onSearchChange(event.target.value)}
            />
          </div>
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}

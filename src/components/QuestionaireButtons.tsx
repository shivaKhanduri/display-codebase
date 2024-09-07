import { FileEarmarkArrowDownFill } from "react-bootstrap-icons";

interface QuestionaireButtonsProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // Function that handles button click
  withAnswer: boolean; // Flag indicating whether answers should be included in PDF
  onCheckboxChange: () => void; // Function that handles checkbox change
  handleSelectAll: (event: React.MouseEvent<HTMLButtonElement>) => void;
  allSelected: boolean;
}

export default function QuestionaireButtons({
  onClick,
  withAnswer,
  onCheckboxChange,
  handleSelectAll,
  allSelected,
}: QuestionaireButtonsProps) {
  return (
    <div className='buttonsContainer mt-1'>
      <button
        className='btn btn-lg gap-3 py-1 ubTheme ubBold qbButtons'
        type='submit'
        onClick={onClick}
      >
        PDF <FileEarmarkArrowDownFill />
      </button>
      {allSelected ? (
        <button
          className='btn btn-lg ms-2 py-1 ubRedBg ubBold qbButtons'
          onClick={handleSelectAll}
        >
          Deselect All
        </button>
      ) : (
        <button
          className='btn btn-lg ms-2 py-1 ubGreenBg ubBold qbButtons'
          onClick={handleSelectAll}
        >
          Select All
        </button>
      )}
      <span className='checkboxContainer'>
        <input
          type='checkbox'
          name='answersCheckbox'
          checked={withAnswer}
          onChange={onCheckboxChange}
        />
        <label className='ms-2 ubLightSm fw-bold'>With Answers</label>
      </span>
    </div>
  );
}

import { ImageElementType } from "../util/references";
import { useQuestionsContext } from "../util/QuestionsContext";
import { pdfgenerator } from "../util/PDFGenerator";
import { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";
import QuestionaireButtons from "./QuestionaireButtons";

interface QuestionaireProps {
  imageElements: ImageElementType[];
}

const Questionaire = ({ imageElements }: QuestionaireProps) => {
  const {
    chosenQuestions,
    updateQuestions,
    deleteFromQuestions,
    clearQuestions,
  } = useQuestionsContext();

  // State to manage checked status of checkboxes
  const [checkedState, setCheckedState] = useState<boolean[]>(
    new Array(imageElements.length).fill(false)
  );
  // To ask user if pdf should include answers
  const [withAnswer, setWithAnswer] = useState(false);

  //select or deselect all feature
  const [allSelected, setAllSelected] = useState(false);

  //when number of questions change
  useEffect(() => {
    deselectAll();
  }, [imageElements]);
  const handleSelectAll = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!allSelected) {
      setCheckedState(new Array(imageElements.length).fill(true));
      imageElements.forEach((image) => {
        updateQuestions(image.Question_ID, image);
      });
      setAllSelected(true);
    } else {
      deselectAll();
      setAllSelected(false);
    }
  };
  const deselectAll = () => {
    imageElements.forEach((image, index) => {
      if (checkedState[index]) deleteFromQuestions(image.Question_ID);
    });
    setCheckedState(checkedState.map(() => false));
  };
  const handleCheckboxChange = (index: number, checked: boolean) => {
    const newCheckedState = [...checkedState];
    newCheckedState[index] = checked;
    setCheckedState(newCheckedState);
    if (checked) {
      updateQuestions(imageElements[index].Question_ID, imageElements[index]);
    } else {
      deleteFromQuestions(imageElements[index].Question_ID);
    }
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (chosenQuestions.size === 0)
      alert("Cannot create a pdf without questions!");
    else {
      await pdfgenerator(chosenQuestions, withAnswer);
    }
    deselectAll();
    clearQuestions();
  };
  return (
    <div>
      <form className='questionContainer'>
        {imageElements.map((image, index) => (
          <QuestionItem
            key={index}
            image={image}
            checked={checkedState[index]}
            onChange={(checked) => handleCheckboxChange(index, checked)}
          />
        ))}
      </form>
      <QuestionaireButtons
        onClick={handleSubmit}
        withAnswer={withAnswer}
        onCheckboxChange={() => setWithAnswer(!withAnswer)}
        handleSelectAll={handleSelectAll}
        allSelected={allSelected}
      />
    </div>
  );
};

export default Questionaire;

import {
  ImageElementType,
  ImageElementVIT,
  ImageElement,
} from "../util/references";
import QuestionAnswer from "./QuestionAnswer";

interface QuestionItemProps {
  image: ImageElementType;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function QuestionItem({
  image,
  checked,
  onChange,
}: QuestionItemProps) {
  // const isElementCBSE = (
  //   element: ImageElement | ImageElementVIT
  // ): element is ImageElement => {
  //   return (element as ImageElement).Subject !== undefined;
  // };

  const isElementVIT = (
    element: ImageElement | ImageElementVIT
  ): element is ImageElementVIT => {
    return (element as ImageElementVIT).Assessment_Type !== undefined;
  };

  return (
    <div className='question font-monospace'>
      <div className='checkboxContainer'>
        <input
          type='checkbox'
          name='selected_questions'
          onChange={(e) => onChange(e.target.checked)}
          checked={checked}
        />
        <span className='fw-bold ps-2'>
          <span>Question Id:{image.Question_ID}</span>
          {isElementVIT(image) && (
            <>
              {", "}
              <span>Assessment:{image.Assessment_Type}</span>
              {", "}
              <span>Module:{image.Module} </span>
            </>
          )}
        </span>
      </div>
      {"Question_text" in image ? (
        <p className='m-2'>{image.Question_text}</p>
      ) : null}
      <QuestionAnswer
        Question_URL={image.Question_URL}
        Answer_URL={image.Answer_URL}
        Question_ID={image.Question_ID.toString()}
      />
    </div>
  );
}

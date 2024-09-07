import React, { useState } from "react";

interface QuestionAnswerProps {
  Question_URL: string | null;
  Answer_URL: string | null;
  Question_ID: string;
}

const QuestionAnswer: React.FC<QuestionAnswerProps> = ({
  Question_URL,
  Answer_URL,
  Question_ID,
}: QuestionAnswerProps) => {
  const [seeAnswer, setSeeAnswer] = useState(false);
  return (
    <div>
      {Question_URL !== null && <img src={Question_URL} alt={Question_ID} />}
      {Answer_URL !== null && (
        <div>
          <button
            className={`btn px-4 gap-3 m-1 ubLightSm qbButtons ${
              seeAnswer ? "ubRedBg" : "ubGreenBg"
            }`}
            style={{ display: "block" }}
            onClick={(e) => {
              e.preventDefault();
              setSeeAnswer(!seeAnswer);
            }}
          >
            {seeAnswer ? "Hide Answer" : "See Answer"}
          </button>
          {seeAnswer && <img src={Answer_URL} alt={Question_ID} />}
        </div>
      )}
    </div>
  );
};

export default QuestionAnswer;

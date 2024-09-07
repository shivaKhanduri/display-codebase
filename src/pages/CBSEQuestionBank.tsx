import React, { useState, useEffect } from "react";
import Questionaire from "../components/Questionaire";
import { ImageElement } from "../util/references";
import FilterForm from "../components/FilterForm";
import PlaceHolderScreen from "../components/PlaceHolderScreen";
import LoadingScreen from "../components/LoadingScreen";
import { useQuestionsContext } from "../util/QuestionsContext";
import { ChevronBarLeft, ChevronBarRight } from "react-bootstrap-icons";

export default function CBSEQuestionBank() {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [imageElements, setImageElements] = useState<ImageElement[]>([]);
  const [shouldRender, setShouldRender] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [hideForm, setHideForm] = useState(false);
  const { clearQuestions } = useQuestionsContext();

  useEffect(() => {
    clearQuestions();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowLoading(true);
    try {
      const response = await fetch(`${process.env.API_URL}/getImgList`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          year: selectedYear,
          subject: selectedSubject,
          topic: selectedTopic,
          section: selectedSection,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }
      const data: ImageElement[] = await response.json();
      setImageElements(data);
      setShouldRender(true);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className='mb-5'>
      <div className='d-flex flex-column flex-md-row'>
        <div className={`col-md-4 ubBlueBg ${hideForm ? "sideBarHide" : ""}`}>
          <FilterForm
            onSubmit={handleSubmit}
            onYearChange={setSelectedYear}
            onSubjectChange={setSelectedSubject}
            onTopicChange={setSelectedTopic}
            onSectionChange={setSelectedSection}
          />
        </div>

        <div className='col-md-8 flex-grow-1'>
          <button
            className='sideBarButton ubTheme'
            onClick={(e) => {
              e.preventDefault();

              setHideForm(!hideForm);
            }}
            title='toggle sidebar'
          >
            {hideForm ? (
              <ChevronBarRight size={30} />
            ) : (
              <ChevronBarLeft size={30} />
            )}
          </button>
          <div className='container rounded shadow p-3'>
            {shouldRender ? (
              <Questionaire imageElements={imageElements} />
            ) : showLoading ? (
              <LoadingScreen />
            ) : (
              <PlaceHolderScreen />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

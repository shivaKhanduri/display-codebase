import React, { useState, useEffect } from "react";
import Questionaire from "../components/Questionaire";
import { ImageElementVIT } from "../util/references";
import FilterForm from "../components/FilterFormVIT";
import PlaceHolderScreen from "../components/PlaceHolderScreen";
import LoadingScreen from "../components/LoadingScreen";
import { useQuestionsContext } from "../util/QuestionsContext";
import { ChevronBarLeft, ChevronBarRight } from "react-bootstrap-icons";

export default function CBSEQuestionBank() {
  const [selectedModule, setSelectedModule] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [imageElements, setImageElements] = useState<ImageElementVIT[]>([]);
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
      const response = await fetch(`${process.env.API_URL}/getImgListVIT`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          module: selectedModule,
          subject_category: selectedSubject,
          search_keyword: searchKeyword,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }
      const data: ImageElementVIT[] = await response.json();
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
            onModuleChange={setSelectedModule}
            onSubjectChange={setSelectedSubject}
            onSearchChange={setSearchKeyword}
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

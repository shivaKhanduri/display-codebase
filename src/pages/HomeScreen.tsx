import { Link } from "react-router-dom";
import UnibudPros from "../components/UnibudPros";
import QB_IMAGE from "../assets/new_asset.png";
import STUDENT1 from "../assets/student5.svg";
import "./HomeScreen.css";
import { boxDataReg } from "../util/HomeScreenData";
import AdvantagesGrid from "../components/AdvantagesGrid";
import ContactForm from "../components/ContactForm";
import BoxCarousel from "../components/BoxCarousel";
import { ArrowUpRightCircle } from "react-bootstrap-icons";

export default function HomeScreen() {
  return (
    <div className='px-4 py-5 body'>
      <div className='heroContainer'>
        <img className='d-block mx-auto mb-4' src={STUDENT1} alt='' />
        <div className='text'>
          <h1 className='text-white ubBold'>
            The Only Academic Buddy You'll Ever Need
          </h1>
          <p className='text-white lead mb-4 justify-text ubLight text-left'>
            Your all-in-one academic companion designed to enhance your
            university experience. UniBud provides a comprehensive platform
            where students can access a vast collection of question banks and
            notes tailored to university subjects.
          </p>
          <div className='d-grid gap-2 d-sm-flex justify-content'>
            <Link to='/QuestionBankMenu'>
              <button
                type='button'
                className='btn btn-lg px-4 ubRedBg ubBold qbButtons w-100 pdfSubmitBtn'
              >
                Question Bank <ArrowUpRightCircle />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <UnibudPros
        imgSrc={QB_IMAGE}
        heading={"QuestionBank Benefits and Usability"}
        content={
          "Discover a treasure trove of past-year university exam questions..."
        }
        theme='custom-background'
      />

      <div className='row mx-auto container'>
        <div className='custom-carousel'>
          <BoxCarousel boxes={boxDataReg} />
        </div>
      </div>
      <div className='advgrid'>
        <AdvantagesGrid />
      </div>
      <div className=''>
        <ContactForm />
      </div>
    </div>
  );
}

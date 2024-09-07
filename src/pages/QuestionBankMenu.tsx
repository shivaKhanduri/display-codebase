import { ArrowUpRightCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function QuestionBankMenu() {
  return (
    <div
      className='container d-flex flex-column justify-content-center align-items-center text-center ubBold'
      style={{ minHeight: "80vh" }}
    >
      <h1 className='ubBold'>Question Banks:</h1>
      <div className='d-grid gap-2'>
        <Link
          to='/VITQuestionBank'
          className='btn btn-primary btn-lg ubBlueBg qbButtons'
        >
          VIT Question Bank <ArrowUpRightCircle/>
        </Link>

        <Link
          to='/CBSEQuestionBank'
          className='btn btn-primary btn-lg ubBlueBg qbButtons'
        >
          CBSE Question Bank <ArrowUpRightCircle/>
        </Link>

        <button
          className='btn btn-primary btn-lg ubBlueBg qbButtons'
          disabled={true}
        >
          GEU Question Bank
          <br />
          (coming soon)
        </button>
      </div>
    </div>
  );
}

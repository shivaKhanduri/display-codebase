interface proProps {
  imgSrc: string;
  heading: string;
  content: string;
  theme: string;
}

export default function UnibudPros({
  imgSrc,
  heading,
  content,
  theme,
}: proProps) {
  return (
    <div className={`container rounded-4 shadow mb-5 mt-4 ${theme}`}>
      <div className='row justify-content-center'>
        <div className='col-lg-7'>
          <div className='question-info p-4 pb-0 pt-lg-5'>
            <h1 className='ubBold text-body'>{heading}</h1>
            <p className='ubLight'>{content}</p>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='image-container p-0 mx-lg-4 overflow-hidden'>
            <img
              className='img-fluid'
              src={imgSrc}
              alt='QuestionBank'
              width='890'
              height='500'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

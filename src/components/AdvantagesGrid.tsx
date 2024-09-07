import Box from "./Box";
import { boxDataAdv } from "../util/HomeScreenData";

const AdvantagesGrid = () => {
  const gridStyle = {
    background: "linear-gradient(to right, #fff3cf 50%, #76b9f5 50%)",
    borderRadius: "10px",
    overflow: "hidden",
    padding: "1rem",
  };

  return (
    <div className='container my-5'>
      <h2 className='heading-color ubBold'>Advantages</h2>
      <hr className='text-white pb-4' />
      <div className='row g-4 advCustomBg' style={gridStyle}>
        {boxDataAdv.map((box, index) => (
          <div className='col-lg-4' key={index}>
            <Box
              heading={box.heading}
              className={"text-black d-flex"}
              isAdvantage={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvantagesGrid;

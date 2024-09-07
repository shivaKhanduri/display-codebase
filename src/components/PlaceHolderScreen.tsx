import PLACE_HOLDER_IMG from "../assets/PlaceHolderImg.png";
import PLACE_HOLDER_IMG2 from "../assets/PlaceHolderImg2.png";

export default function PlaceHolderScreen() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        overflow: "hidden", // Ensures image doesn't overflow its parent
      }}
    >
      <picture>
        {/* Use different image sources based on screen size */}
        <source
          media='(max-width: 768px)' // for screens up to 768px width (common for mobile)
          srcSet={PLACE_HOLDER_IMG2}
        />
        <source
          media='(min-width: 769px)' // for screens larger than 768px width
          srcSet={PLACE_HOLDER_IMG}
        />
        {/* Fallback image if browser doesn't support <picture> element */}
        <img
          src={PLACE_HOLDER_IMG}
          alt='Loading...'
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </picture>
    </div>
  );
}

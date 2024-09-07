import LOAD_GIF from "../assets/LoadingGif.gif";

export default function LoadingScreen() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80svh",
      }}
    >
      <img
        src={LOAD_GIF}
        alt='Loading...'
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
}

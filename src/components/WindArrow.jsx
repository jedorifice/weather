import "../CSSFiles/CSSWindArrow.css";

function ShowWindArrow(props) {
  const { windDeg } = props;
  // console.log(windDeg);

  return (
    <>
      <img
        src="./assets/windArrow.png"
        alt={`An arrow pointing ${windDeg} degrees clockwise from south`}
        style={{ transform: `rotate(${windDeg}deg)` }}
      ></img>
    </>
  );
}

export default ShowWindArrow;

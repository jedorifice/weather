// import "../CSSFiles/CSSTopArea.css";
import React from "react";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

function ShowBiggerTextCurve(props) {
  const biggerCurveSVG = useRef();

  useEffect(() => {
    gsap.to(biggerCurveSVG.current, {
      rotation: 360,
      transformOrigin: "50% 50%",
      ease: "none",
      repeat: -1,
      duration: 15,
    });
  });

  return (
    <>
      <svg viewBox="0 0 400 400" className="background curve">
        <path
          ref={biggerCurveSVG}
          id="biggerCurve"
          d=" M 150 113 A 120 120 0 1 1 123 136"
          className="notVisible"
        />

        <text>
          <textPath
            textAnchor="middle"
            startOffset="50%"
            alignmentBaseline="hanging"
            href="#biggerCurve"
            className="topCurveText"
          >
            currently:
          </textPath>
        </text>
      </svg>
    </>
  );
}

export default ShowBiggerTextCurve;

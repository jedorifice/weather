import "../CSSFiles/CSSTopArea.css";
import React from "react";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

function ShowMainTextCurve(props) {
  const mainCurveSVG = useRef();

  useEffect(() => {
    gsap.to(mainCurveSVG.current, {
      rotation: 360,
      transformOrigin: "50% 50%",
      ease: "none",
      repeat: -1,
      duration: 15,
    });
  });

  return (
    <>
      <svg
        // width="100vw"
        // height="100vw"
        viewBox="0 0 400 400"
        className="background"
      >
        <path
          ref={mainCurveSVG}
          id="topCurve"
          d=" M 150 113 A 100 100 0 1 1 123 136"
          className="notVisible curve"
        />

        <text>
          <textPath
            textAnchor="middle"
            startOffset="50%"
            alignmentBaseline="hanging"
            // textLength="70%"
            href="#topCurve"
            className="topCurveText"
          >
            {props.text}
          </textPath>
        </text>
      </svg>
    </>
  );
}

export default ShowMainTextCurve;

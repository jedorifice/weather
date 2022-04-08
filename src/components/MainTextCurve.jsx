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
      duration: 10,
    });
  });

  return (
    <>
      <svg viewBox="22 8 200 200" className="background">
        <path
          ref={mainCurveSVG}
          id="topCurve"
          d=" M 41 106 A 80 80 190 1 1 41 109"
          className="notVisible"
        />

        <text>
          <textPath
            textAnchor="middle"
            startOffset="50%"
            alignmentBaseline="hanging"
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

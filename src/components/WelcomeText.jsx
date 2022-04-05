import "../CSSFiles/CSSTopArea.css";
import React from "react";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

function ShowWelcomeText(props) {
  const mainCurveSVG = useRef();

  useEffect(() => {
    gsap.to(mainCurveSVG.current, {
      rotation: 360,
      transformOrigin: "50% 50%",
      ease: "none",
      repeat: -1,
      duration: 7,
    });
  });

  return (
    <>
      {/* <section className="topAreaParent mainCurve background"> */}
      <svg
        width="100vw"
        height="100vw"
        viewBox="0 0 400 400"
        id="headerSVG"
        className="topAreaChild background"
      >
        <path
          ref={mainCurveSVG}
          id="topCurve"
          d=" M 150 113 A 100 100 0 1 1 123 136"
          className="notVisible"
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
      {/* </section> */}
    </>
  );
}

export default ShowWelcomeText;

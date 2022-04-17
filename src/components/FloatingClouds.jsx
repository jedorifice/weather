import React from "react";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import "../CSSFiles/CSSFloatingClouds.css";

function ShowFloatingClouds(props) {
  const cloud = useRef();
  // ref={cloud}

  // useEffect(() => {
  //   gsap
  //     .to(cloud.current, {
  //       x: (e, target) => `-${window.innerWidth + target.offsetWidth}`,
  //       duration: gsap.utils.random(10, 20),
  //       ease: "none",
  //       stagger: {
  //         repeat: -1,
  //         each: gsap.utils.random(2, 8),
  //       },
  //     })
  //     .progress(0.8);
  // });

  return (
    <>
      <img src="../../public/assets/roundCloud.png" alt="A round cloud" />
      <img
        src="https://flyclipart.com/thumb2/water-drop-clipart-hd-215627.png"
        alt="A round cloud"
      />
    </>
  );
}
export default ShowFloatingClouds;

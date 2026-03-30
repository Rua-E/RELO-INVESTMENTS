import { useState, useEffect } from "react";
import "./style.css";
import BackgroundLines from "../BackgroundLines";
import WorkCard from "../WorkCard";
import ScrambleText from "../ScrambleText";
import ParaWriting from "../ParaWriting";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import SKINSTRIC from "../../assets/Images/SKINSTRIC_AL_IMAGE.png";
import ultraverse from "../../assets/Images/Ultraverse.png";
import Brainwave from "../../assets/Images/Brainwave.png";

export default function Projects() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleComplete = () => {
    setHasAnimated(true);
  };

  useEffect(() => {
    // Start animation when the component is in view
    if (inView && !hasAnimated) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const works = [
    {
      client: "Business Address",
      year: "2026",
      // img: SKINSTRIC,
      title: "Baltimore, MD 21201",
      detail: "",
      url: "https://www.google.com/maps/place/20+S+Charles+St+403+2725,+Baltimore,+MD+21201/@39.2884564,-76.6181132,17z/data=!3m1!4b1!4m5!3m4!1s0x89c8049fd3dea891:0xe35076b151dd6983!8m2!3d39.2884564!4d-76.6155436?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      client: "Email",
      year: "*Preferred*",
      // img: Brainwave,
      title: "rua.el.o@relo-investments.com",
      detail: "",
      // url: "",
    },
    {
      client: "Phone Number",
      year: "M-F 9am-5pm",
      // img: ultraverse,
      title: "(443) 599 - 6235",
      detail: "",
      // url: "",
    },
  ];

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section ref={ref} className="projects" id="info">
      <BackgroundLines />
      <div className="background--glow"></div>

      <div className="projects--grid">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={opacityVariant}
          transition={{ duration: 1, delay: 0.5 }}
          className="projects--grid--title"
        >
          <h5 className="theme--text">
            <ScrambleText shuffle delay={0.5}>
              04
            </ScrambleText>{" "}
            <span className="hash">{"//"}</span>{" "}
            <ScrambleText shuffle delay={0.5}>
              Where to find us.
            </ScrambleText>
          </h5>
        </motion.div>

        <div className="projects--grid--content">
          <div className="projects--grid--content--heading">
            <h2>
              <ParaWriting
                stagger={0.08}
                text={"Business "}
                sec={"Information"}
              />
            </h2>
          </div>
          <div className="projects--grid--content--works">
            {works.map((item, index) => {
              return (
                <WorkCard
                  item={item}
                  key={index}
                  // delay={0.1 * index + 1}
                  // controls={controls}
                />
              );
            })}
          </div>
        </div>

        {/* <motion.div
          initial="hidden"
          animate={controls}
          variants={opacityVariant}
          transition={{ duration: 1, delay: 1 }}
          onAnimationComplete={() => handleComplete()}
          className="projects--grid--detail"
        >
          <p className="theme--detail">
            <ScrambleText delay={1}>
              Discover a curated portfolio of projects where each line of code
              tells a story of problem-solving, creativity, and technical
              finesse.
            </ScrambleText>
          </p>
        </motion.div> */}
      </div>
    </section>
  );
}

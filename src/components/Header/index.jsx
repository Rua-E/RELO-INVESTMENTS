import "./style.css";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import ScrambleText from "../ScrambleText";
import NavMenu from "../NavMenu";
import BackgroundLines from "../BackgroundLines";
import Button from "../Button";
import Time from "../Time";
import TextWriting from "../TextWriting";

import MenuIcon from "../../assets/Icon/menu.svg";
import backdrop from "../../assets/relo-backdrop.mp4";
import ArrowUpRightIcon from "../../assets/Icon/arrow-up-right.svg";
import RuaResume from "../../assets/Resume/RESUME_AUG_11.pdf";
import File from "../../assets/Icon/file.svg";
import LOGO from "../../assets/LOGO/relo-logo.jpg";

export default function Header() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleComplete = () => {
    setHasAnimated(true);
  };

  useEffect(() => {
    // Start animation when the component is in view
    if (inView && !hasAnimated) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const nameVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 20,
        duration: 1.5,
        delay: 2.1,
      },
    },
  };

  const opacityVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const blurVariants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  };

  const handleMenuToggle = () => {
    console.log("toggle");
    setMenuVisible((prev) => !prev);
  };

  return (
    <header ref={ref}>
      <img
        src={LOGO}
        alt="Brand Icon"
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          width: "50px",
          borderRadius: "50%",
          objectFit: "cover",
          height: "auto",
          zIndex: 9999,
          pointerEvents: "none",
          backgroundColor: "rgba(0, 112, 255, 0.4)", // Adjust the 0.4 for more/less blue
          mixBlendMode: "screen", // This "lights up" the image with blue
        }}
      />
      <NavMenu isVisible={menuVisible} toggleFunc={handleMenuToggle} />
      <BackgroundLines />
      <NavMenu />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={blurVariants}
        transition={{ duration: 1, delay: 0.5 }}
        className="header--menuBtn"
      >
        <h3>
          <a href="#services">
            <ScrambleText shuffle delay={0.5}>
              SERVICES
            </ScrambleText>
          </a>
          <span className="header--hash">{"//"}</span>
          <a href="#info">
            <ScrambleText shuffle delay={0.5}>
              BUSINESS INFORMATION
            </ScrambleText>
          </a>
          <span className="header--hash">{"//"}</span>
          <a href="#connect">
            <ScrambleText shuffle delay={0.5}>
              CONTACT US
            </ScrambleText>
          </a>
        </h3>
      </motion.div>

      {/* <motion.div
        initial="hidden"
        animate={controls}
        variants={blurVariants}
        transition={{ duration: 1, delay: 0.5 }}
        className="header--top"
      >
        <h3 className="flex items-center gap-1">
          <a href="#tech">
            <ScrambleText shuffle delay={0.5}>
              TECH
            </ScrambleText>
          </a>
          <span className="header--hash">{"//"}</span>

          <a href="#resume">
            <ScrambleText shuffle delay={1}>
              RESUME
            </ScrambleText>
          </a>
          <a
            href={RuaResume}
            target={"_blank"}
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src={File}
              alt="Resume Icon"
              style={{
                width: "15px",
                height: "15px",
                position: "relative",
                top: "4.5px",
                marginLeft: "4px",
              }}
              className="inline-block align-middle"
            ></img>
          </a>
          <span className="header--hash">{"//"}</span>
          <a href="#connect">
            <ScrambleText shuffle delay={1.5}>
              CONTACT
            </ScrambleText>
          </a>
        </h3>
      </motion.div> */}

      <motion.div
        initial="hidden"
        animate={controls}
        variants={blurVariants}
        transition={{ duration: 1, delay: 4 }}
        className="header--bottom"
      >
        <div>
          <h5>
            <ScrambleText shuffle delay={4} className="highlight">
              ABOUT US
            </ScrambleText>{" "}
            <span className="header--hash">{"//"}</span>
          </h5>
          <p className="theme--detail">
            <ScrambleText shuffle delay={4}>
              We believe that wholesale is about more than just
              transactions—it’s about relationships. Our goal is to support your
              brand’s long-term vision by acting as a dedicated steward of your
              products. By honoring your brand values and diligently upholding
              MAP policies, we ensure a stable and profitable marketplace for
              the long haul. Partner with RELO Investments for growth that
              respects your legacy.
            </ScrambleText>
          </p>
        </div>

        <h3 className="min-w-0">
          <Time delay={4.0} />
        </h3>
      </motion.div>

      {/* <motion.div
        initial="hidden"
        animate={controls}
        variants={blurVariants}
        transition={{ duration: 1, delay: 4.5 }}
        className="header--center"
        onAnimationComplete={() => handleComplete()}
      >
        <a href="connect" className="connect--button">
          <Button label="Let’s connect" icon={ArrowUpRightIcon} />
        </a>
      </motion.div> */}

      <motion.div
        initial="hidden"
        animate={controls}
        variants={blurVariants}
        transition={{ duration: 1, delay: 2.85 }}
        className="header--right"
      >
        <h3>
          <span className="header--hash">{"//"}</span>{" "}
          <ScrambleText shuffle delay={2.9}>
            scroll
          </ScrambleText>{" "}
          <span className="header--hash">{"//"}</span>
        </h3>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={opacityVariants}
        transition={{ duration: 2 }}
        className="header--video"
      >
        <video src={backdrop} autoPlay loop muted></video>
      </motion.div>

      <h1 className="header--name">
        <div style={{ lineHeight: "0.9", marginTop: "-50px" }}>
          <span style={{ fontSize: "3.5rem", fontWeight: "bold" }}>
            <TextWriting controls={controls} text={"RELO"} noblink />
          </span>
          <br />
          <span style={{ fontSize: "3.5rem", fontWeight: "bold" }}>
            <TextWriting controls={controls} text={"INVESTMENTS"} noblink />
          </span>
        </div>
        <br />
        <div style={{ lineHeight: "0.9", marginTop: "-80px" }}>
          <TextWriting controls={controls} text={"---"} noblink />
        </div>

        <div style={{ lineHeight: "0.9", marginTop: "-40px" }}>
          <span style={{ fontSize: "1.0rem", opacity: 0.8 }}>
            <TextWriting
              controls={controls}
              delay={1.3}
              text={"COMPOUNDING YOUR"}
              noblink
            />
          </span>
        </div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={nameVariants}
          className="header--name--sec"
        >
          <span
            style={{
              fontSize: "2.0rem",
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            <TextWriting
              controls={controls}
              delay={0}
              text={"POTENTIAL"}
              noblink
            />
          </span>
          <div className="header--name--border">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </motion.div>
      </h1>
    </header>
  );
}

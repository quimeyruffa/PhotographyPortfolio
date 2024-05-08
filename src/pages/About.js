import React, { useContext } from "react";
import WomanImg from "../img/about/woman.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";
const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        <div
          className=" flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 
        text-center lg:text-left lg:pt-16"
        >
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">About me</h1>
            <p className="mb-12 max-w-sm">
              Lorem ipsum dolor sit amet. Eos dignissimos molestiae et internos
              distinctio aut fuga soluta et inventore distinctio est voluptates
              illum.
              <b> Eos iste </b>
              corporis sit possimus officiis hic illum repellendus quo dolore
              enim aut odio voluptates vel quam suscipit.
              <br />
              <br />
              Lorem ipsum dolor sit amet. Eos dignissimos molestiae et internos
              distinctio aut fuga soluta et inventore distinctio est voluptates
              illum. Eos iste corporis sit possimus officiis hic illum
              repellendus quo dolore enim aut odio voluptates vel quam suscipit.
            </p>

            <Link to="/portfolio" className="btn">
              View my work
            </Link>
          </motion.div>

          <div className="flex-1 max-h-96 lg:max-h-max order- lg:order-none overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={transition1}
              src={WomanImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

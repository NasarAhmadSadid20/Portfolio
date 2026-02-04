
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Send } from "lucide-react";
import { Home } from "lucide-react";
import { arrow01, arrow02, home, lines } from "../constants/assets";
import {leftSideVariants, rightSideVariants} from "../constants/motion"


const Hero = () => {
    return <section
        id="home"
        className="flex min-h-screen items-center"
    >
        <div className="container flex flex-col-reverse items-start justify-between gap-y-12 md:flex-row md:items-center md:flex-grow">
            {/*.................. Left side ...................*/}
            <motion.div
                variants={leftSideVariants}
                initial="hidden"
                animate="visible"
                
            className="relative flex flex-col items-center text-center gap-y-7 md:items-start md:text-start md:w-1/2">
                <img src={arrow01}
                    alt="arrow"
                    className="absolute right-0 top-0  hidden w-16 -translate-y-full sm:block lg:w-20 "



                />

                <div className="flex flex-col gap-y-4">
                    <h1 className="text-h3 font-bold text-gray-90">
                        Hi, I'm <span className="text-secondary-50">Nasar Ahmad Sadid</span>
                    </h1>
                    <h2 className="text-h3 text-gray-90">I'm {"  "}
                        <span className="text-primary-50">
                            <Typewriter
                                cursor
                                cursorBlinking
                                delaySpeed={1300}
                                deleteSpeed={25}
                                typeSpeed={80}
                                loop={0}
                                words={[
                                    "Front-end developer",
                                    "Web designer"
                                ]}
                            />
                        </span>
                    </h2>
                    <p className="text-lg font-normal text-gray-50">
                        Deeply passionate about transforming innovative
                        ideas into captivating digital experiences.
                    </p>
                </div>

                <Link to="/contact" className="btn-primary w-fit">
                    Contact <Send />
                </Link>
                <img
                    src={arrow02}
                    alt="arrow"
                    className="absolute -bottom-4 left-0 hidden w-12 translate-y-full md:block lg:w-16"
                />
            </motion.div>

            {/*................... Right side ................... */}
            <motion.div
             variants={rightSideVariants}
                initial="hidden"
                animate="visible"
            className="relative flex w-full justify-center md:w-1/2 md:justify-end">
                <img
                    src={home}
                    alt="Nasar Ahmad Sadid"
                    className="w-[100%] sm:w-[90%] md:w-full md:max-w-[90%] lg:max-w-[94%] h-auto rounded-full"/>
                    <img 
                    src={lines} 
                    alt="lines"
                    className="absolute -top-3 w-10 md:w-14"
                    
                    
                    
                    />
            </motion.div>
        </div>
    </section>;
};

export default Hero;
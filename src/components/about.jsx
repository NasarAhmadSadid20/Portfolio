import { motion } from "framer-motion";
import { Download } from "lucide-react";
import SectionTitle from "./sectionTitle";
import { about, rhombus } from "../constants/assets"
import { leftSideVariants, rightSideVariants } from "../constants/motion";

const About = () => {
    return <section id="about" className="relative bg-[url(/src/assets/topography.svg)] bg-cover bg-no-repeat">
        <div className="container relative flex flex-col items-center gap-y-9 py-8 md:py-12">
            <img
                src={rhombus}
                alt="rhombus"
                className="absolute right-[5%] -z-10 w-8 md:w-12"
            />
            <SectionTitle title="ABOUT ME" subtitle="Who I Am" />
            
<div className="flex flex-col md:flex-row justify-between w-full items-center gap-8 md:gap-12">              
                <motion.div
                    variants={leftSideVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "0px 0px -200px 0px", once: true }}
                    className="w-full md:w-5/12 flex justify-center order-1 md:order-1"
                >
                    <img
                        src={about}
                        alt="Nasar Ahmad Sadid"
                        className="aspect-square w-full max-w-[88%] md:max-w-[75%] rounded-xl"
                    />
                </motion.div>

                {/* Right Side - متن */}
                <motion.div
                    variants={rightSideVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "0px 0px -200px 0px", once: true }}
                    className="flex flex-col items-center gap-y-5 text-center md:w-1/2 md:items-start md:text-start order-2 md:order-2" 
                >
                    <div className="flex flex-col gap-y-3">
                        <p className="text-xl md:text-2xl lg:text-3xlg font-semibold text-gray-90">
                            Hi, I'm Nasar Ahmad Sadid
                        </p>
                        <p className="text-base md:text-lg font-normal text-gray-50">
                            A Web designer and front-end developer. I
                            specialize in creating websites that are not
                            only visually appealing but also highly
                            functional. My passion for web design and
                            development drives me to stay updated with the
                            latest trends and technologies, ensuring that my
                            clients receive top-notch solutions.
                        </p>
                    </div>

                    <a href="cv.pdf" download="cv.pdf"
                        className="btn-primary w-fit mt-4">
                        Download CV <Download className="w-4 h-4 ml-2" />
                    </a>
                </motion.div>
            </div>
        </div>
    </section>
};

export default About;
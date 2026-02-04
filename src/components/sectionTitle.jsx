import { motion } from "framer-motion";
import { centerVariants } from "../constants/motion";
import PropTypes from "prop-types";

const SectionTitle = ({ title, subtitle }) => {
    return (
        <motion.div
            variants={centerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-y-3 text-center"
        >
            <p className="text-lg font-medium text-primary-50">{title}</p>
            <h3 className="text-h3 text-gray-90">{subtitle}</h3>
        </motion.div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

export default SectionTitle;

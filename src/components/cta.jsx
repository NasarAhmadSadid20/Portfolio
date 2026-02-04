import { Link, Send } from "lucide-react";
import { arrow03, draw } from "../constants/assets";
import { cta } from "../constants/assets";

const CTA = () => {
    return <div className="flex min-h-[400px] max-h-[300px] items-center bg-secondary-50 bg-[url(/src/assets/sun-tornado.svg)] bg-no-repeat py-4 overflow-hidden">
            <div className="container flex items-center justify-between">
                <div className="relative flex w-[500px] flex-col gap-5">
                    <h3 className="text-h3 text-gray-10">Ready to Start Your Project? Let's Talk</h3>
                    <p className="text-base font-normal text-gray-10">
                        I'd love to hear about your project and how I can help.
                        Get in touch with me today, and let's create somthing
                        extraordinary. 
                    </p>
                    <a href="/contact" className="btn-primary w-fit flex items-center gap-2">
                    Let's Talk <Send size={18}/>
                    </a>
                    <img src={arrow03} alt="arrow3"
                    className="absolute -bottom-[15%] -left-[10%] hidden es:block"/>
                </div>
                <div className="relative hidden md:block">
                    <img src={draw} alt="draw" className="absolute -left-16"/>
                    <img src={cta} alt="Nasar Ahmad Sadid" className="w-[400px] h-auto ml-auto mt-[78px] -mb-20" />

                </div>
            </div>

    </div>;
};

export default CTA;
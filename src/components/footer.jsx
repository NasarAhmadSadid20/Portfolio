import { Github, Linkedin, Facebook, Send } from "lucide-react";

const Footer = () => {
    return (
        <footer>
            <div className="container flex flex-col gap-8 py-sec-sm">
                <div className="flex flex-wrap justify-center gap-6 sm:justify-between">

                    {/* name + icon */}
                    <div className="flex w-fit items-center gap-x-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg">
                            <svg
                                className="h-5 w-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </div>

                        <p>Nasar Ahmad Sadid</p>
                    </div>

                    <ul className="flex flex-wrap items-center justify-center gap-4">
                        <li className="btn-primary size-fit p-2">
                            <a href="https://www.linkedin.com/in/nasar-ahmad-sadid-07b349352" target="_blank" rel="noopener noreferrer">
                                <Linkedin />
                            </a>
                        </li>

                        <li className="btn-primary size-fit p-2">
                            <a href="https://github.com/NasarAhmadSadid20" target="_blank" rel="noopener noreferrer">
                                <Github />
                            </a>
                        </li>

                      <li className="btn-primary size-fit p-2">
    <a href="https://t.me/FrontendCode2025" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
        <Send />
    </a>
</li>


                        <li className="btn-primary size-fit p-2">
                            <a href="https://www.facebook.com/profile.php?id=100090161719600" target="_blank" rel="noopener noreferrer">
                                <Facebook />
                            </a>
                        </li>
                    </ul>

                </div>
                <hr className="border-gray-30"/>
                <div>
                    <p className="text-center text-lg font-medium text-gray-90">
                        &copy;2026&nbsp;
                        <span className="text-primary-50">Front-end Code</span>
                        &nbsp; All Rights Reserved 
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

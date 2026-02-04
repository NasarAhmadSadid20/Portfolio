import { About, CTA, Hero, Portfolio, Services, Testimonials } from "../components";

const Home = () => {
    return <main className="overflow-hidden">
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Testimonials />
        <CTA />
    </main>;
};

export default Home;

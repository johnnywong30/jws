import { Separator } from "@/components/ui/separator";
import AboutData from "@/constants/about";

const Intro = () => {
  return (
    <section className="flex flex-col gap-2 sm:px-12">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-pretty text-center sm:text-left">
        {AboutData.introData.name}
      </h1>
      <h2 className="text-xl sm:text-2xl font-normal text-pretty text-center sm:text-left">
        {AboutData.introData.role}
      </h2>
      <p className="text-base text-pretty text-center sm:text-left max-w-72 px-2 sm:px-0">
        {AboutData.introData.description}
      </p>
      <Separator className="sm:hidden my-2" orientation="horizontal" />
    </section>
  );
};

const About = () => {
  return (
    <section className="flex flex-col gap-3 px-4 sm:px-12 max-w-xl text-pretty font-light">
      <p>
        I am a developer passionate about building powerful analytical platforms
        to transform data into actionable insights. With a focus on scalable
        architecture, intuitive design, and high performance, I thrive on
        creating tools that empower users to make well-informed decisions.
      </p>
      <p>
        Currently, I'm a{" "}
        <span className="font-semibold">{AboutData.companyData.role}</span> at{" "}
        <a
          className="font-semibold text-pink-600"
          href={AboutData.companyData.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {AboutData.companyData.name}
        </a>
        , where {AboutData.companyData.description}
      </p>
      <p>
        I primarily have experience in start-up environments, where I am tasked
        with developing systems and applications from the ground up. I've picked
        up and implemented a wide range of technologies and to help speed up the
        development process for both teammates and myself in several of the
        start-ups I have joined.
      </p>
      <p>
        In my spare time, I enjoy going to the gym, taking a walk on the pier or
        the beach, and cooking new recipes.
      </p>
    </section>
  );
};

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row justify-around gap-2 lg:gap-8 h-full w-full grow px-4 sm:py-2 my-2">
      <Intro />
      <About />
    </main>
  );
}

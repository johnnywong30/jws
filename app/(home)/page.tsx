import { Separator } from "@/components/ui/separator";
import { Tag } from "@/components/ui/tag";
import AboutData from "@/constants/about";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
      <Button
        asChild
        variant="secondary"
        className="w-1/2 font-semibold mx-auto sm:mx-0"
      >
        <Link href="/contact">Get in Touch</Link>
      </Button>
      <Separator className="lg:hidden my-2" orientation="horizontal" />
    </section>
  );
};

const About = () => {
  return (
    <section className="flex flex-col gap-3 px-4 sm:px-12 max-w-xl text-pretty font-light lg:ml-auto">
      <p>
        I am a developer passionate about building powerful analytical platforms
        to transform data into actionable insights. With a focus on scalable
        architecture, intuitive design, and high performance, I thrive on
        creating tools that empower users to make well-informed decisions.
      </p>
      <p>
        Currently, I'm a{" "}
        <span className="font-semibold">{AboutData.companyData.role}</span> at{" "}
        <Link
          className="font-semibold text-pink-600"
          href={AboutData.companyData.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {AboutData.companyData.name}
        </Link>
        , where {AboutData.companyData.description}
      </p>
      <p>
        I primarily have experience in start-up environments, where I have
        developed systems and applications from the ground up. I always seek to
        learn new technologies and have consistently sped up the development
        process for both teammates and myself in several of the start-ups I've
        worked at.
      </p>
      <p>
        In my spare time, I enjoy going to the gym, taking a walk on the pier or
        the beach, and cooking new recipes.
      </p>
    </section>
  );
};

const TechnicalSkills = () => {
  return (
    <>
      <Separator className="my-2 lg:hidden" orientation="horizontal" />
      <section className="flex flex-col lg:col-span-2 sm:px-12 gap-3 md:gap-6 md:pb-6 max-h-[30rem] sm:max-h-none overflow-y-auto">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-pretty px-4 sm:px-0 col-span-2 w-full my-2 lg:my-4">
          Technical Skills
        </h3>
        <div className="flex flex-col md:flex-row gap-4 md:gap-0">
          <h4 className="text-xl md:min-w-96 md:leading-6 px-5 sm:px-1">
            Programming Languages
          </h4>
          <ul className="flex flex-row flex-wrap w-full gap-2 px-3 sm:px-0 items-center leading-6">
            {AboutData.languages.map((language, index) => (
              <Tag key={`language-${index}`}>{language.name}</Tag>
            ))}
          </ul>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-0">
          <h4 className="text-xl md:min-w-96 md:leading-6 px-5 sm:px-1">
            Technologies/Frameworks
          </h4>
          <ul className="flex flex-row flex-wrap w-full gap-2 px-3 sm:px-0 items-center leading-6">
            {AboutData.technologies.map((technology, index) => (
              <Tag key={`technology-${index}`}>{technology.name}</Tag>
            ))}
          </ul>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-0">
          <h4 className="text-xl md:min-w-96 md:leading-6 px-5 sm:px-1">
            Databases
          </h4>
          <ul className="flex flex-row flex-wrap w-full gap-2 px-3 sm:px-0 items-center leading-6">
            {AboutData.databases.map((database, index) => (
              <Tag key={`database-${index}`}>{database.name}</Tag>
            ))}
          </ul>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-0">
          <h4 className="text-xl md:min-w-96 md:leading-6 px-5 sm:px-1">
            Developer Tools
          </h4>
          <ul className="flex flex-row flex-wrap w-full gap-2 px-3 sm:px-0 items-center leading-6">
            {AboutData.tools.map((tool, index) => (
              <Tag key={`tool-${index}`}>{tool.name}</Tag>
            ))}
          </ul>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-0">
          <h4 className="text-xl md:min-w-96 md:leading-6 px-5 sm:px-1">
            Cloud Technologies (AWS)
          </h4>
          <ul className="flex flex-row flex-wrap w-full gap-2 px-3 sm:px-0 items-center leading-6">
            {AboutData.awsSkills.map((awsSkill, index) => (
              <Tag key={`awsSkill-${index}`}>{awsSkill.name}</Tag>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default function Home() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 justify-around gap-2 h-full w-full grow px-4 sm:py-2 py-2 lg:px-32">
      <Intro />
      <About />
      <TechnicalSkills />
    </main>
  );
}

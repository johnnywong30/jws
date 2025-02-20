import ExperienceCard from "@/components/cards/experience";
import ExperienceData from "@/constants/experiences";

export default function Experiences() {
  // TODO: pagination in the future
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center w-full h-full grow my-2">
      {ExperienceData.map((exp) => {
        return <ExperienceCard experience={exp} key={exp.id} />;
      })}
    </main>
  );
}

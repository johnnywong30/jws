import { Experience } from "@/typing/experiences";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { epochToDate } from "@/lib/time";
import { Tag } from "@/components/ui/tag";

import React, { useMemo } from "react";

type Props = {
  experience: Experience;
};

const ExperienceCard = (props: Props) => {
  const startDate = useMemo(() => {
    const dateObj = epochToDate(props.experience.startDate);
    return `${dateObj.shortMonth} ${dateObj.year}`;
  }, [props]);
  const endDate = useMemo(() => {
    if (!props.experience?.endDate) {
      return "Present";
    } else {
      const dateObj = epochToDate(props.experience.endDate!);
      return `${dateObj.shortMonth} ${dateObj.year}`;
    }
  }, [props]);

  return (
    <Card className="w-4/5 sm:w-3/5 scale-[97.5%] hover:scale-100 transition-transform duration-300 ease-in-out transform shadow-md">
      <CardHeader className="grid grid-cols-1 gap-1 px-1 sm:px-6">
        <CardTitle className="text-pretty px-0 text-center sm:text-left">
          <h2>{props.experience.title}</h2>
        </CardTitle>
        <Separator orientation="horizontal" />
        <CardDescription className="flex flex-col sm:flex-row justify-between px-2 sm:px-0 gap-1 items-center">
          <div className="flex flex-row gap-2 text-pretty">
            <h3 className="sm:w-36">
              <a
                href={props.experience.companyLink}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
              >
                {props.experience.company}
              </a>
            </h3>
          </div>
          <h4>
            {startDate} - {endDate}
          </h4>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline font-medium">
              Experience
            </AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-col gap-0.5 list-inside">
                {props.experience.bullets.map((bullet, i) => {
                  return (
                    <li
                      key={`${props.experience.company}-bullet-${i}`}
                      className="list-disc text-pretty"
                    >
                      {bullet}
                    </li>
                  );
                })}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 items-start">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline font-medium">
              Technologies
            </AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-row flex-wrap gap-3">
                {props.experience.technologies.map((tech, i) => {
                  return (
                    <Tag key={`${props.experience.company}-tech-${i}`}>
                      {tech}
                    </Tag>
                  );
                })}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardFooter>
    </Card>
  );
};

export default ExperienceCard;

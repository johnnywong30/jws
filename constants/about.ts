type IntroData = {
  name: string;
  role: string;
  description: string;
};

type CompanyData = {
  name: string;
  url: string;
  role: string;
  description: string;
};

type Skill = {
  name: string;
};

const introData: IntroData = {
  name: "Johnny Wong",
  role: "Software Engineer",
  description:
    "I engineer systems from 0 to 1 to drive impactful societal change.",
};

const companyData: CompanyData = {
  name: "Xonar",
  url: "https://www.xonar.com/",
  role: "Full Stack Software Engineer",
  description:
    "I am responsible for the development of UI components, backend services, CI/CD pipelines, and deployment infrastructure for web and mobile applications.",
};

const languages: Skill[] = [
  { name: "Python" },
  { name: "TypeScript" },
  { name: "JavaScript" },
  { name: "Go" },
  { name: "Java" },
  { name: "HTML" },
  { name: "CSS" },
];

const technologies: Skill[] = [
  { name: "React" },
  { name: "React Native" },
  { name: "Redux" },
  { name: "TailwindCSS" },
  { name: "FastAPI" },
  { name: "Flask" },
  { name: "Django" },
  { name: "RabbitMQ" },
  { name: "Celery" },
  { name: "MQTT" },
  { name: "IoT" },
  { name: "Next.js" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "GraphQL" },
  { name: "Apollo" },
  { name: "Vercel" },
  { name: "Heroku" },
];

const databases: Skill[] = [
  { name: "MongoDB" },
  { name: "Redis" },
  { name: "PostgreSQL" },
  { name: "MySQL" },
  { name: "SQLite3" },
  { name: "DynamoDB" },
  { name: "Firebase" },
  { name: "SQL" },
  { name: "NoSQL" },
];

const tools: Skill[] = [
  { name: "Git" },
  { name: "Linux" },
  { name: "Unix" },
  { name: "Docker" },
  { name: "Grafana" },
  { name: "Jenkins" },
  { name: "Playwright" },
  { name: "Pytest" },
  { name: "Jira" },
  { name: "Slack" },
  { name: "Confluence" },
];

const awsSkills: Skill[] = [
  { name: "S3" },
  { name: "EC2" },
  { name: "ECS" },
  { name: "ECR" },
  { name: "Boto3" },
  { name: "Rekognition" },
  { name: "Lambda" },
  { name: "SQS" },
  { name: "SNS" },
  { name: "SES" },
  { name: "IoT" },
  { name: "API Gateway" },
];

export default {
  introData,
  companyData,
  languages,
  technologies,
  databases,
  tools,
  awsSkills,
};

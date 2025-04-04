import { Experience } from "@/typing/experiences";

// TODO: throw these into Supabase

const xnr: Experience = {
  id: 4,
  title: "Full Stack Software Engineer",
  company: "Xonar Technology Inc.",
  bullets: [
    "Built a customer portal for device monitoring using React, Python, and GraphQL to reduce customer support tickets by 20%",
    "Deployed web app for digital ticketing using facial recognition, React, and Python to reduce patron check-in time by 50%",
    "Automated Docker image builds, containerized app deployments, and AWS Lambdas via Jenkins CI/CD pipelines",
    "Designed cloud IoT network to modify devices using MQTT in real-time and reduce software update times by 40%",
    "Implemented real-time data transport using WebSockets from devices to cloud platform to enhance venue security experiences",
    "Effectively communicated with cross-functional teams to participate in over 10 customer facing on-site demos",
  ],
  startDate: 1701061200000,
  companyLink: "https://www.xonar.com/",
  deleted: false,
  salary: 5,
  benefits: [
    "Medical Insurance",
    "Vision Insurance",
    "Dental Insurance",
    "18 PTO days (accrued 1.5 days/month; to be used for sick days as well.)",
  ],
  technologies: [
    "React",
    "React Native",
    "Next.js",
    "TailwindCSS",
    "Vercel",
    "GraphQL",
    "Apollo",
    "Python",
    "FastAPI",
    "MongoDB",
    "AWS",
    "Docker",
    "MQTT",
    "IoT",
    "Websockets",
    "Socket.io",
  ],
  locationType: "on-site",
};

const cx: Experience = {
  id: 3,
  title: "Automation Engineer",
  company: "Code-X",
  bullets: [
    "Orchestrated hybrid cloud networking systems leveraging AWS and Azure SDKs to secure TCP packet transfer",
    "Containerized Python platform to distribute workloads across multiple regions and improve product scalability",
    "Automated deployment of AWS VPCs and Security Groups to prevent malicious traffic on EC2 instances across multiple regions",
    "Architected cloud agnostic distributed system to process thousands of concurrent AWS and Azure REST API requests",
    "Increased deployment speed of VPCs, Security Groups, and EC2 instances by queuing concurrent Celery tasks in RabbitMQ",
    "Monitored Docker containers using AWS CloudWatch and Grafana to aggregate logs and display network traffic metrics",
  ],
  startDate: 1686801600000,
  endDate: 1698811200000,
  companyLink: "https://teamcode-x.com/",
  deleted: false,
  salary: 5,
  benefits: [
    "Fully Paid Medical Insurance",
    "Fully Paid Vision Insurance",
    "Fully Paid Dental Insurance",
    "Unlimited PTO",
  ],
  technologies: [
    "Python",
    "FastAPI",
    "AWS",
    "Azure",
    "Docker",
    "Redis",
    "Celery",
    "RabbitMQ",
    "MongoDB",
  ],
  locationType: "on-site",
};

const ubs: Experience = {
  id: 2,
  title: "Software Engineer Intern",
  company: "UBS",
  bullets: [
    "Developed a React page for clients to manage their accounts on the UBS OLS banking platform",
    "Built Java microservices to query data from MySQL databases",
    "Pitched a React self-service client platform for mortgage product offerings in an internal competition to win 2nd place",
    "Automated Docker image installations via a Python tool to integrate external vendor software into internal platforms",
    "Designed a Python tool to auto-generate Splunk index queries and output desired production issue logs via keywords",
  ],
  startDate: 1654056000000,
  endDate: 1660536000000,
  companyLink: "https://www.ubs.com/us/en.html",
  deleted: false,
  salary: 5,
  benefits: [],
  technologies: ["Python", "Docker", "React", "Java"],
  locationType: "hybrid",
};

const mih: Experience = {
  id: 1,
  title: "Software Engineer Intern",
  company: "MakeItHappen.nyc",
  bullets: [
    "Engineered React pages to render survey responses from a Redux store to improve accessibility for doctors by 20%",
    "Served Lambda functions in AWS API Gateways to upload large image files and fetch data from DynamoDB",
    "Created RESTful API routes using Express and Node.js to parse order requests and send dynamic invoice emails",
    "Communicated directly with clients to understand customer needs and discuss solutions on a daily basis",
  ],
  startDate: 1621051200000,
  endDate: 1629000000000,
  companyLink: "https://makeithappen.nyc/",
  deleted: false,
  salary: 5,
  benefits: [],
  technologies: [
    "React",
    "Redux",
    "Node.js",
    "Express.js",
    "AWS",
    "Lambda",
    "DynamoDB",
    "MySQL",
    "PostgreSQL",
  ],
  locationType: "remote",
};

const experienceData: Experience[] = [xnr, cx, ubs, mih];

export default experienceData;

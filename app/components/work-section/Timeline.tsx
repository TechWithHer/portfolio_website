"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/company1.png",
    jobTitle: "DevOps Engineer",
    company: "Strenure",
    jobType: "Full-time",
    duration: "Feb 2024 - Present",
    stuffIDid: [
      "Designed and maintained CI/CD pipelines using GitHub Actions and Jenkins, reducing deployment time and improving release reliability across multiple environments",
      "Containerized applications with Docker and deployed on AWS (EC2, ECS), enabling scalable, consistent, and portable infrastructure",
      "Provisioned and managed cloud infrastructure using Terraform and CloudFormation, ensuring repeatable, version-controlled deployments",
      "Supported Kubernetes-based deployments and implemented GitOps workflows with Argo CD, enhancing release consistency and rollback efficiency",
      "Automated deployment processes and implemented monitoring solutions using Prometheus and Grafana, improving system observability and reducing manual intervention",
    ],
  },
  {
    companyImg: "/company1.png",
    jobTitle: "IT Analyst",
    company: "MindStrength Inc.",
    jobType: "Full-time",
    duration: " March, 2021 - January,2024",
    stuffIDid: [
      "Collaborated with cross-functional teams (engineering, QA, operations) to support application delivery and system workflows",
      "Translated technical requirements into actionable tasks, contributing to efficient sprint execution",
      "Worked closely with engineers on environment setup, build processes, and testing workflows",
      "Contributed to deployment planning and system design discussions, focusing on scalability and reliability",
      "Supported improvements in application performance, contributing to 80% faster load times and 12% cost optimization",
      "Assisted in aligning development and operations practices, enabling smoother release cycles and delivery processes",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-gradient-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

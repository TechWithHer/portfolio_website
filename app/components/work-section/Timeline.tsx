"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/company1.png",
    jobTitle: "Cloud DevOps Engineer",
    company: "Strenure",
    jobType: "Full-time",
    duration: "Feb 2024 - Present",
    stuffIDid: [
      "Managed enterprise Amazon S3 environments supporting multiple business units with encryption, versioning, lifecycle management, and Cross-Region Replication.",
      "Optimized cloud storage costs by implementing Amazon S3 lifecycle policies and storage class transitions.",
      "Provisioned AWS infrastructure using reusable Terraform modules and Infrastructure as Code practices.",
      "Built and maintained CI/CD pipelines using Jenkins and GitHub Actions to automate deployment workflows.",
      "Automated operational processes using AWS Lambda integrated with Amazon SNS and SQS.",
      "Implemented IAM users, roles, and least-privilege access controls to strengthen cloud security.",
      "Configured Amazon CloudWatch metrics, alarms, and dashboards to improve infrastructure monitoring and operational visibility.",
      "Supported production deployments, infrastructure changes, and incident resolution in collaboration with development teams.",
      "Prepared cloud infrastructure documentation, operational runbooks, and deployment procedures.",
    ],
  },
  {
    companyImg: "/company1.png",
    jobTitle: "Jr Cloud Engineer",
    company: "MindStrength Inc.",
    jobType: "Full-time",
    duration: " March, 2021 - January,2024",
    stuffIDid: [
      "Supported AWS cloud operations involving Amazon S3, IAM, CloudWatch, and EC2 administration.",
      "Implemented Amazon S3 lifecycle policies to optimize storage utilization and archive inactive content.",
      "Assisted with IAM user, group, and policy administration following least-privilege principles.",
      "Supported infrastructure provisioning, release coordination, and deployment validation within Agile delivery teams.",
      "Maintained cloud operational documentation, deployment guides, and governance standards.",
      "Standardized documentation templates and knowledge repositories across multiple projects."
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

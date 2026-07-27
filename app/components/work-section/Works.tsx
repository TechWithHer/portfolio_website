import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
         {
          title: "Enterprise Amazon S3 Platform",
          gitLink: "https://github.com/TechWithHer/cloudmart-enterprise-storage-platform",
          about:
            "Designed and deployed secure enterprise S3 platform managing 500+ GB of sensitive data across 8 business units with encryption (AES-256), versioning, Object Lock, HTTPS-only policies, and CloudTrail auditing for compliance\n• Implemented intelligent lifecycle management and storage class optimization, achieving 60% cost reduction through automated tiering to S3 Glacier\n• Designed and implemented a disaster recovery strategy using Amazon S3 Cross-Region Replication (Singapore → Sydney), documenting recovery procedures and validating replicated objects to improve storage resilience and support defined RTO/RPO objectives.\n• Developed Lambda-based event-driven workflows with SNS/SQS integration, eliminating 5 hours/week of manual infrastructure tasks and enabling real-time forensic analysis capabilities",
          stack: ["AWS S3", "Eventbridge", "Lambda", "SNS", "SQS", "CloudTrail", "CloudWatch", "Lifecycle Rules", "S3 Replication", "Object Lock", "Terraform", "IAM Management"],
          img: "/project.png",
      },
      {
        title: "Multi-Environment Infrastructure using Terraform",
        gitLink: "https://github.com/TechWithHer/industrial-air-quality-platform-mvp",
        about:
          "Architected and implemented standardized Infrastructure-as-Code (IaC) framework using Terraform modules and CloudFormation templates for multi-environment (Dev, Staging, Prod) with remote state management via DynamoDB\n• Automated infrastructure provisioning and deployments using GitHub Actions CI/CD pipelines with approval gates, reducing environment spin-up time from days to under 30 minutes\n• Established centralized governance with CloudWatch monitoring, SNS notifications\n• Achieved zero configuration drift across 3+ environments through automated drift detection and improved infrastructure reliability, significantly reducing production incidents",
        stack: ["Terraform", "AWS", "GitHub Actions", "CloudFormation", "CloudWatch", "SNS", "DynamoDB"],
        img: "/project.png",
      },
      {
        title: "Secure CI/CD Pipeline with Shift-Left Security (Various Projects)",
        gitLink: "https://github.com/TechWithHer/",
        about:
          "Built CI/CD pipelines using GitHub Actions and Jenkins. Integrated SonarQube and Trivy into deployment workflows to improve code quality and security validation. Automated application build, testing, and deployment processes. Improved deployment consistency through Infrastructure as Code and pipeline automation.",
        stack: ["GitHub Actions", "Jenkins", "Terraform", "Docker", "SonarQube", "Trivy", "AWS" ],
        img: "/project.png",
      }
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          about={work.about}
          stack={work.stack}
        />
      ))} 

      <Timeline />
    </section>
  );
}

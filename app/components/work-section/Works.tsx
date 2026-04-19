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
          title: "oil-price-dashboard",
          gitLink: "https://github.com/TechWithHer/",
          about:
            "Built a cloud-native data pipeline to solve the lack of real-time and historical visibility into fluctuating oil prices. Designed an event-driven architecture using AWS Lambda, EventBridge, and S3 for automated ingestion and storage, with Athena for querying. Delivered a lightweight dashboard using JavaScript and Chart.js with CI/CD via GitHub Actions. Achieved ~99% pipeline reliability, reduced manual data handling by 90%, and enabled near real-time insights for better decision-making.",
          stack: ["aws", "lambda", "s3", "eventbridge", "athena", "github actions", "python", "javascript", "chart.js"],
          img: "/project.png",
      },
      {
        title: "cicd-pipeline-automation",
        gitLink: "https://github.com/TechWithHer/",
        about:
          "Engineered reusable CI/CD pipelines to eliminate inconsistent deployments and manual release overhead. Implemented workflows using GitHub Actions and Jenkins, integrated Docker-based containerization, and automated deployments on AWS (EC2/S3). Reduced deployment time by ~70%, improved release consistency, and minimized manual intervention across environments.",
        stack: ["github actions", "jenkins", "docker", "aws", "ec2", "s3", "git"],
        img: "/project.png",
      },
      {
        title: "ecommerce-gitops-platform",
        gitLink: "https://github.com/TechWithHer/",
        about:
          "Implemented a fully automated GitOps-based deployment system to address inconsistencies in manual Kubernetes deployments. Configured Argo CD for continuous delivery, deployed workloads using Helm charts, and integrated NGINX Ingress with Cert-Manager for automated TLS. Achieved self-healing deployments, 100% version-controlled infrastructure, and eliminated manual release overhead.",
        stack: ["kubernetes", "argo cd", "helm", "nginx ingress", "cert-manager", "docker", "github"],
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

import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";

const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
       Building systems that scale, heal, ship fast without security tradeoffs.
      </AnimatedTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            DevOps Engineer with 2+ years of hands-on experience, backed by 8+ years across IT spanning technical writing, project management, and system monitoring. 
            This diverse foundation allows me to approach DevOps beyond just tools—focusing on clarity, system reliability, and end-to-end delivery efficiency. I specialize in building scalable, production-grade systems that prioritize automation, observability, and performance.
          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            I focus on infrastructure that doesn’t just work—but adapts. From CI/CD pipelines to cloud-native environments, I bridge the gap between development velocity and operational stability.
            With a systems-thinking mindset, I optimize not just pipelines and infrastructure, but the entire software delivery lifecycle.
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
            I’m particularly interested in the future of DevOps—intelligent automation, self-healing systems, and infrastructure that anticipates failure before it happens—and I actively build towards that direction.
            Want to know more? Here&apos;s <br className="hidden md:block" />
            <Link
              href="https://drive.google.com/drive/folders/1WpA0ztuHqx7mwZDyMPl-HPruEFyoxs0-?usp=sharing"
              target="_blank" 
              rel="noopener noreferrer"
              className="underline"
              >
              Explore My Work in Detail
            </Link>
            .
          </AnimatedBody>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Cloud & Infrastructure
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              AWS, Docker, Kubernetes, Terraform, Ansible, Linux, Shell Scripting, Infrastructure as Code (IaC).
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              CI/CD & Automation
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Jenkins, GitHub Actions, GitLab CI, ArgoCD, Python, Bash, Configuration Management.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Monitoring & Security
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Prometheus, Grafana, Security Best Practices, SSL/TLS, IAM.
            </AnimatedBody>
          </div>
        </div>
      </div>
    </section>
  );
}

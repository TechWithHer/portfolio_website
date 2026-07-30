"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const companies = [
  { name: "IBM", logo: "/companies/ibm.png" },
  { name: "TCS", logo: "/companies/tcs.png" },
  { name: "Accenture", logo: "/companies/accenture.png" },
  { name: "AWS", logo: "/companies/aws.png" },
  { name: "Client 1", logo: "/companies/client1.png" },
  { name: "Client 2", logo: "/companies/client2.png" },
];

export default function Companies() {
  return (
    <section id="companies" className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

      <h2 className="text-4xl font-bold mb-4">
        Organizations I&apos;ve Worked With
      </h2>          

        <p className="text-gray-400 max-w-2xl mx-auto mb-14">
          Through full-time roles and independent consulting engagements.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center">

          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={140}
                height={70}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
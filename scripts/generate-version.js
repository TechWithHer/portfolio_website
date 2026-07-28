const fs = require("fs");
const { execSync } = require("child_process");

const packageJson = require("../package.json");

const metadata = {
  application: "Ayushi Portfolio",
  version: packageJson.version,
  commit: execSync("git rev-parse --short HEAD").toString().trim(),
  branch: execSync("git branch --show-current").toString().trim(),
  buildTime: new Date().toISOString(),
  environment: "Production",
  ci: "GitHub Actions",
  cd: "Hostinger Git Deployment",
  containerized: true,
  securityScan: "Trivy"
};

fs.writeFileSync(
  "./public/version.json",
  JSON.stringify(metadata, null, 2)
);

console.log("✅ version.json generated");

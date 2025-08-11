import React from "react";

const workflowSteps = [
  {
    step: "Step 1",
    title: "Requirement Gathering",
    description:
      "We make gathering project requirements, resources, and information a top priority to ensure a successful start to every project.",
  },
  {
    step: "Step 2",
    title: "UI/UX Design",
    description:
      "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.",
  },
  {
    step: "Step 3",
    title: "Prototype",
    description:
      "We deliver a prototype after designing, which our development team uses to bring your product to life.",
  },
  {
    step: "Step 4",
    title: "Development",
    description:
      "Development of mobile application, web platform & blockchain started using latest tools and technologies with transparency.",
  },
  {
    step: "Step 5",
    title: "Deployment",
    description:
      "Smoothly launch your product with our efficient deployment process using the latest tools and technologies.",
  },
  {
    step: "Step 6",
    title: "Support & Maintenance",
    description:
      "Our company offers you all support and the team is always ready to answer every query after deployment.",
  },
];
const Workflow = () => {
  return (
    <section>
      <h2>Process We Follow</h2>
      <ol>
        {workflowSteps.map((step) => (
          <li key={step.step}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Workflow;

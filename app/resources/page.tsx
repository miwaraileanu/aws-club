"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const resources = [
  {
    category: "Beginner",
    items: [
      { title: "AWS Fundamentals", link: "https://aws.amazon.com/getting-started/" },
      { title: "AWS Free Tier", link: "https://aws.amazon.com/free/" },
      { title: "Getting Started with EC2", link: "https://docs.aws.amazon.com/ec2/" },
    ],
  },
  {
    category: "Intermediate",
    items: [
      { title: "Building Microservices on AWS", link: "https://docs.aws.amazon.com/whitepapers/" },
      { title: "AWS Lambda Best Practices", link: "https://docs.aws.amazon.com/lambda/" },
      { title: "Database Design on AWS", link: "https://docs.aws.amazon.com/rds/" },
    ],
  },
  {
    category: "Advanced",
    items: [
      { title: "AWS Solutions Architecture", link: "https://aws.amazon.com/architecture/" },
      { title: "AWS Security Best Practices", link: "https://docs.aws.amazon.com/security/" },
      { title: "Cost Optimization Strategies", link: "https://aws.amazon.com/cost-optimization/" },
    ],
  },
]

const tools = [
  { name: "AWS CLI", description: "Command-line interface for AWS services", link: "https://docs.aws.amazon.com/cli/" },
  {
    name: "AWS SAM",
    description: "Serverless Application Model for faster development",
    link: "https://aws.amazon.com/serverless/sam/",
  },
  {
    name: "AWS CDK",
    description: "Cloud Development Kit for infrastructure as code",
    link: "https://docs.aws.amazon.com/cdk/",
  },
  { name: "Terraform", description: "Infrastructure as code tool for AWS", link: "https://www.terraform.io/" },
]

export default function Resources() {
  return (
    <>
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">Learning Resources</h1>
          <p className="text-gray-300 text-lg">Curated resources to help you master AWS and cloud computing.</p>
        </div>
      </section>

      {/* Learning Roadmap */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">AWS Learning Roadmap</h2>

          <Accordion type="single" collapsible className="space-y-4">
            {resources.map((resource) => (
              <AccordionItem
                key={resource.category}
                value={resource.category}
                className="bg-slate-800 border-slate-700 rounded-lg px-6"
              >
                <AccordionTrigger className="text-lg font-bold text-cyan-400 hover:text-cyan-300">
                  {resource.category} Level
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 mt-4">
                    {resource.items.map((item) => (
                      <li key={item.title}>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"
                        >
                          <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Tools & CLI */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Essential Tools</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool) => (
              <Card
                key={tool.name}
                className="bg-slate-900 border-slate-700 p-6 hover:border-cyan-500 transition-colors"
              >
                <h3 className="text-xl font-bold mb-2 text-cyan-400">{tool.name}</h3>
                <p className="text-gray-400 mb-4">{tool.description}</p>
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 font-medium text-sm"
                >
                  Learn More →
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GridSection } from "@/components/grid-section"
import { VantaBackground } from "@/components/vanta-background"
import { User } from "lucide-react"

export default function TeamPage() {
  const teamMembers = [
    {
      image: "/professional-headshot-diverse-person-smiling.jpg",
      title: "Chris Anich",
      description: "Club President • Cloud Architecture Enthusiast • AWS Certified Solutions Architect",
      icon: <User className="w-6 h-6 text-white" />,
    },
    {
      image: "/professional-headshot-diverse-person-confident.jpg",
      title: "Sarah Murphy",
      description: "Vice President • DevOps Specialist • AWS Certified Developer",
      icon: <User className="w-6 h-6 text-white" />,
    },
    {
      image: "/professional-headshot-diverse-person-friendly.jpg",
      title: "Michael O'Brien",
      description: "Technical Lead • Machine Learning Focus • AWS Certified Data Analytics",
      icon: <User className="w-6 h-6 text-white" />,
    },
    {
      image: "/professional-headshot-diverse-person-enthusiastic.jpg",
      title: "Emma Kelly",
      description: "Events Coordinator • Community Builder • AWS Cloud Practitioner",
      icon: <User className="w-6 h-6 text-white" />,
    },
    {
      image: "/professional-headshot-diverse-person-professional.jpg",
      title: "David Chen",
      description: "Workshop Organizer • Security Specialist • AWS Certified Security",
      icon: <User className="w-6 h-6 text-white" />,
    },
    {
      image: "/professional-headshot-diverse-person-approachable.jpg",
      title: "Aoife Walsh",
      description: "Social Media Manager • Content Creator • AWS Cloud Practitioner",
      icon: <User className="w-6 h-6 text-white" />,
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Meet Our <span className="text-primary text-glow">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Passionate leaders and volunteers driving cloud computing education in Ireland.
          </p>
        </div>
      </section>

      <GridSection items={teamMembers} columns={3} />
      <Footer />
    </main>
  )
}

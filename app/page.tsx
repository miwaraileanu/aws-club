import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { GridSection } from "@/components/grid-section"
import { Users, Target, Mail } from "lucide-react"

export default function Home() {
  const gridItems = [
    {
      image: "/diverse-students-collaborating-on-cloud-computing-.jpg",
      title: "About Us",
      description:
        "Help students and professionals master cloud computing through workshops, projects and peer learning. Based at CCT College Dublin. Free and open to all.",
      icon: <Users className="w-6 h-6 text-white" />,
    },
    {
      image: "/futuristic-cloud-computing-technology-visualizatio.jpg",
      title: "Our Vision",
      description:
        "Ensure cloud skills remain accessible to everyone. Connect, inspire, and prepare members for a cloud-first job market.",
      icon: <Target className="w-6 h-6 text-white" />,
    },
    {
      image: "/team-of-diverse-ambassadors-and-volunteers.jpg",
      title: "Our Team",
      description:
        "Lead the club with ambassadors and volunteers. Members help shape the direction with ideas and energy.",
      icon: <Users className="w-6 h-6 text-white" />,
    },
    {
      image: "/email-icon-purple-glow-modern.jpg",
      title: "Contact",
      description: "Email: chrisanich@linux.com",
      icon: <Mail className="w-6 h-6 text-white" />,
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <GridSection items={gridItems} columns={2} />
      <Footer />
    </main>
  )
}

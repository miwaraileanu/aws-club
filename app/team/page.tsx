import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GridSection } from "@/components/grid-section"
import { User } from "lucide-react"
import Image from "next/image"

export default function TeamPage() {
  const teamMembers = [
    {
      image: "/professional-headshot-diverse-person-smiling.jpg",
      title: "Chris Anich",
      description: "Club Founder",
      icon: <User className="w-6 h-6 text-white" />,
    },
    {
      image: "/professional-headshot-diverse-person-smiling.jpg",
      title: "Pablo ",
      description: "Club Lider",
      icon: <User className="w-6 h-6 text-white" />,
    },
    {
      image: "/team/mihail.jpeg",
      title: "Mihail Raileanu",
      description: "Front-end Developer • CCT Student",
      icon: <User className="w-6 h-6 text-white" />,
    },
    {
      image: "/team/juan.jpg",
      title: "Juan Yebenes",
      description: "CCT Student",
      icon: <User className="w-6 h-6 text-white" />,
    },
    {
      image: "/team/matt.jpg",
      title: "Matthew Lawlor-Altomare",
      description: "CCT Student",
      icon: <User className="w-6 h-6 text-white" />,
    },{
      image: "/team/adam.jpg",
      title: "Adam Scannell",
      description: "CCT Student",
      icon: <User className="w-6 h-6 text-white" />,
    },
  
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        {/* Hero Image with Gradient Mask */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/team.png"
              alt="Team"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient mask that fades to bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
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

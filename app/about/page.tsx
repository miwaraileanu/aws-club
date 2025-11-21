import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GridSection } from "@/components/grid-section"
import { Target, Users, Lightbulb, Award } from "lucide-react"

export default function AboutPage() {
  const aboutItems = [
    {
      image: "/students-learning-cloud-computing-in-workshop.jpg",
      title: "Who We Are",
      description:
        "AWS Community Club Ireland is a student-led organization based at CCT College Dublin. We help students and professionals master cloud computing through hands-on workshops, real-world projects, and collaborative peer learning.",
      icon: <Users className="w-6 h-6 text-white" />,
    },
    {
      image: "/cloud-computing-future-technology.jpg",
      title: "Our Mission",
      description:
        "To ensure cloud skills remain accessible to everyone in Ireland. We connect, inspire, and prepare members for a cloud-first job market by providing free, high-quality education and networking opportunities.",
      icon: <Target className="w-6 h-6 text-white" />,
    },
    {
      image: "/innovative-cloud-projects-and-workshops.jpg",
      title: "What We Do",
      description:
        "We organize regular workshops, hackathons, and cloud certification study groups. Members work on real AWS projects, learn from industry experts, and build practical skills that employers value.",
      icon: <Lightbulb className="w-6 h-6 text-white" />,
    },
    {
      image: "/community-achievements-and-success.jpg",
      title: "Our Impact",
      description:
        "Since our founding, we've helped hundreds of students and professionals gain cloud certifications and land jobs at top tech companies. Our community continues to grow stronger every day.",
      icon: <Award className="w-6 h-6 text-white" />,
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/20 via-background to-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            About <span className="text-primary text-glow">Our Community</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Building Ireland's premier cloud computing community, one member at a time.
          </p>
        </div>
      </section>

      <GridSection items={aboutItems} columns={2} />
      <Footer />
    </main>
  )
}

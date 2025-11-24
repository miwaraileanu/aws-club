import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-950 to-slate-900 border-t border-cyan-500/20 py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 particle-bg opacity-30"></div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-white mb-4 text-lg bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AWS Community Dublin
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A free community for cloud enthusiasts. Learn, build, and grow together in cloud computing and AWS
              services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4 text-lg">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                Email:{" "}
                <a href="mailto:info@awscommunity.ie" className="text-cyan-400 hover:text-cyan-300 transition-colors hover:underline">
                  info@awscommunity.ie
                </a>
              </li>
              <li>Join us on Slack for daily discussions</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2025 AWS Community Dublin. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 inline-block">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 inline-block">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 inline-block">
                Slack
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

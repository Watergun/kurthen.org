export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold">Leonhard Kurthen</h3>
            <p className="mt-2 text-gray-400">
              IT-Security Consulting for Software Development
            </p>
          </div>
          <div className="flex justify-start md:justify-end space-x-6">
            <a
              href="https://linkedin.com/in/leonhard-kurthen"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/watergun"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Leonhard Kurthen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

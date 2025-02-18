'use client'
import { motion } from 'framer-motion'

const placeholderCases = [
  {
    title: "Coming Soon",
    description: "Exciting case studies from recent projects will be featured here. Check back soon!",
    tags: [],
    status: "In Progress"
  },
  {
    title: "Project Under NDA",
    description: "Details about this successful security implementation will be shared upon client approval.",
    tags: ["Application Hardening", "Secure Configuration"],
    status: "Pending"
  }
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Case Studies
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Real-world examples of security solutions in action
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {placeholderCases.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {caseStudy.title}
                </h3>
                <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                  {caseStudy.status}
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                {caseStudy.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {caseStudy.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

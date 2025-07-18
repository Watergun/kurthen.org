'use client'
import { motion } from 'framer-motion'
import { 
  ShieldCheckIcon, 
  MagnifyingGlassIcon, 
  CodeBracketIcon,
  CloudIcon,
} from '@heroicons/react/24/outline'

const services = [
  {
    title: 'Software Architecture Security Audits',
    description: 'Comprehensive analysis of your software architecture and build infrastructure to identify potential security risks when shipping your software products.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Source Code Reviews',
    description: 'Detailed analysis of your source code to identify security flaws and implement best practices.',
    icon: CodeBracketIcon,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Services
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Comprehensive security solutions for your software development lifecycle
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 mb-4 rounded-lg bg-blue-100 p-2">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 

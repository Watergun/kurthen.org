'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Securing Your Software Development Journey
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Expert IT-Security consulting for modern software development.
            Protecting your applications from concept to deployment.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#contact"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Schedule a Consultation
            </a>
            <a href="#services" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
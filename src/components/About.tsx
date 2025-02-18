'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src="/images/profile.jpg" // You'll need to add your profile image
              alt="Leonhard Kurthen"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              About Me
            </h2>
            <p className="text-lg leading-8 text-gray-600 mb-4">
              With extensive experience in IT security and software development, I specialize in helping companies build secure, reliable software from the ground up.
            </p>
            <p className="text-lg leading-8 text-gray-600 mb-6">
              My approach combines deep technical expertise with practical business understanding, ensuring that security measures enhance rather than hinder your development process.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-900">Experience</h3>
                <p className="text-gray-600">6+ Years</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-900">Projects</h3>
                <p className="text-gray-600">Various projects in different industries</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

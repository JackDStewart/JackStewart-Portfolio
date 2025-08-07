import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="font-space-grotesk font-bold text-4xl sm:text-5xl lg:text-6xl text-text-light dark:text-text-dark mb-6">
              Hi, I&apos;m{' '}
              <span className="text-primary">Jack Stewart</span>
            </h1>
            <p className="font-inter text-xl sm:text-2xl text-text-light dark:text-text-dark mb-8 max-w-3xl mx-auto">
              Software Engineer passionate about building innovative solutions and creating impactful user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/projects"
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-hover text-white font-inter font-medium rounded-lg transition-colors"
              >
                View My Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center px-6 py-3 bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark hover:bg-gray-100 dark:hover:bg-gray-800 font-inter font-medium rounded-lg border border-gray-200 dark:border-gray-700 transition-colors"
              >
                Download Résumé
                <Download className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-text-light dark:text-text-dark mb-6">
                About Me
              </h2>
              <p className="font-inter text-lg text-text-light dark:text-text-dark mb-6">
                I&apos;m a software engineering student at [Your University] with a passion for full-stack development, 
                machine learning, and creating solutions that make a difference. Currently seeking software 
                engineering internships to further develop my skills and contribute to innovative projects.
              </p>
              <p className="font-inter text-lg text-text-light dark:text-text-dark mb-8">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or collaborating with fellow developers on exciting challenges.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-primary hover:text-primary-hover font-inter font-medium transition-colors"
              >
                Learn More About Me
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8">
              <h3 className="font-space-grotesk font-semibold text-xl text-text-light dark:text-text-dark mb-4">
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-4">
                  <h4 className="font-inter font-medium text-text-light dark:text-text-dark mb-2">Frontend</h4>
                  <p className="text-sm text-text-light dark:text-text-dark opacity-80">React, Next.js, TypeScript</p>
                </div>
                <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-4">
                  <h4 className="font-inter font-medium text-text-light dark:text-text-dark mb-2">Backend</h4>
                  <p className="text-sm text-text-light dark:text-text-dark opacity-80">Node.js, Python, SQL</p>
                </div>
                <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-4">
                  <h4 className="font-inter font-medium text-text-light dark:text-text-dark mb-2">Tools</h4>
                  <p className="text-sm text-text-light dark:text-text-dark opacity-80">Git, Docker, AWS</p>
                </div>
                <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-4">
                  <h4 className="font-inter font-medium text-text-light dark:text-text-dark mb-2">Design</h4>
                  <p className="text-sm text-text-light dark:text-text-dark opacity-80">Figma, Tailwind CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-text-light dark:text-text-dark mb-4">
              Featured Projects
            </h2>
            <p className="font-inter text-lg text-text-light dark:text-text-dark max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for software development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Project Placeholder Cards */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="font-space-grotesk font-semibold text-lg text-text-light dark:text-text-dark mb-2">
                Project 1
              </h3>
              <p className="text-text-light dark:text-text-dark opacity-80 mb-4">
                A full-stack web application built with React and Node.js.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">React</span>
                <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">Node.js</span>
              </div>
            </div>
            
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="font-space-grotesk font-semibold text-lg text-text-light dark:text-text-dark mb-2">
                Project 2
              </h3>
              <p className="text-text-light dark:text-text-dark opacity-80 mb-4">
                Machine learning model for data analysis and prediction.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">Python</span>
                <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">TensorFlow</span>
              </div>
            </div>
            
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="font-space-grotesk font-semibold text-lg text-text-light dark:text-text-dark mb-2">
                Project 3
              </h3>
              <p className="text-text-light dark:text-text-dark opacity-80 mb-4">
                Mobile app for task management and productivity.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">React Native</span>
                <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">Firebase</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-hover text-white font-inter font-medium rounded-lg transition-colors"
            >
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-text-light dark:text-text-dark mb-6">
                         Let&apos;s Work Together
          </h2>
          <p className="font-inter text-lg text-text-light dark:text-text-dark mb-8 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-inter font-medium rounded-lg transition-colors"
          >
            Get In Touch
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

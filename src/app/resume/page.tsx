import { Download, FileText, Mail, MapPin, Phone, Globe, Github, Linkedin } from 'lucide-react'

export default function ResumePage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-space-grotesk font-bold text-4xl sm:text-5xl text-text-light dark:text-text-dark mb-6">
            Résumé
          </h1>
          <p className="font-inter text-xl text-text-light dark:text-text-dark max-w-2xl mx-auto">
            Download my résumé to learn more about my experience, skills, and qualifications.
          </p>
        </div>

        {/* Download Section */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-gray-800 p-8 mb-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-space-grotesk font-bold text-2xl text-text-light dark:text-text-dark mb-4">
              Jack Stewart - Software Engineer
            </h2>
            <p className="font-inter text-text-light dark:text-text-dark mb-8 max-w-md mx-auto">
              A comprehensive overview of my education, experience, skills, and projects in software engineering.
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-inter font-medium rounded-lg transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </a>
          </div>
        </div>

        {/* Résumé Preview */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
          <h2 className="font-space-grotesk font-bold text-2xl text-text-light dark:text-text-dark mb-8">
            Résumé Preview
          </h2>

          {/* Contact Information */}
          <div className="mb-8">
            <h3 className="font-space-grotesk font-semibold text-xl text-text-light dark:text-text-dark mb-4">
              Contact Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-inter text-text-light dark:text-text-dark">jack@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-inter text-text-light dark:text-text-dark">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-inter text-text-light dark:text-text-dark">City, State</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-primary" />
                <span className="font-inter text-text-light dark:text-text-dark">jackstewart.dev</span>
              </div>
            </div>
            <div className="flex items-center space-x-6 mt-4">
              <a
                href="https://github.com/jackstewart"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="font-inter">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/jackstewart"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-inter">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h3 className="font-space-grotesk font-semibold text-xl text-text-light dark:text-text-dark mb-4">
              Education
            </h3>
            <div className="bg-bg-light dark:bg-bg-dark rounded-lg p-6">
              <h4 className="font-inter font-semibold text-lg text-text-light dark:text-text-dark">
                Bachelor of Science in Software Engineering
              </h4>
              <p className="font-inter text-text-light dark:text-text-dark opacity-80">
                [Your University] • Expected Graduation: 2025
              </p>
              <p className="font-inter text-text-light dark:text-text-dark mt-2">
                GPA: 3.8/4.0 • Relevant Coursework: Data Structures & Algorithms, Database Systems, 
                Software Engineering, Web Development, Machine Learning, Computer Networks
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h3 className="font-space-grotesk font-semibold text-xl text-text-light dark:text-text-dark mb-4">
              Experience
            </h3>
            <div className="space-y-6">
              <div className="bg-bg-light dark:bg-bg-dark rounded-lg p-6">
                <h4 className="font-inter font-semibold text-lg text-text-light dark:text-text-dark">
                  Freelance Web Developer
                </h4>
                <p className="font-inter text-text-light dark:text-text-dark opacity-80">
                  Self-Employed • 2023 - Present
                </p>
                <ul className="font-inter text-text-light dark:text-text-dark mt-2 space-y-1">
                  <li>• Built custom web applications for clients using React, Next.js, and Node.js</li>
                  <li>• Implemented responsive designs and optimized performance for better user experience</li>
                  <li>• Managed project timelines and communicated with clients throughout development process</li>
                </ul>
              </div>
              <div className="bg-bg-light dark:bg-bg-dark rounded-lg p-6">
                <h4 className="font-inter font-semibold text-lg text-text-light dark:text-text-dark">
                  Open Source Contributor
                </h4>
                <p className="font-inter text-text-light dark:text-text-dark opacity-80">
                  Various Projects • 2022 - Present
                </p>
                <ul className="font-inter text-text-light dark:text-text-dark mt-2 space-y-1">
                  <li>• Contributed to open-source projects on GitHub with focus on bug fixes and features</li>
                  <li>• Collaborated with developers worldwide to improve code quality and documentation</li>
                  <li>• Gained experience with different codebases and development workflows</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h3 className="font-space-grotesk font-semibold text-xl text-text-light dark:text-text-dark mb-4">
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-inter font-semibold text-text-light dark:text-text-dark mb-2">
                  Programming Languages
                </h4>
                <p className="font-inter text-text-light dark:text-text-dark opacity-80">
                  JavaScript, TypeScript, Python, Java, C++, SQL, HTML/CSS
                </p>
              </div>
              <div>
                <h4 className="font-inter font-semibold text-text-light dark:text-text-dark mb-2">
                  Frameworks & Libraries
                </h4>
                <p className="font-inter text-text-light dark:text-text-dark opacity-80">
                  React, Next.js, Node.js, Express.js, React Native, Tailwind CSS
                </p>
              </div>
              <div>
                <h4 className="font-inter font-semibold text-text-light dark:text-text-dark mb-2">
                  Databases & Tools
                </h4>
                <p className="font-inter text-text-light dark:text-text-dark opacity-80">
                  MongoDB, PostgreSQL, Firebase, Git, Docker, AWS, Vercel
                </p>
              </div>
              <div>
                <h4 className="font-inter font-semibold text-text-light dark:text-text-dark mb-2">
                  Other Skills
                </h4>
                <p className="font-inter text-text-light dark:text-text-dark opacity-80">
                  REST APIs, GraphQL, CI/CD, Linux, Agile Development, UI/UX Design
                </p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="font-space-grotesk font-semibold text-xl text-text-light dark:text-text-dark mb-4">
              Notable Projects
            </h3>
            <div className="space-y-4">
              <div className="bg-bg-light dark:bg-bg-dark rounded-lg p-4">
                <h4 className="font-inter font-semibold text-text-light dark:text-text-dark">
                  E-Commerce Platform
                </h4>
                <p className="font-inter text-text-light dark:text-text-dark opacity-80 text-sm">
                  Full-stack web application with React, Node.js, MongoDB, and Stripe integration
                </p>
              </div>
              <div className="bg-bg-light dark:bg-bg-dark rounded-lg p-4">
                <h4 className="font-inter font-semibold text-text-light dark:text-text-dark">
                  Task Management App
                </h4>
                <p className="font-inter text-text-light dark:text-text-dark opacity-80 text-sm">
                  React Native mobile app with real-time synchronization and offline support
                </p>
              </div>
              <div className="bg-bg-light dark:bg-bg-dark rounded-lg p-4">
                <h4 className="font-inter font-semibold text-text-light dark:text-text-dark">
                  Machine Learning Dashboard
                </h4>
                <p className="font-inter text-text-light dark:text-text-dark opacity-80 text-sm">
                  Python-based dashboard for ML model visualization using Streamlit and scikit-learn
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Code, Database, Globe, Smartphone, Zap } from 'lucide-react'

const skills = [
  {
    category: 'Frontend Development',
    icon: Globe,
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Redux', 'React Query']
  },
  {
    category: 'Backend Development',
    icon: Database,
    skills: ['Node.js', 'Python', 'Express.js', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL', 'Firebase']
  },
  {
    category: 'Mobile Development',
    icon: Smartphone,
    skills: ['React Native', 'Expo', 'iOS Development', 'Android Development', 'Mobile UI/UX']
  },
  {
    category: 'DevOps & Tools',
    icon: Zap,
    skills: ['Git', 'GitHub', 'Docker', 'AWS', 'Vercel', 'Netlify', 'CI/CD', 'Linux']
  },
  {
    category: 'Programming Languages',
    icon: Code,
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'SQL', 'HTML/CSS']
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-space-grotesk font-bold text-4xl sm:text-5xl text-text-light dark:text-text-dark mb-6">
            About Me
          </h1>
          <p className="font-inter text-xl text-text-light dark:text-text-dark max-w-3xl mx-auto">
            Software engineering student passionate about creating innovative solutions and learning new technologies.
          </p>
        </div>

        {/* Bio Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-space-grotesk font-bold text-3xl text-text-light dark:text-text-dark mb-6">
                My Journey
              </h2>
              <div className="space-y-4 font-inter text-lg text-text-light dark:text-text-dark">
                                 <p>
                   I&apos;m a software engineering student at [Your University] with a deep passion for technology 
                   and problem-solving. My journey in software development began when I built my first web 
                   application, and since then, I&apos;ve been constantly exploring new technologies and pushing 
                   the boundaries of what I can create.
                 </p>
                                 <p>
                   Currently, I&apos;m focused on full-stack development, machine learning, and mobile app 
                   development. I love working on projects that challenge me and allow me to learn new 
                   skills while creating something meaningful.
                 </p>
                                 <p>
                   When I&apos;m not coding, you can find me contributing to open-source projects, participating 
                   in hackathons, or collaborating with fellow developers on exciting challenges. I believe 
                   in the power of technology to solve real-world problems and make a positive impact.
                 </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8">
              <h3 className="font-space-grotesk font-semibold text-xl text-text-light dark:text-text-dark mb-6">
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="font-inter text-text-light dark:text-text-dark">Currently pursuing Software Engineering degree</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="font-inter text-text-light dark:text-text-dark">Seeking software engineering internships</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="font-inter text-text-light dark:text-text-dark">Passionate about full-stack development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="font-inter text-text-light dark:text-text-dark">Active open-source contributor</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="font-inter text-text-light dark:text-text-dark">Love learning new technologies</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-space-grotesk font-bold text-3xl text-text-light dark:text-text-dark mb-4">
              Skills & Technologies
            </h2>
                           <p className="font-inter text-lg text-text-light dark:text-text-dark max-w-2xl mx-auto">
                 Here&apos;s a comprehensive overview of the technologies and skills I&apos;ve developed through my projects and studies.
               </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 p-6">
                <div className="flex items-center mb-4">
                  <skillGroup.icon className="w-6 h-6 text-primary mr-3" />
                  <h3 className="font-space-grotesk font-semibold text-lg text-text-light dark:text-text-dark">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Experience */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-space-grotesk font-bold text-3xl text-text-light dark:text-text-dark mb-4">
              Education & Experience
            </h2>
            <p className="font-inter text-lg text-text-light dark:text-text-dark max-w-2xl mx-auto">
              My academic background and relevant experience in software development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 p-8">
              <h3 className="font-space-grotesk font-semibold text-xl text-text-light dark:text-text-dark mb-6">
                Education
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-inter font-semibold text-lg text-text-light dark:text-text-dark">
                    Bachelor of Science in Software Engineering
                  </h4>
                  <p className="font-inter text-text-light dark:text-text-dark opacity-80">
                    [Your University]
                  </p>
                  <p className="font-inter text-sm text-text-light dark:text-text-dark opacity-60">
                    2022 - Present
                  </p>
                  <p className="font-inter text-text-light dark:text-text-dark mt-2">
                    Relevant coursework: Data Structures & Algorithms, Database Systems, 
                    Software Engineering, Web Development, Machine Learning
                  </p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 p-8">
              <h3 className="font-space-grotesk font-semibold text-xl text-text-light dark:text-text-dark mb-6">
                Experience
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-inter font-semibold text-lg text-text-light dark:text-text-dark">
                    Freelance Web Developer
                  </h4>
                  <p className="font-inter text-text-light dark:text-text-dark opacity-80">
                    Self-Employed
                  </p>
                  <p className="font-inter text-sm text-text-light dark:text-text-dark opacity-60">
                    2023 - Present
                  </p>
                  <p className="font-inter text-text-light dark:text-text-dark mt-2">
                    Building custom web applications for clients using modern technologies 
                    like React, Next.js, and Node.js.
                  </p>
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-lg text-text-light dark:text-text-dark">
                    Open Source Contributor
                  </h4>
                  <p className="font-inter text-text-light dark:text-text-dark opacity-80">
                    Various Projects
                  </p>
                  <p className="font-inter text-sm text-text-light dark:text-text-dark opacity-60">
                    2022 - Present
                  </p>
                  <p className="font-inter text-text-light dark:text-text-dark mt-2">
                    Contributing to open-source projects on GitHub, focusing on bug fixes, 
                    feature implementations, and documentation improvements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Goals Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="font-space-grotesk font-bold text-3xl text-text-light dark:text-text-dark mb-4">
              My Goals
            </h2>
                           <p className="font-inter text-lg text-text-light dark:text-text-dark max-w-2xl mx-auto">
                 What I&apos;m working towards and what drives me in my software engineering journey.
               </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-space-grotesk font-semibold text-xl text-text-light dark:text-text-dark mb-3">
                Secure Internship
              </h3>
              <p className="font-inter text-text-light dark:text-text-dark">
                Looking for software engineering internships to gain real-world experience 
                and contribute to meaningful projects.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-space-grotesk font-semibold text-xl text-text-light dark:text-text-dark mb-3">
                Build Impactful Projects
              </h3>
              <p className="font-inter text-text-light dark:text-text-dark">
                Create applications that solve real problems and make a positive impact 
                on people&apos;s lives.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-space-grotesk font-semibold text-xl text-text-light dark:text-text-dark mb-3">
                Continuous Learning
              </h3>
              <p className="font-inter text-text-light dark:text-text-dark">
                Stay updated with the latest technologies and best practices in software development.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

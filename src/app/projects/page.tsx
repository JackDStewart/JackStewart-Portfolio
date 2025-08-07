'use client'

import { useState } from 'react'
import { ProjectCard } from '@/components/ProjectCard'
import { Tag } from '@/components/Tag'
import { projects, getAllTags } from '@/data/projects'

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>('All')
  const allTags = ['All', ...getAllTags()]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter))

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-space-grotesk font-bold text-4xl sm:text-5xl text-text-light dark:text-text-dark mb-6">
            My Projects
          </h1>
          <p className="font-inter text-xl text-text-light dark:text-text-dark max-w-3xl mx-auto">
            Here&apos;s a collection of projects I&apos;ve built to showcase my skills and passion for software development. 
            Each project represents a learning opportunity and demonstrates my ability to solve real-world problems.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {allTags.map((tag) => (
              <Tag
                key={tag}
                tag={tag}
                isActive={activeFilter === tag}
                onClick={() => setActiveFilter(tag)}
              />
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <h3 className="font-space-grotesk font-semibold text-xl text-text-light dark:text-text-dark mb-4">
              No projects found
            </h3>
                          <p className="font-inter text-text-light dark:text-text-dark opacity-80">
                No projects match the selected filter. Try selecting a different tag or &quot;All&quot; to see all projects.
              </p>
          </div>
        )}

        {/* Project Count */}
        <div className="mt-12 text-center">
          <p className="font-inter text-text-light dark:text-text-dark opacity-80">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </div>
      </div>
    </div>
  )
}

import { Project } from '@/components/ProjectCard'

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration with Stripe.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'TypeScript'],
    githubUrl: 'https://github.com/jackstewart/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    image: '/images/project1.jpg'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A React Native mobile application for task management with real-time synchronization, offline support, and intuitive UI/UX design.',
    tags: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
    githubUrl: 'https://github.com/jackstewart/task-manager',
    liveUrl: 'https://task-manager-app.netlify.app',
    image: '/images/project2.jpg'
  },
  {
    id: '3',
    title: 'Machine Learning Dashboard',
    description: 'A Python-based dashboard for visualizing machine learning model performance, data analysis, and real-time predictions using Streamlit and scikit-learn.',
    tags: ['Python', 'Streamlit', 'scikit-learn', 'Pandas', 'Matplotlib'],
    githubUrl: 'https://github.com/jackstewart/ml-dashboard',
    liveUrl: 'https://ml-dashboard.herokuapp.com',
    image: '/images/project3.jpg'
  },
  {
    id: '4',
    title: 'Weather Forecast API',
    description: 'A RESTful API built with Express.js and Node.js that provides weather forecasts using OpenWeatherMap API with caching and rate limiting.',
    tags: ['Node.js', 'Express.js', 'Redis', 'JWT', 'REST API'],
    githubUrl: 'https://github.com/jackstewart/weather-api',
    liveUrl: 'https://weather-api-docs.vercel.app',
    image: '/images/project4.jpg'
  },
  {
    id: '5',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, project filtering, and contact form integration.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/jackstewart/portfolio',
    liveUrl: 'https://jackstewart.dev',
    image: '/images/project5.jpg'
  },
  {
    id: '6',
    title: 'Social Media Analytics',
    description: 'A data analytics platform that tracks social media metrics, generates insights, and provides visualizations using React and D3.js.',
    tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Chart.js'],
    githubUrl: 'https://github.com/jackstewart/social-analytics',
    liveUrl: 'https://social-analytics-demo.vercel.app',
    image: '/images/project6.jpg'
  }
]

export const getAllTags = (): string[] => {
  const tags = new Set<string>()
  projects.forEach(project => {
    project.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
}

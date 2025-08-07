'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone, Github, Linkedin, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // This would be replaced with actual Formspree integration
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-space-grotesk font-bold text-4xl sm:text-5xl text-text-light dark:text-text-dark mb-6">
            Get In Touch
          </h1>
          <p className="font-inter text-xl text-text-light dark:text-text-dark max-w-3xl mx-auto">
            I&apos;m always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="font-space-grotesk font-bold text-2xl text-text-light dark:text-text-dark mb-8">
                               Let&apos;s Connect
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-lg text-text-light dark:text-text-dark mb-1">
                    Email
                  </h3>
                  <p className="font-inter text-text-light dark:text-text-dark opacity-80">
                    jack@example.com
                  </p>
                  <p className="font-inter text-sm text-text-light dark:text-text-dark opacity-60 mt-1">
                    I&apos;ll get back to you within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-lg text-text-light dark:text-text-dark mb-1">
                    Location
                  </h3>
                  <p className="font-inter text-text-light dark:text-text-dark opacity-80">
                    City, State
                  </p>
                  <p className="font-inter text-sm text-text-light dark:text-text-dark opacity-60 mt-1">
                    Open to remote opportunities
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-lg text-text-light dark:text-text-dark mb-1">
                    Phone
                  </h3>
                  <p className="font-inter text-text-light dark:text-text-dark opacity-80">
                    +1 (555) 123-4567
                  </p>
                  <p className="font-inter text-sm text-text-light dark:text-text-dark opacity-60 mt-1">
                    Available for calls during business hours
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h3 className="font-space-grotesk font-semibold text-xl text-text-light dark:text-text-dark mb-6">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/jackstewart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/jackstewart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="mt-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6">
              <h3 className="font-space-grotesk font-semibold text-lg text-text-light dark:text-text-dark mb-4">
                Quick Facts
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="font-inter text-text-light dark:text-text-dark">Available for freelance projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="font-inter text-text-light dark:text-text-dark">Seeking software engineering internships</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="font-inter text-text-light dark:text-text-dark">Open to collaboration opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="font-inter text-text-light dark:text-text-dark">Willing to relocate for the right opportunity</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
            <h2 className="font-space-grotesk font-bold text-2xl text-text-light dark:text-text-dark mb-8">
              Send a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-inter font-medium text-text-light dark:text-text-dark mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bg-light dark:bg-bg-dark border border-gray-200 dark:border-gray-700 rounded-lg font-inter text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-inter font-medium text-text-light dark:text-text-dark mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bg-light dark:bg-bg-dark border border-gray-200 dark:border-gray-700 rounded-lg font-inter text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block font-inter font-medium text-text-light dark:text-text-dark mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bg-light dark:bg-bg-dark border border-gray-200 dark:border-gray-700 rounded-lg font-inter text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                                     placeholder="What&apos;s this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-inter font-medium text-text-light dark:text-text-dark mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-bg-light dark:bg-bg-dark border border-gray-200 dark:border-gray-700 rounded-lg font-inter text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              {/* Submit Status */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="font-inter text-green-800 dark:text-green-200">
                                         Thank you! Your message has been sent successfully. I&apos;ll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="font-inter text-red-800 dark:text-red-200">
                    Sorry, there was an error sending your message. Please try again or contact me directly via email.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-hover disabled:bg-gray-400 text-white font-inter font-medium rounded-lg transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

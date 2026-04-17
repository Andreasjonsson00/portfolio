import React from 'react'

const Contact = () => {
  return (
    <section className="mt-16 flex flex-col items-center text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Get in Touch</h2>

      <p className="max-w-xl mx-auto mb-8">
        Feel free to reach out if you want to collaborate, have a question, or just want to connect.
      </p>

      <div className="flex flex-col gap-4 items-center text-center max-w-md mx-auto">
        <a
          href="mailto:your@email.com"
          className="text-blue-400 hover:underline"
        >
          your@email.com
        </a>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Contact
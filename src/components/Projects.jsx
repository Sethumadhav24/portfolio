import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl">Projects</motion.h2>
      <div>
        {PROJECTS.map((project, index) => {
          return (
            <div key={index} className="mb-12 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 1 }}
                className="w-full max-w-3xl">
                <h5 className="mb-4 text-xl font-semibold text-neutral-100">{project.title}</h5>
                {Array.isArray(project.description) ? (
                  <ul className="list-disc pl-5 mb-4 text-neutral-400 space-y-2">
                    {project.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mb-4 text-neutral-400">{project.description}</p>
                )}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => {
                    return (
                      <span key={index} className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                        {tech}
                      </span>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects

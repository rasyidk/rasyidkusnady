import React from 'react'

const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/rasyidk_/' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rasyidkusnady/' },
  { name: 'GitHub', url: 'https://github.com/rasyidk' },
  { name: 'GitLab', url: 'https://gitlab.com/xrasyid' },
]

export default function Contact() {
  return (
    <section className="border-t border-line w-full p-[5%]" id="contact">
      <div className="container mx-auto">
        <h2 className="text-4xl lg:text-[5vw] font-bold">GET IN TOUCH</h2>
        <h3 className="text-2xl lg:text-4xl underline py-[8%] lg:py-[5%]">
          rasyidkusnady@gmail.com
        </h3>
        <h4 className="text-xl lg:text-2xl font-semibold py-2">Social:</h4>

        <div className="grid grid-cols-2 gap-2 lg:gap-4 mt-[1%] text-sm lg:text-xl lg:max-w-[20%]">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

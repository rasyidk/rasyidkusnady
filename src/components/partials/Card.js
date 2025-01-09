import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaGithub } from 'react-icons/fa'
import { BiLinkExternal } from 'react-icons/bi'

const CardComponent = () => {
  const cardRefs = useRef([])
  gsap.registerPlugin(ScrollTrigger)

  const cardData = [
    {
      id: 1,
      content: 'Learning Management System BP2MI',
      backgroundImage: '/image/1-bp2mi.png',
      fields: ['Frontend Development', 'SEO engineering'],
      techstacks: ['Nuxt.js', 'Tailwind.CSS', 'Schema.org'],
      github: 'https://github.com/',
      live: 'https://siappintar.bp2mi.go.id/',
    },
    {
      id: 2,
      content: 'PORSENIGAMA 2023',
      backgroundImage: '/image/2-porsenigama.png',
      fields: ['Frontend Development', 'Backend Development'],
      techstacks: ['Next.js', 'Tailwind.CSS', 'Strapi'],
      github: 'https://github.com/',
      live: 'https://porsenigama23.vercel.app/2023/porsenigama',
    },
    {
      id: 3,
      content: 'PPSMB Pionir Gadjah Mada 2023',
      backgroundImage: '/image/3-pionir.png',
      fields: ['Frontend Development', 'Augmented Reality'],
      techstacks: ['Next.js', 'Tailwind.CSS', 'Strapi'],
      github: 'https://github.com/',
      live: 'https://ppsmbugm23.vercel.app/2023/',
    },
    {
      id: 4,
      content: 'Herbacare',
      backgroundImage: '/image/4-herbacare.png',
      fields: ['Mobile Development', 'Backend Development'],
      techstacks: ['Express.js', 'React Native'],
      github: 'https://github.com/pudyasta/herbacare',
      live: '',
    },
    {
      id: 5,
      content: 'SCANOCULAR',
      backgroundImage: '/image/5-scanocular.png',
      fields: ['Artificial Intelligence', 'Mobile Development'],
      techstacks: ['Python', 'Java'],
      github: 'https://github.com/pudyasta/scanocularrev',
      live: '',
    },
    {
      id: 6,
      content: 'Reconchain',
      backgroundImage: '/image/6-reconchain.png',
      fields: ['Blockchain', 'Mobile Development'],
      techstacks: ['Solidity', 'Java'],
      github: 'https://github.com/rasyidk/reconchain',
      live: '',
    },
    {
      id: 7,
      content: 'COVCHAIN',
      backgroundImage: '/image/7-covchain.png',
      fields: ['Blockchain', 'Mobile Development'],
      techstacks: ['Solidity', 'Java'],
      github: 'https://github.com/rasyidk/covchainApp',
      live: '',
    },
    {
      id: 8,
      content:
        'Gate-based IoT and Artificial Intelligence Mask Detection System',
      backgroundImage: '/image/8-gate.png',
      fields: [
        'Internet of Things',
        'Artificial Intelligence',
        'Mobile Development',
      ],
      techstacks: ['C', 'Python', 'Java'],
      github:
        'https://drive.google.com/drive/folders/1X3EbAjJ9uTPip7u7ZWqrOxE_cZnc4Nht?usp=share_link',
      live: 'https://drive.google.com/drive/folders/1X3EbAjJ9uTPip7u7ZWqrOxE_cZnc4Nht?usp=share_link',
    },
    {
      id: 9,
      content: 'Automatic Road Barrier with IoT (ARBIT)',
      backgroundImage: '/image/9-arbit.png',
      fields: ['Internet of Things', 'Mobile Development'],
      techstacks: ['C', 'Java'],
      github:
        'https://drive.google.com/drive/folders/1yDS8BrleCv0BLE08wXdy6Fwn5GxjktUc?usp=share_link',
      live: 'https://drive.google.com/drive/folders/1yDS8BrleCv0BLE08wXdy6Fwn5GxjktUc?usp=share_link',
    },
  ]

  useEffect(() => {
    const cards = gsap.utils.toArray('.Card')

    let lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: 'center center',
    })
    let stickDistance = 0

    cards.forEach((card, index) => {
      // Adjust scale based on position
      let scale = 1

      // Scroll-triggered scale down animation
      let scaleDown = gsap.to(card, {
        scale: scale,
        'transform-origin': '100% center',
      })

      // Card animation with ScrollTrigger
      const tween = gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          scrub: true,
          //   markers: true,
          invalidateOnRefresh: true,
          start: 'center center',
          end: () => lastCardST.start + stickDistance,
          pin: true,
          pinSpacing: false,
          ease: 'easeInOut',
          animation: scaleDown,
          toggleActions: 'restart none none reverse',
        },
        ease: 'easeInOut',
        scale: () => 1 - (cards.length - index) * 0.025,
      })
      // Pin the card during scroll
      ScrollTrigger.create({
        trigger: card,
        start: 'top top',
        pin: true,
        pinSpacing: false,
        // markers: true,
        id: 'pin',
        end: 'bottom bottom',
        invalidateOnRefresh: true,
        // end: 'bottom top',
      })
    })

    // Cleanup on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section>
      <div
        id="cards-wrapper"
        className="Cards  flex overflow-hidden flex-col flex-nowrap justify-start content-center items-center w-full pt-[50px]  lg:pt-[100px] pb-[30px] relative px-4"
      >
        {cardData.map((card, index) => (
          <div
            key={card.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`Card  relative mb-[10px] rounded-xl w-full md:w-[90vh] h-[300px] top-0 overflow-visible origin-[50%_-160%]`}
            style={{
              backgroundImage: `url(${card.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'black',
            }}
          >
            <div className="absolute inset-0 bg-black  bg-opacity-50 rounded-xl"></div>

            <div className="relative z-10 p-6 text-white flex flex-col h-full">
              <div className="flex-grow flex h-full">
                <div className="mt-auto">
                  <h2 className="text-xl lg:text-4xl font-bold shadow-sm lg:shadow-lg">
                    {card.content}
                  </h2>
                  <div className="mt-2 text-xs lg:text-lg shadow-sm lg:shadow-lg">
                    <span className="font-bold">Field:</span>{' '}
                    {card.fields.join(', ')}
                  </div>
                  <div className="text-xs lg:text-lg shadow-sm lg:shadow-lg">
                    <span className="font-bold">Techstack:</span>{' '}
                    {card.techstacks.join(', ')}
                  </div>

                  <div className="flex mt-4 space-x-4">
                    <a
                      href={card.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-400"
                    >
                      <FaGithub size={24} />
                    </a>
                    <a
                      href={card.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-400"
                    >
                      <BiLinkExternal size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CardComponent

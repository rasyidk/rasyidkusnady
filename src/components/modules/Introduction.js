import React from 'react'
import Button from '../partials/Button'
import { FaReact, FaVuejs, FaEthereum } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'
import { MdOutlineViewInAr } from 'react-icons/md'
import Image from 'next/image'

export default function Introduction() {
  const icons = [
    { id: 1, Icon: FaReact, name: 'React' },
    { id: 2, Icon: TbBrandNextjs, name: 'Next.js' },
    { id: 3, Icon: FaVuejs, name: 'Vue.js' },
    { id: 4, Icon: MdOutlineViewInAr, name: 'Virtual Reality' },
    { id: 5, Icon: FaEthereum, name: 'Ethereum' },
  ]

  return (
    <section
      className="container flex items-center mx-auto h-screen px-[5%] lg:px-0"
      id="home"
    >
      <div className="flex flex-col w-full">
        <Image
          src="/image/rasyid-face.png"
          alt="Face"
          width={100}
          height={100}
          className="mr-4 w-36 h-24 object-cover rounded-lg flex lg:hidden my-[5%]"
        />

        <div className="py-[3%] lg:py-0">
          <h2 className="text-3xl lg:text-[6.25vw] flex items-center">
            Glad to meet You!{' '}
            <Image
              src="/image/waving-hand-sign.svg"
              alt="wave hand"
              width={100}
              height={100}
              className="lg:ml-4 h-8 w-8 lg:h-24 lg:w-24"
            />
          </h2>
          <h1 className="text-4xl lg:text-[6.25vw] font-bold items-center  flex lg:mt-[2%]">
            <Image
              src="/image/rasyid-face.png"
              alt="Face"
              width={100}
              height={100}
              className="mr-4 w-36 h-24 object-cover rounded-lg hidden lg:flex"
            />
            I'm Rasyid Kusnady
          </h1>
        </div>
        <p className="text-sm lg:text-lg mt-[5%] max-w-[80%] lg:max-w-[50%]">
          A Fullstack Developer from Indonesia with a keen interest in various
          fields, including Artificial Intelligence, Augmented Reality, and
          Blockchain.
        </p>

        <Button className="mt-4">Download CV</Button>
        <div className="w-full flex justify-end  mt-[18%] lg:mt-8 ">
          <div className="border border-line rounded-lg p-4 shadow-lg w-fit">
            <ul className="flex gap-4">
              {icons.map(({ id, Icon, name }) => (
                <li
                  key={id}
                  title={name}
                  className=" text-xl lg:text-3xl text-white hover:text-accent"
                >
                  <Icon />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

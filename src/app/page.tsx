'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Toggle from '@/components/toggle'
import Particles from '@/components/particles'
import DotGrid from '@/components/dot-grid'


export default function Home() {
  return (
    <div className="bg-black md:h-full md:overflow-hidden">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto">
          <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
            <nav aria-label="Global" className="flex items-center justify-between lg:justify-start">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Akita</span>
                <img
                  alt="Akita"
                  src="/akita_logo.png"
                  className="h-16 w-auto"
                />
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="relative h-full">
        <div className="mx-auto h-full">
          <div className="relative z-10 md:pt-14 lg:w-full lg:max-w-2xl h-full">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute inset-y-0 -right-40 hidden h-full w-80 translate-x-1/2 transform fill-black lg:block"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute inset-y-0 right-8 hidden h-[500%] w-96 rotate-[30deg] transform fill-black lg:block"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 pt-24 md:py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <div className="hidden sm:mb-6 sm:flex">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-300 ring-1 ring-gray-300 hover:ring-gray-300">
                    Lets bring web3 to the masses.
                  </div>
                </div>
                <h1 className="text-7xl md:[font-size:10rem] [line-height:1] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-akita-400 to-akita-600 uppercase">
                  Smart Wallet
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  You deserve a wallet thats safe & easy to use.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-akita-600 via-akita-400 to-akita-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          {/* <Particles /> */}
          <DotGrid/>
        </div>

        <div className="z-10 h-full lg:absolute lg:inset-y-0 lg:right-10 lg:w-1/2">
          <div className="w-full h-full p-6 md:p-10 flex flex-col justify-center items-center gap-10">
            <Toggle />



            <div className="h-96 w-full bg-zinc-900 rounded-xl p-1 shadow-2xl shadow-black">
              <div className="w-full h-full border-2 border-akita-600 rounded-lg">

              </div>
            </div>
            <div className="h-52 w-full bg-zinc-900 rounded-xl p-1 shadow-2xl shadow-black">
              <div className="w-full h-full border-2 border-akita-600 rounded-lg">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

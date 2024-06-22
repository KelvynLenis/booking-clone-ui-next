'use client'

import { cn } from '@/lib/utils'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from '@headlessui/react'
import {
  ChatBubbleBottomCenterIcon,
  ChevronDownIcon,
  HomeIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  PlayCircleIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Fragment, useState } from 'react'

const products = [
  {
    name: 'Book a Stay',
    description: 'Find the perfect place to stay',
    href: '#',
    icon: HomeIcon,
  },
  {
    name: 'Book a flight',
    description: 'Spea directly to yout customers',
    href: '#',
    icon: PaperAirplaneIcon,
  },
  {
    name: 'Contact our support team',
    description: "Your customers' data will be safe and secure",
    href: '#',
    icon: ChatBubbleBottomCenterIcon,
  },
]

const callsToAction = [
  { name: 'See Demo Booking', href: '#', icon: PlayCircleIcon },
  { name: 'Contact Support', href: '#', icon: PhoneIcon },
]

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-primary">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 gap-2"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Booking.com</span>
            <img
              className="h-12 w-auto mr-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Booking.com_Logo_Grey.svg/2560px-Booking.com_Logo_Grey.svg.png"
              alt=""
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flx items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Stays
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-white"
                aria-hidden="true"
              />
            </PopoverButton>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute bg-white -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200">
                        <item.icon
                          className="h-6 w-6 text-[#013B94] group-hover:text-blue-600"
                          aria-hidden="true"
                        />
                      </div>

                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-primary"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-primary">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-primary hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-primary"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>

          <a href="" className="text-sm font-semibold leading-6 text-white">
            Flights
          </a>
          <a href="" className="text-sm font-semibold leading-6 text-white">
            Car rentals
          </a>
          <a href="" className="text-sm font-semibold leading-6 text-white">
            Attractions
          </a>
          <a href="" className="text-sm font-semibold leading-6 text-white">
            Flights + Hotel
          </a>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="" className="text-sm font-semibold leading-6 text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      <Dialog
        className="lg:hidden"
        as="div"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />

        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary px-6 py-6 sm:mx-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Booking.com</span>
              <img
                className="h-8 w-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Booking.com_Logo_Grey.svg/2560px-Booking.com_Logo_Grey.svg.png"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-blue-800">
                        Stays
                        <ChevronDownIcon
                          className={cn(open ? 'rotate-180' : '')}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-blue-800"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                <a
                  href=""
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Flights
                </a>

                <a
                  href=""
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Car Rentals
                </a>

                <a
                  href=""
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Attractions
                </a>
                <a
                  href=""
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Flights + Hotel
                </a>
              </div>

              <div className="py-6">
                <a
                  href=""
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Log In
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Header

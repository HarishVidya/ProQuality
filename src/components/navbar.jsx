'use client'
import { Disclosure } from "@headlessui/react"
import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import Link from "next/link"

const navigation = [
    { name: 'Services', href: '/services', current: false },
    { name: 'Certification', href: '/certification', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

    return (
        
        <header className="flex items-center px-4 lg:px-6 h-14">
        <Link className="flex items-center justify-center" href="/">
          <MountainIcon className="w-6 h-6" />
          <span className="sr-only">Pro Quality Services Inc</span>
        </Link>
        <nav className="flex gap-4 ml-auto sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/services">
            Services
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/certifications">
            Certification
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/about">
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/contact">
            Contact
          </Link>
        </nav>
      </header>

    )

}

function MountainIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    )
  }
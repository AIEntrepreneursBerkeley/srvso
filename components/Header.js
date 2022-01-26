import Image from 'next/image';
import Link from 'next/link';
import * as HoverCard from '@radix-ui/react-hover-card';
import * as Dialog from '@radix-ui/react-dialog';
import { FiMenu } from 'react-icons/fi';

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-10 flex items-center justify-between w-full max-w-5xl px-4 py-4 mx-auto bg-black bg-opacity-10 mb-14 backdrop-saturate-150 backdrop-blur-md lg:hidden">
        <Link href="/">
          <a>
            <figure className="relative w-12 h-12 mr-20">
              <Image
                src="/images/srvso-logo.png"
                alt="SRVSO Logo"
                layout="fill"
                objectFit="cover"
              />
            </figure>
          </a>
        </Link>
        <ul className="flex justify-between text-sm gap-x-5">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="events">
              <a>Events</a>
            </Link>
          </li>
          <li>
            <Link href="/registration">
              <a>Registration</a>
            </Link>
          </li>
          <li>
            <HoverCard.Root openDelay={100} closeDelay={300}>
              <HoverCard.Trigger>
                <span className="cursor-default">Resources</span>
              </HoverCard.Trigger>
              <HoverCard.Content className="px-6 py-2 mt-3 bg-black border border-gray-800 rounded-md bg-opacity-95 backdrop-blur-xl">
                <HoverCard.Arrow className="relative text-gray-700 fill-current" />
                <ul>
                  <li className="py-2">
                    <Link href="/resources/theory-event-resources">
                      <a className="text-sm">Theory Event Resources</a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="/resources/build-event-resources">
                      <a className="text-sm">Build Event Resources</a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="/resources/instant-challenge-resources">
                      <a className="text-sm">Instant Challenge Resources</a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="/resources/coaches">
                      <a className="text-sm">Coaches</a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="/resources/faq">
                      <a className="text-sm">FAQ</a>
                    </Link>
                  </li>
                </ul>
              </HoverCard.Content>
            </HoverCard.Root>
          </li>
          <li>
            <Link href="/meeting-presentation-slides">
              <a>Meeting Presentation Slides</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/board-of-officers">
              <a>Board of Officers</a>
            </Link>
          </li>
        </ul>
      </header>

      {/* On small devices, show a hamburger menu */}
      <header className="sticky top-0 z-10 items-center justify-between hidden w-full max-w-5xl py-3 mx-auto bg-black bg-opacity-50 px-7 mb-14 backdrop-saturate-150 backdrop-blur-md lg:flex">
        <Link href="/">
          <a>
            <figure className="relative w-10 h-10">
              <Image
                src="/images/srvso-logo.png"
                alt="SRVSO Logo"
                layout="fill"
                objectFit="cover"
              />
            </figure>
          </a>
        </Link>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="grid px-2 py-2 text-gray-400 transition-colors bg-gray-800 rounded-full place-items-center hover:text-gray-200"
            >
              <FiMenu className="w-6 h-6" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 grid overflow-y-auto bg-black bg-opacity-70 place-items-center">
              <Dialog.Content className="w-screen h-screen bg-black">
                <ul className="flex flex-col gap-y-3">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="events">
                      <a>Events</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/registration">
                      <a>Registration</a>
                    </Link>
                  </li>
                  <li>
                    <HoverCard.Root openDelay={100} closeDelay={300}>
                      <HoverCard.Trigger>
                        <span className="cursor-default">Resources</span>
                      </HoverCard.Trigger>
                      <HoverCard.Content className="px-6 py-2 mt-3 bg-black border border-gray-800 rounded-md bg-opacity-95 backdrop-blur-xl">
                        <HoverCard.Arrow className="relative text-gray-700 fill-current" />
                        <ul>
                          <li className="py-2">
                            <Link href="/resources/theory-event-resources">
                              <a className="text-sm">Theory Event Resources</a>
                            </Link>
                          </li>
                          <li className="py-2">
                            <Link href="/resources/build-event-resources">
                              <a className="text-sm">Build Event Resources</a>
                            </Link>
                          </li>
                          <li className="py-2">
                            <Link href="/resources/instant-challenge-resources">
                              <a className="text-sm">
                                Instant Challenge Resources
                              </a>
                            </Link>
                          </li>
                          <li className="py-2">
                            <Link href="/resources/coaches">
                              <a className="text-sm">Coaches</a>
                            </Link>
                          </li>
                          <li className="py-2">
                            <Link href="/resources/faq">
                              <a className="text-sm">FAQ</a>
                            </Link>
                          </li>
                        </ul>
                      </HoverCard.Content>
                    </HoverCard.Root>
                  </li>
                  <li>
                    <Link href="/meeting-presentation-slides">
                      <a>Meeting Presentation Slides</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/board-of-officers">
                      <a>Board of Officers</a>
                    </Link>
                  </li>
                </ul>
              </Dialog.Content>
            </Dialog.Overlay>
          </Dialog.Portal>
        </Dialog.Root>
      </header>
    </>
  );
}

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Navbar from "../components/navbar.js"
import Layout, { siteTitle } from "../components/layout.js"

// todo
/*
 convert the <a> and <img> stuff to link and image
*/

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>


      <div className="py-12 mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center w-full">
          <div className="mb-8 w-full">

            <div className="relative bg-white overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

                  <svg
                    className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                    fill="currentColor"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <polygon points="50,0 100,0 50,100 0,100" />
                  </svg>

                  <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="sm:text-center lg:text-left">
                      <h1 className="text-4xl tracking-tight font-extrabold text-neutral-900 sm:text-5xl md:text-6xl">
                        <span className="block xl text-sky-500">HackMUN IV</span>{' '}
                        <span className="block xl:inline sm:text-3xl md:text-5xl">April 2, 2022</span>
                      </h1>
                      <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        The Hackley Model United Nations Club is planning to host the fourth annual Hackley Model United Nations conference on April 9th, 2022. We are very excited to be running an in-person conference this year (pending finalization). On behalf of the secretariat, we look forward to seeing you on campus in the spring!
                      </p>
                      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                          <Link href="/conference">
                            <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-500 hover:bg-sky-600 md:py-4 md:text-lg md:px-10">
                              Conference
                            </a>
                          </Link>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <Link href="/committees">
                            <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-sky-500 bg-sky-100 hover:bg-sky-200 md:py-4 md:text-lg md:px-10">
                              Committees
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </main>
                </div>
              </div>
              <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">

                {/* javascript weird, need to keep img, not Image */}
                <img
                  className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                  src="/images/hackmun.jpeg"
                  alt=""
                />
              </div>
            </div>

            <br />

            <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h1 className="text-3xl font-bold leading-snug tracking-tight text-neutral-800 lg:text-3xl lg:leading-tight xl:text-5xl xl:leading-tight">
                HackMUN IV Conference Details
              </h1>

              <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                Dummy Text
              </p>
            </div>


          </div>
        </div>
      </div>


    </Layout>
  )
}

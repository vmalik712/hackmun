import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Navbar from "../../components/navbar.js"
import Layout, { siteTitle } from "../../components/layout.js"
import { getCommitteesData } from '../../lib/committees.js'
import Dropdown from '../../components/dropdown.js'

export async function getStaticProps() {
  const allCommitteesData = getCommitteesData()
  return {
    props: {
      allCommitteesData
    }
  }
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Committees({ allCommitteesData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-sky-500 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
            Committees
          </h1>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-center leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
              Upper School
            </h2>

            <div className="mt-5">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                {allCommitteesData.map(({ id, title, description, guide, image, type, ms }) => (
                  <div key={title} className={ms ? 'hidden' : 'relative'}>
                    <a href={"/committees/" + id}>
                      <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={image} alt="" pt-0 />
                        <div className="px-6 py-4">
                          <div className="text-xs text-neutral-700">{type}</div>
                          <div className="font-bold text-xl mb-2">{title}</div>
                          <p className="text-gray-700 text-base text-m">
                            {description}
                          </p>
                        </div>
                      </div>
                    </a>

                  </div>
                ))}
              </dl>
            </div>
          </div>


          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-center leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
              Middle School
            </h2>

            <div className="mt-5">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                {allCommitteesData.map(({ id, title, description, guide, image, type, ms }) => (
                  <div key={title} className={ms ? 'relative' : 'hidden'}>
                    <a href={"/committees/" + id}>
                      <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={image} alt="" pt-0 />
                        <div className="px-6 py-4">
                          <div className="text-xs text-neutral-700">{type}</div>
                          <div className="font-bold text-xl mb-2">{title}</div>
                          <p className="text-gray-700 text-base text-m">
                            {description}
                          </p>
                        </div>
                      </div>
                    </a>

                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
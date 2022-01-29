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

export default function Committees({ allCommitteesData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Committees
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {allCommitteesData.map(({ id, title, description, guide, image, type }) => (
                <div key={title} className="relative">

                  <a href={id}>
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                      <img class="w-full" src={image} alt="" pt-0 />
                      <div class="px-6 py-4">
                      <div class="text-xs mb-1">{type}</div>
                        <div class="font-bold text-xl mb-2">{title}</div>
                        <p class="text-gray-700 text-base">
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
    </Layout>
  )
}
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Navbar from "../../components/navbar.js"
import Layout, { siteTitle } from "../../components/layout.js"
import { getCommitteesData } from '../../lib/committees.js'

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
              {allCommitteesData.map(({ id, title, description, guide, image }) => (

                <div key={title} className="relative">

                  <a href={id}>
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        {/*<feature.icon className="h-6 w-6" aria-hidden="true" />*/}
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{title}</p>

                    </dt>
                  </a>

                  <dd className="mt-2 ml-16 text-base text-gray-500">{description}</dd>
                </div>

              ))}
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  )
}
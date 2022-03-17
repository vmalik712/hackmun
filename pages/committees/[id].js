import Layout from '../../components/layout'
import { getAllCommitteeIds, getCommitteeData } from '../../lib/committees'

export async function getStaticProps({ params }) {
    const committeeData = await getCommitteeData(params.id)
    return {
        props: {
            committeeData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllCommitteeIds()
    return {
        paths,
        fallback: false
    }
}

export default function Committee({ committeeData }) {
    return <Layout>
        <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block text-xl">{committeeData.type}</span>
                    <span className="block text-sky-500 font-extrabold">{committeeData.title}</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <a
                            href={committeeData.guide}
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-500 hover:bg-sky-600"
                        >
                            View background guide
                        </a>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <a
                            href={"mailto:" + committeeData.email}
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-sky-500 bg-white hover:bg-sky-50"
                        >
                            Email chair
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <br />


        <div className="text-center">
            <div className="text-left max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div dangerouslySetInnerHTML={{ __html: committeeData.contentHtml }}/>
            </div>
        </div>


    </Layout>
}
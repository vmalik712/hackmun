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
        {committeeData.title}
        <br />
        {committeeData.description}

        <div dangerouslySetInnerHTML={ { __html: committeeData.contentHtml } } />
    </Layout>
}
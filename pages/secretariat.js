import Layout from '../components/layout'

export default function Secretariat() {
    return (
        <Layout>
            <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex items-center w-full">
                    <div className="mb-8 w-full">
                        <h1 className="text-4xl font-bold leading-snug tracking-tight text-sky-500 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
                            HackMUN IV Secretariat
                        </h1>

                        <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                            This year&apos;s secretariat for HackMUN IV is Daniel Cai, Advith Sharma, Tibet Yakut, and Steven Yu.
                        </p>

                        <h2 className="text-2xl font-semibold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
                            Note from the Secretariat:
                        </h2>

                        <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                            We are excited to announce that HackMUN IV will be held in the same venue as the 2019 conference.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
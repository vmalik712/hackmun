import Layout from '../components/layout'

export default function Conference() {
    return (
        <Layout>
            <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex items-center w-full">
                    <div className="mb-8 w-full">
                        <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
                            HackMUN IV Conference Details
                        </h1>

                        <br />
                        <br />


                        <h2 className="text-2xl font-semibold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
                            General
                        </h2>

                        <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                            Delegates should wear western business attire.
                        </p>

                        <h2 className="text-2xl font-semibold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
                            Location
                        </h2>

                        <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                            293 Benedict Ave, Tarrytown, NY 10591
                        </p>

                        <br />

                        <h2 className="text-2xl font-semibold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
                            Schedule
                        </h2>
                        <div className='w-full'>
                            <div className="flex justify-between">
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    Opening Ceremony
                                </p>
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    9:00-9:30
                                </p>
                            </div>

                            <div className="flex justify-between">
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    Morning Committee Session
                                </p>
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    9:30-12:00
                                </p>
                            </div>

                            <div className="flex justify-between">
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    Lunch Break
                                </p>
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    12:00-1:00
                                </p>
                            </div>

                            <div className="flex justify-between">
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    Afternoon Committee Session 1
                                </p>
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    1:00-2:45
                                </p>
                            </div>

                            <div className="flex justify-between">
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    Break
                                </p>
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    2:45-3:00
                                </p>
                            </div>

                            <div className="flex justify-between">
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    Afternoon Committee Session 2
                                </p>
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    3:00-4:30
                                </p>
                            </div>

                            <div className="flex justify-between">
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    Closing Ceremonies
                                </p>
                                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                                    4:30-5:00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}
import Layout from '../components/layout'
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Secretariat() {
    return (
        <Layout>
            <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="items-center w-full">
                    <div className="mb-8 w-full">
                        <h1 className="text-4xl font-bold leading-snug tracking-tight text-sky-500 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
                            HackMUN IV Secretariat
                        </h1>
                    </div>

                    <Tab.Group>
                        <Tab.List className='flex p-1 space-x-1 bg-sky-500/20 rounded-xl'>
                            <Tab           
                                className={({ selected }) => 
                                    classNames(
                                        'w-full sm:p-3 lg:p-3 sm:text-xl lg:text-2xl leading-5 font-semibold rounded-lg',
                                    selected 
                                    ? 'bg-sky-500 text-white shadow'
                                    : 'text-sky-500 hover:bg-white/[0.12]')
                                }
                            >
                                The Secretariat
                            </Tab>
                            <Tab           
                                className={({ selected }) => 
                                    classNames(
                                        'w-full sm:p-3 lg:p-3 sm:text-xl lg:text-2xl leading-5 font-semibold rounded-lg',
                                    selected 
                                    ? 'bg-sky-500 text-white shadow'
                                    : 'text-sky-500 hover:bg-white/[0.12]')
                                }
                            >
                                Note from the Secretariat
                            </Tab>
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel>
                                {/* Meet the Secretariat*/}
                                <br/>
                                <div className="container px-2 mx-auto">
                                    <h1 className="text-2xl text-center font-semibold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
                                        Meet the Secretariat
                                    </h1>

                                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
                                        <div className="px-12 py-8 transition-colors duration-200 transform border rounded-xl">
                                            <div className="flex flex-col sm:-mx-4 sm:flex-row">
                                                <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-sky-500" src="/images/danielcai.jpeg" alt="" />

                                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl">Daniel Cai</h1>

                                                    <p className="mt-2 text-gray-500 capitalize">Co-Secretaries General</p>
                                                </div>
                                            </div>

                                            <p className="mt-4 text-gray-500">Hi Everyone! I&apos;m Daniel Cai, a senior at Hackley School. I&apos;ve been participating in international and local Model United Nations conferences since 7th-grade. I&apos;m extremely passionate about politics and history which naturally translated to a deep love for Model UN. We&apos;re extremely honored to bring you this conference and on behalf of the HackMUN secretariat, we welcome you to the fourth annual Hackley Model UN!</p>

                                        </div>

                                        <div className="px-12 py-8 transition-colors duration-200 transform border rounded-xl">
                                            <div className="flex flex-col sm:-mx-4 sm:flex-row">
                                                <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-sky-500" src="/images/advithsharma.jpeg" alt="" />

                                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl">Advith Sharma</h1>

                                                    <p className="mt-2 text-gray-500 capitalize">Co-Secretaries General</p>
                                                </div>
                                            </div>

                                            <p className="mt-4 text-gray-500"> Hello everyone, I'm Advith Sharma. I&apos;m currently a junior and have been doing Model UN since 9th grade, and have really grown to enjoy it. I&apos;ve experienced many different types of MUNs, including in-person and virtual conferences! I&apos;m very passionate about geography and global affairs as well as traveling the world and founded multiple GEO Clubs in his school to teach younger students. I also enjoy supporting environmental sustainability in the energy industry through economics and international finance and business. I look forward to once again chairing a committee at HackMUN and a very fun experience for all delegates! </p>

                                        </div>

                                        <div className="px-12 py-8 transition-colors duration-200 transform border rounded-xl">
                                            <div className="flex flex-col sm:-mx-4 sm:flex-row">
                                                <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-sky-500" src="/images/tibetyakut.jpeg" alt="" />

                                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl">Tibet Yakut</h1>

                                                    <p className="mt-2 text-gray-500 capitalize">Undersecretary General</p>
                                                </div>
                                            </div>

                                            <p className="mt-4 text-gray-500">Hi everyone, I&apos;m Tibet Yakut. I&apos;m a Junior at Hackley, and an Under-Secretaries General in our MUN team. I&apos;ve been participating in Model UN conferences since 6th grade. Aside from Model UN, I lead the Chess Club and Students for Refugees Club at Hackley. I&apos;m passionate about computer science, philosophy, and politics. I&apos;m honored to be hosting another HackMUN, and excited to see everyone!</p>
                                        </div>

                                        <div className="px-12 py-8 transition-colors duration-200 transform border rounded-xl">
                                            <div className="flex flex-col sm:-mx-4 sm:flex-row">
                                                <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-sky-500" src="/images/stevenyu.jpeg" alt="" />

                                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl">Steven Yu</h1>

                                                    <p className="mt-2 text-gray-500 ">Undersecretary General</p>
                                                </div>
                                            </div>

                                            <p className="mt-4 text-gray-500">Hello delegates, I&apos;m Steven Yu, a junior at Hackley. I&apos;m very interested in history and politics, especially international politics, which fueled my dedication to Model UN. In addition to my love of Model UN, I also love computer science (hardware and software) and watching NBA basketball. I&apos;m excited to see all of the delegates at HackMUN!</p>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                {/* Note from the Secretariat*/}
                                <br/>
                                <div className="mb-8 w-full">
                                    <h2 className="text-2xl font-semibold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
                                        Note from the Secretaries General:
                                    </h2>

                                    <div className='py-5 text-l leading-normal text-gray-800 lg:text-l xl:text-l'>
                                        <p>Greetings Delegates!</p>
                                        <br />
                                        <p>This year&apos;s secretariat for Hackley School&apos;s 4th annual Model UN conference looks to extend its mission and values to both new and returning delegates, moderating debate that is fun, challenging, and transformative to each delegate&apos;s perspective of different facets of our world. In the year 2022, the need for young students to push themselves to think critically about global issues and together find solutions through disagreements, compromises, and discourses are more necessary than ever. </p>
                                        <br />
                                        <p>For many of us, the last few years seem to have been a perpetual crisis. To name a few: a global pandemic, a polarizing election culminating on January 6th at the US Capitol, the Taliban takeover in Afghanistan, deepening political divides in the US and Europe, drought and environmental refugee crises, and now an unprecedented war in Ukraine. This is an important reminder that our next generation of young delegates attending HackMUN are the ones that will face such challenges in the future and should be prepared to tackle them through unity and collaboration. </p>
                                        <br />
                                        <p>The United Nations was formed in the aftermath of the second world war. Through this period of time, the UN has presided over what we dub as the Long Peace, where major world powers have not fought each other since 1945. In this peace, our world has changed immeasurably for the better. Technology has driven the human race to new frontiers far in the lands, deep in the oceans, high in the skies, and out there in our galaxy. Global movements for peace and justice have created a world order that, for the first time in history, gives everyday citizens a voice in government. And though we still have a long way to go, in the grand scheme of human civilization our progress has been unprecedented. But today we are once again at a crossroads. War has once again descended onto the European continent, democracies, and autocracies are once again at an impasse, and a new cold war is brewing. This year&apos;s HackMUN conference confers on this turning point in our common history where our Long Peace is ending. For you, each of our delegates, this will be a year to remember - one that will surely transform the world&apos;s geopolitical landscape for decades to come.</p>
                                        <br />
                                        <p>Thus, this year at HackMUN IV, we wish for delegates of all backgrounds, whether first-timers or more polished debaters, to engage with the challenging issues at hand, while having fun and enjoying the experience of an in-person conference. Most importantly, grow and prosper in your perspectives. It is through this that we collectively stand a chance to right our world&apos;s wrongs.</p>
                                        <br />
                                        <p>For the last 2 years, we have been inspired by our delegates&apos; ability to adapt and continue with Model UN virtually. We hope to bring back the cherished experience HackMUN used to be. Whether in resolving historical crises, addressing pressing current events in a general assembly, or securing the future of the United States in a governmental body, there is something for everyone at HackMUN this year. We encourage you to strike an effective balance during committee between being a leader and a listener, a voice of optimism as well as a voice of practicalism, challenging yourself to be both a team player and the best individual delegate you can be. </p>
                                        <br />
                                        <p>Don&apos;t hesitate to reach out to any of the staff this year at HackMUN. We implore you to make the best of the resources you are given and help us make this conference the best it has ever been!</p>
                                        <br />
                                        <p className='italic'>ad meliora</p>
                                        <br />
                                        <p>Daniel Cai & Advith Sharma,</p>
                                        <br />
                                        <p>Secretaries-General of HackMUN IV</p>
                                    </div>
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </Layout>
    )
}
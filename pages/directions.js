import Layout from "../components/layout";

export default function Directions() {
    return (
        <Layout>
            <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="items-center w-full">
                    <div className="mb-8 w-full">
                        <h1 className="text-4xl font-bold leading-snug tracking-tight text-sky-500 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
                            HackMUN IV Directions
                        </h1>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d295.43901239057965!2d-73.84130585907796!3d41.06970979795332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2eaca87e52e33%3A0x79bbb78c27633db7!2sHackley%20School!5e0!3m2!1sen!2sus!4v1647401321573!5m2!1sen!2sus" width="600" height="450" styles="border:0;" loading="lazy">
                        </iframe>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
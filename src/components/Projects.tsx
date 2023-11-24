const Projects = () => {
    const imgUrlSneaktoons = new URL(
        '../images/skeaktoonsScreenshot-16-9.png',
        import.meta.url
    ).href
    const imgUrlGuidedOS = new URL(
        '../images/GuidedOsScreenshot.png',
        import.meta.url
    ).href
    const imgUrlRestaurantMenu = new URL(
        '../images/MenuCreatorScreenshot.png',
        import.meta.url
    ).href
    return (
        <section id="portfolio" className="h-fit bg-orange-100">
            <div className="container mx-auto flex flex-col gap-5 p-4 ">
                <div className="flex flex-col gap-5">
                    <h3 className="text-4xl  font-bold text-lime-950">
                        Projects
                    </h3>
                    <p className=" text-lg text-lime-950">
                        The Projects I build always focus on bringing real value
                        to customers!
                    </p>
                    <ul className="projects-grid gap-5 text-lime-950 lg:grid lg:grid-cols-8">
                        <li className=" col-span-4 flex h-fit w-fit flex-wrap gap-5 rounded-xl p-5 hover:bg-orange-200/30 lg:grid lg:grid-cols-5">
                            <img
                                src={imgUrlSneaktoons}
                                width={'120'}
                                height={'70'}
                                alt="sneaktoonsScreenshot"
                                className="col-span-1 rounded-md"
                            />
                            <div className="projectDetails flex flex-col gap-5 lg:col-span-4">
                                <p className="projectTitle font-bold">
                                    Shop-Applicaton: Sneaktoons
                                </p>
                                <p className="projectDetailsText h-40">
                                    Sneaktoons is a Online-Shop where people can
                                    buy custom painted Sneakers.
                                </p>
                                <ul className="projectTechnologies flex flex-wrap gap-1 font-light">
                                    <li>
                                        <div className="item-center flex rounded-full bg-lime-950 px-3 py-1 text-xs leading-5 text-white">
                                            HTML
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-center flex rounded-full bg-lime-950 px-3 py-1 text-xs leading-5 text-white">
                                            tailwindcss
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-center flex rounded-full bg-lime-950 px-3 py-1 text-xs leading-5 text-white">
                                            TypeScript
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-center flex rounded-full bg-lime-950 px-3 py-1 text-xs leading-5 text-white">
                                            Reactjs
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="col-span-4 h-fit w-fit gap-5  rounded-xl p-5  hover:bg-orange-200/30 lg:grid lg:grid-cols-5">
                            <img
                                src={imgUrlGuidedOS}
                                width={'120'}
                                height={'70'}
                                alt="sneaktoonsScreenshot"
                                className="col-span-1 rounded-md"
                            />
                            <div className="projectDetails flex flex-col gap-5 lg:col-span-4">
                                <p className="projectTitle font-bold">
                                    E-Learning Modul: GuidedOS
                                </p>
                                <p className="projectDetailsText h-40">
                                    GuidedOS is an interactive E-Learning module
                                    designed to replicate the daily tasks of a
                                    database developer. The objective is to
                                    enhance the learning experience by
                                    simulating real-world scenarios.
                                </p>
                                <ul className="projectTechnologies flex flex-wrap gap-1 font-light">
                                    <li>
                                        <div className="item-center flex rounded-full bg-lime-950 px-3 py-1 text-xs leading-5 text-white">
                                            HTML
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-center flex rounded-full bg-lime-950 px-3 py-1 text-xs leading-5 text-white">
                                            tailwindcss
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-center flex rounded-full bg-lime-950 px-3 py-1 text-xs leading-5 text-white">
                                            TypeScript
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-center flex rounded-full bg-lime-950 px-3 py-1 text-xs leading-5 text-white">
                                            Reactjs
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className=" col-span-4 flex h-fit w-fit flex-wrap gap-5 rounded-xl p-5 hover:bg-orange-200/30 lg:grid lg:grid-cols-5">
                            <img
                                src={imgUrlRestaurantMenu}
                                width={'120'}
                                height={'70'}
                                alt="sneaktoonsScreenshot"
                                className="col-span-1 rounded-md"
                            />
                            <div className="projectDetails flex flex-col gap-5 lg:col-span-4">
                                <p className="projectTitle font-bold">
                                    No-Code Tool: Restaurant Menu Creator
                                </p>
                                <p className="projectDetailsText h-40">
                                    This is an application for Restaurant-Owners
                                    to create their own menues through a drag
                                    and drop application.
                                </p>
                                <ul className="projectTechnologies flex flex-wrap gap-1 font-light">
                                    <li>
                                        <div className="item-center flex rounded-full bg-lime-950 px-3 py-1 text-xs leading-5 text-white">
                                            HTML
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-center flex rounded-full bg-lime-950 px-3 py-1 text-xs leading-5 text-white">
                                            tailwindcss
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-center flex rounded-full bg-lime-950 px-3 py-1 text-xs leading-5 text-white">
                                            TypeScript
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-center flex rounded-full bg-lime-950 px-3 py-1 text-xs leading-5 text-white">
                                            Reactjs
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Projects

const Projects = () => {
    const imgUrlSneaktoons = new URL(
        '../images/skeaktoonsScreenshot-16-9.png',
        import.meta.url
    ).href
    /*     const imgUrlGuidedOS = new URL(
        '../images/GuidedOsScreenshot.png',
        import.meta.url
    ).href
    const imgUrlRestaurantMenu = new URL(
        '../images/MenuCreatorScreenshot.png',
        import.meta.url
    ).href */
    return (
        <section id="portfolio" className="h-fit bg-orange-100">
            <div className="container mx-auto flex flex-col gap-5 p-4 ">
                <div className="flex flex-col gap-5">
                    <h3 className="text-4xl  font-bold text-lime-950">
                        Projects
                    </h3>
                    <p className=" text-lg text-lime-950">
                        The Projects I build always focus on bringing real
                        value!
                    </p>
                    <ul className=" projects-grid gap-5 text-lime-950 lg:grid lg:grid-cols-8">
                        <li className=" col-span-4 flex h-fit w-fit flex-wrap gap-5 rounded-xl p-5 hover:bg-orange-200/30 lg:grid lg:grid-cols-5">
                            <img
                                src={imgUrlSneaktoons}
                                width={'120'}
                                height={'70'}
                                alt="sneaktoonsScreenshot"
                                className="col-span-1 rounded-md"
                            />
                            <div className="projectDetails flex flex-col gap-5 lg:col-span-4">
                                <a
                                    className=" text-stone-900  hover:text-green-900 focus-visible:text-teal-300"
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Restaurant Menue Creator"
                                >
                                    <p className="projectTitle flex items-center font-bold">
                                        Shop-Applicaton: Sneaktoons
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </p>
                                </a>

                                <p className="projectDetailsText h-40">
                                    Sneaktoons is a Online-Shop where people can
                                    buy custom painted Sneakers.
                                </p>
                                <ul className="projectTechnologies group/list flex flex-wrap gap-1 font-light">
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
                        {/* <li className=" group col-span-4 h-fit w-fit gap-5  rounded-xl p-5  hover:bg-orange-200/30 lg:grid lg:grid-cols-5 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <img
                                src={imgUrlGuidedOS}
                                width={'120'}
                                height={'70'}
                                alt="sneaktoonsScreenshot"
                                className="col-span-1 rounded-md"
                            />
                            <div className="projectDetails flex flex-col gap-5 lg:col-span-4">
                                <a
                                    className=" text-stone-900  hover:text-green-900"
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Restaurant Menue Creator"
                                >
                                    <p className="projectTitle flex items-center font-bold">
                                        <span>E-Learning Modul: GuidedOS</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </p>
                                </a>

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
                        <li className=" col-span-4 flex h-fit w-fit flex-wrap gap-5 rounded-xl p-5 hover:bg-orange-200/30 lg:grid lg:grid-cols-5 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <img
                                src={imgUrlRestaurantMenu}
                                width={'120'}
                                height={'70'}
                                alt="RestaurantScreenshot"
                                className="col-span-1 rounded-md"
                            />
                            <div className="projectDetails  flex flex-col gap-5 lg:col-span-4">
                                <a
                                    className=" text-stone-900  hover:text-green-900 focus-visible:text-teal-300"
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Restaurant Menue Creator"
                                >
                                    <p className="projectTitle flex items-center font-bold">
                                        No-Code Tool: Restaurant Menu Creator
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </p>
                                </a>

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
                        </li> */}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Projects

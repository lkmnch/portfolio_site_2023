const About = () => {
    return (
        <section id="about" className="w-fit">
            <div className=" flex w-fit  flex-col items-center  gap-10 px-4 lg:items-start  ">
                <blockquote className="text-4xl  font-bold leading-normal text-lime-950">
                    Hi! I'm Loukmane, <br /> a {''}
                    <span className="relative">
                        <span className='aria-hidden="true" absolute -inset-0.5 block -skew-y-3 bg-lime-950'></span>
                        <span className="relative text-white">developer</span>
                    </span>{' '}
                    based in Germany.
                </blockquote>
                <div className="ABOUT-CONTENT flex flex-col  gap-5">
                    <p className="text-2xl text-lime-950">
                        In 2018, I started my journey into the world of Tech.
                        Throughout my studies, I immersed myself in software
                        engineering and project management, navigating through
                        traditional to agile methodologies.
                    </p>
                    <p className="text-2xl text-lime-950">
                        I developed a solid understanding of economic principles
                        and the strategic application of IT. As an IT consultant
                        at MHP, a Porsche Group company, I got experience in
                        integrating HR-Software into the cloud, showcasing my
                        expertise in frontend technologies.
                    </p>

                    <p className="text-2xl text-lime-950 ">
                        Currently I'm pursuing a Master's in Information Systems
                        Engineering, I aim to further enhance my skills in web
                        development, with a specific focus on software design
                        and architecture.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About

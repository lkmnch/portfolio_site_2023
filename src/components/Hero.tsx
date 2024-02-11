import { Mail } from 'lucide-react'
import About from './About'

const Hero = () => {
    const imgUrl = new URL(
        '../images/Profilbild_Loukmane_Chaou.jpg',
        import.meta.url
    ).href
    return (
        <section className=" bg-orange-100">
            <div
                className="container mx-auto flex h-max flex-wrap items-center justify-center gap-5 p-10 text-center lg:flex-nowrap lg:justify-start lg:text-left "
                id="HERO-CONTAINER"
            >
                <div
                    id="img+socials"
                    className="flex flex-col items-center  gap-5"
                >
                    <img
                        src={imgUrl}
                        alt="about-placeholder"
                        className="w-44 rounded-full border-4 border-stone-900 shadow-lg lg:w-80"
                    />

                    <div className="socials flex items-center gap-3 ">
                        <a
                            aria-label="linkedin"
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/loukmane-chaou-83680219a"
                            className="text-stone-900"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="tabler-icon tabler-icon-brand-linkedin"
                            >
                                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                                <path d="M8 11l0 5"></path>
                                <path d="M8 8l0 .01"></path>
                                <path d="M12 16l0 -5"></path>
                                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                            </svg>
                        </a>
                        <a
                            aria-label="github"
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/lkmnch"
                            className="text-stone-900"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="tabler-icon tabler-icon-brand-github"
                            >
                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                            </svg>
                        </a>
                        <a href="mailto:loukmane.chaou@web.de">
                            <Mail size={40} />
                        </a>
                    </div>
                </div>

                {/* <About /> */}
                {/* <div id='skills' className='flex flex-wrap flex-col items-center gap-5'>
					<p className='text-3xl text-center font-bold text-stone-900'>
						Tech-Stack
					</p>
					<ul className='flex flex-wrap gap-5'>
						<li>
							<img
								src='https://skillicons.dev/icons?i=html,css'
								alt='skill-icon'
							/>
						</li>
						<li>
							<img
								src='https://skillicons.dev/icons?i=js,ts'
								alt='skill-icons'
							/>
						</li>
						<li>
							<img
								src='https://skillicons.dev/icons?i=react,tailwind'
								alt='skill-icons'
							/>
						</li>
					</ul>
				</div> */}
            </div>
        </section>
    )
}

export default Hero

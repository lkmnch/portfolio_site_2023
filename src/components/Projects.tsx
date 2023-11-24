const Projects = () => {
	const imgUrlSneaktoons = new URL(
		"../images/sneaktoonsScreenshot.png",
		import.meta.url
	).href
	return (
		<section id='portfolio' className='bg-orange-100 h-fit'>
			<div className='container mx-auto p-4 flex flex-col gap-5 '>
				<div className='flex flex-col gap-5'>
					<h3 className='text-4xl  font-bold text-lime-950'>Projects</h3>
					<p className=' text-lime-950 text-lg'>
						The Projects I build always focus on bringing real value to
						customers!
					</p>
					<ul className='projects-grid text-lime-950 flex flex-col gap-5'>
						<li className='border-4 border-lime-950 rounded-xl h-fit w-fit p-5 flex flex-wrap gap-5'>
							<img
								src={imgUrlSneaktoons}
								alt='sneaktoonsScreenshot'
								className='w-60 h-60'
							/>
							<div className='projectDetails flex flex-col'>
								<p className='projectTitle font-bold'>
									Shop-Applicaton: Sneaktoons
								</p>
								<p className='projectDetailsText'>
									Sneaktoons is a Online-Shop where people can buy custom
									painted Sneakers.
								</p>
								<p className='projectTechnologies font-light'>
									HTML, TailwindCss, TypeScript, Reactjs
								</p>
							</div>
						</li>
						<li className='border-4 border-lime-950 rounded-xl h-40 p-5'>
							<p className='projectTitle font-bold'>
								E-Learning Modul: GuidedOS
							</p>
							<p className='projectTechnologies font-light'>
								HTML, TailwindCss, TypeScript, Reactjs
							</p>
						</li>
						<li className='border-4 border-lime-950 rounded-xl h-40 p-5'>
							<p className='projectTitle font-bold'>
								No-Code Tool: Restaurant Menu Creator
							</p>
							<p className='projectTechnologies font-light'>
								HTML, TailwindCss, TypeScript, Reactjs
							</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Projects

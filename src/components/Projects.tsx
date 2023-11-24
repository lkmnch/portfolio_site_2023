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
					<ul className='projects-grid text-lime-950 lg:grid lg:grid-cols-8 gap-5'>
						<li className=' hover:bg-orange-200/30 rounded-xl h-fit w-fit p-5 flex flex-wrap gap-5 col-span-4'>
							<img
								src={imgUrlSneaktoons}
								width={"120"}
								height={"70"}
								alt='sneaktoonsScreenshot'
							/>
							<div className='projectDetails flex flex-col'>
								<p className='projectTitle font-bold'>
									Shop-Applicaton: Sneaktoons
								</p>
								<p className='projectDetailsText'>
									Sneaktoons is a Online-Shop where people can buy custom
									painted Sneakers.
								</p>
								<ul className='projectTechnologies font-light flex flex-wrap gap-1'>
									<li>
										<div className='bg-lime-950 rounded-full text-white text-xs flex item-center leading-5 px-3 py-1'>
											HTML
										</div>
									</li>
									<li>
										<div className='bg-lime-950 rounded-full text-white text-xs flex item-center leading-5 px-3 py-1'>
											tailwindcss
										</div>
									</li>
									<li>
										<div className='bg-lime-950 rounded-full text-white text-xs flex item-center leading-5 px-3 py-1'>
											TypeScript
										</div>
									</li>
									<li>
										<div className='bg-lime-950 rounded-full text-white text-xs flex item-center leading-5 px-3 py-1'>
											Reactjs
										</div>
									</li>
								</ul>
							</div>
						</li>
						<li className='hover:bg-orange-200/30 rounded-xl h-40 p-5 col-span-4'>
							<p className='projectTitle font-bold'>
								E-Learning Modul: GuidedOS
							</p>
							<ul className='projectTechnologies font-light flex flex-wrap gap-1'>
								<li>
									<div className='bg-lime-950 rounded-full text-white text-xs flex item-center leading-5 px-3 py-1'>
										HTML
									</div>
								</li>
								<li>
									<div className='bg-lime-950 rounded-full text-white text-xs flex item-center leading-5 px-3 py-1'>
										tailwindcss
									</div>
								</li>
								<li>
									<div className='bg-lime-950 rounded-full text-white text-xs flex item-center leading-5 px-3 py-1'>
										TypeScript
									</div>
								</li>
								<li>
									<div className='bg-lime-950 rounded-full text-white text-xs flex item-center leading-5 px-3 py-1'>
										Reactjs
									</div>
								</li>
							</ul>
						</li>
						<li className='hover:bg-orange-200/30 rounded-xl h-40 p-5 col-span-4'>
							<p className='projectTitle font-bold'>
								No-Code Tool: Restaurant Menu Creator
							</p>
							<ul className='projectTechnologies font-light flex flex-wrap gap-1'>
								<li>
									<div className='bg-lime-950 rounded-full text-white text-xs flex item-center leading-5 px-3 py-1'>
										HTML
									</div>
								</li>
								<li>
									<div className='bg-lime-950 rounded-full text-white text-xs flex item-center leading-5 px-3 py-1'>
										tailwindcss
									</div>
								</li>
								<li>
									<div className='bg-lime-950 rounded-full text-white text-xs flex item-center leading-5 px-3 py-1'>
										TypeScript
									</div>
								</li>
								<li>
									<div className='bg-lime-950 rounded-full text-white text-xs flex item-center leading-5 px-3 py-1'>
										Reactjs
									</div>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Projects

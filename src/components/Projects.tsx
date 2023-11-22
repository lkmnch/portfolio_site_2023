const Projects = () => {
	return (
		<section
			id='portfolio'
			className='bg-gradient-to-b from-blue-400 to-blue-900'>
			<div className='container mx-auto px-4 flex flex-col justify-center items-center h-screen gap-5 '>
				<div className='flex flex-col gap-5'>
					<h3 className='text-4xl text-center font-bold text-white'>
						Portfolio
					</h3>
					<p className='text-center text-white text-lg'>
						The Projects I build always focus on bringing real value to
						customers!
					</p>
					<ul className='projects-grid text-center text-white'>
						<li>Shop-Applicaton: Sneaktoons</li>
						<li>E-Learning Modul: GuidedOS</li>
						<li>No-Code Tool: Restaurant Menu Creator</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Projects

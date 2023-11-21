const Hero = () => {
	const imgUrl = new URL(
		"../images/Profilbild_Loukmane_Chaou.jpg",
		import.meta.url
	).href
	return (
		<section className='bg-gradient-to-b from-blue-400 to-blue-900'>
			<div
				className='container mx-auto px-4 flex flex-col justify-center items-center h-screen gap-5 '
				id='HERO-CONTAINER'>
				<img className='rounded-3xl' src={imgUrl} alt='myImage' />

				<h1 className='text-4xl text-center font-bold text-white'>
					Frontend React Developer
				</h1>
				<p className='text-center text-white'>
					Hi, my name is Loukmane Chaou. I'm a Master Student in Information
					Systems Engineering and a passionate Developer. <br />
					Currently I'm based in Frankfurt am Main, Germany.📍
				</p>

				<div id='skills' className='flex flex-wrap flex-col items-center gap-5'>
					<p className='text-3xl text-center font-bold text-white'>
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
				</div>
			</div>
		</section>
	)
}

export default Hero

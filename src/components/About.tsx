const About = () => {
	const imgUrl = new URL(
		"../images/pexels-karsten-madsen-18105.jpg",
		import.meta.url
	).href
	return (
		<section id='about' className='bg-white'>
			<div className='container mx-auto px-4 flex flex-col justify-center items-center h-screen gap-5 '>
				<div className='ABOUT-CONTENT flex flex-wrap flex-col justify-center items-center gap-5 '>
					<img
						src={imgUrl}
						alt='about-placeholder'
						className='rounded-3xl shadow-lg w-96'
					/>
					<h3 className='text-blue-900 font-bold text-xl'>About me</h3>
					<h4 className='text-blue-900 font-bold text-center'>
						A customer-focused Software Developer, that builds with passion
					</h4>
					<p className='text-center'>
						I bring a solid skill set in HTML, CSS, JavaScript, React, and
						Tailwindcss with me. My expertise lies in designing and maintaining
						responsive websites to ensure a seamless user experience. I
						specialize in crafting dynamic and engaging interfaces through the
						use of clean and optimized code. I excel in collaborative
						environments, thriving as a team player. My ability to work
						effectively with cross-functional teams has contributed to the
						successful delivery of outstanding web applications.
					</p>
				</div>
			</div>
		</section>
	)
}

export default About

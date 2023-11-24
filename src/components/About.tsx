const About = () => {
	return (
		<section id='about' className='w-fit'>
			<div className=' w-fit px-4  flex flex-col  gap-10 items-center lg:items-start  '>
				<blockquote className='text-4xl  font-bold text-lime-950 leading-normal'>
					Hi! I'm Loukmane, <br /> a {""}
					<span className='relative'>
						<span className='block absolute -inset-0.5 -skew-y-3 bg-lime-950 aria-hidden="true"'></span>
						<span className='relative text-white'>developer</span>
					</span>{" "}
					based in Germany.
				</blockquote>
				<div className='ABOUT-CONTENT flex flex-col  gap-5'>
					<p className='text-lime-950 text-2xl'>
						In 2018, I started my journey into the world of Tech. Throughout my
						studies, I immersed myself in software engineering and project
						management, navigating through traditional to agile methodologies.
					</p>
					<p className='text-lime-950 text-2xl'>
						I developed a solid understanding of economic principles and the
						strategic application of IT. As an IT consultant at MHP, a Porsche
						Group company, I got experience in integrating HR-Software into the
						cloud, showcasing my expertise in frontend technologies.
					</p>

					<p className='text-lime-950 text-2xl '>
						Currently pursuing a Master's in Information Systems Engineering, I
						aim to further enhance my skills in web development, with a specific
						focus on software design and architecture.
					</p>
				</div>
			</div>
		</section>
	)
}

export default About

const Blog = () => {
	return (
		<section id='blog' className='bg-orange-100 h-fit '>
			<div className='container mx-auto p-4 flex flex-col  gap-5 '>
				<div className='flex flex-col gap-5'>
					<h3 className='text-4xl  font-bold text-lime-950'>Blog</h3>
					<p className=' text-lime-950 text-lg'>
						I write about stuff I found difficult to help people with the same
						problem and to consildate the knowledge I gained!
					</p>
					<ul className='projects-grid text-lime-950 flex flex-col gap-5'>
						<li className='border-4 border-lime-950 rounded-xl h-40'>
							How does the spreadable operater work? And How to use it
							effectivly
						</li>
						<li className='border-4 border-lime-950 rounded-xl h-40'>
							When to use useState() and when to use useReducer()
						</li>
						<li className='border-4 border-lime-950 rounded-xl h-40'>
							concept of destructuring Objects
						</li>
						<li className='border-4 border-lime-950 rounded-xl h-40'>
							Layout for styling with tailwindcss
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Blog

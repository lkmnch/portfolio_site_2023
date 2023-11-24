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
					<ul className='blog-grid text-lime-950 lg:grid lg:grid-cols-8 gap-5'>
						<li className='hover:bg-orange-200/30 rounded-xl h-fit w-fit p-5 flex flex-wrap gap-5 col-span-4'>
							How does the spreadable operater work? And How to use it
							effectivly
						</li>
						<li className='hover:bg-orange-200/30 rounded-xl h-fit w-fit p-5 flex flex-wrap gap-5 col-span-4'>
							When to use useState() and when to use useReducer()
						</li>
						<li className='hover:bg-orange-200/30 rounded-xl h-fit w-fit p-5 flex flex-wrap gap-5 col-span-4'>
							concept of destructuring Objects
						</li>
						<li className='hover:bg-orange-200/30 rounded-xl h-fit w-fit p-5 flex flex-wrap gap-5 col-span-4'>
							Layout for styling with tailwindcss
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Blog

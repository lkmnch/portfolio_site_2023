import Nav from "./Nav"

const Header = () => {
	return (
		<header className='bg-orange-100 sticky top-5 z-10 '>
			<div className='container mx-auto px-4 py-8 flex  items-center justify-between'>
				<h1 className='text-lime-950 text-xl font-bold '>
					<a href='#'>Loukmane Chaou</a>
				</h1>
				<Nav />
			</div>
		</header>
	)
}

export default Header

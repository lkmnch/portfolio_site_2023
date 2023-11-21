import React from "react"
import Nav from "./Nav"

const Header = () => {
	return (
		<header className='bg-white sticky top-0 z-10 shadow-md'>
			<div className='container mx-auto px-4 py-8 flex flex-wrap items-center justify-between'>
				<h1 className='text-blue-900 text-xl font-bold '>Loukmane Chaou</h1>
				<Nav />
			</div>
		</header>
	)
}

export default Header

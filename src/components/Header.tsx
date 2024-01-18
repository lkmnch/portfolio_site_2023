import Nav from './Nav'

const Header = () => {
    return (
        <header className="sticky top-0 z-10 bg-orange-100 ">
            <div className="bg-red-700 text-center text-white">
                This Page is currently Under Construction
            </div>
            <div className="container mx-auto flex items-center justify-between  px-4 py-8">
                <h1 className="text-xl font-bold text-lime-950 ">
                    <a href="#">Loukmane Chaou</a>
                </h1>
                <Nav />
            </div>
        </header>
    )
}

export default Header

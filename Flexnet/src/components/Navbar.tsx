import Button from "./Button";

const NavBar = () => {
    return (
        <nav className="flex flex-row justify-between p-4">
            <div>
                <h1 className="font-serif text-2xl font-bold hover:font-sans">Flexnet</h1>
            </div>
            <ul className="hidden md:flex md:flex-row md:justify-between md:p-1 md:space-x-6">
                <li className="font-serif hover:text-gray-500"><a href="/similar">Find similar</a></li>
                <li className="font-serif hover:text-gray-500"><a href="#topgenres">Top genres</a></li>
                <li className="font-serif hover:text-gray-500"><a href="/topchoices">Top choices</a></li>
            </ul>
            <div>
                <Button text="Get recommendations" color="black" href="#form-section" />
            </div>
        </nav>
    );
};

export default NavBar;

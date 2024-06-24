import Button from "./Button";

function NavBar() {
    const onFunction = () => {
        console.log('clicked');
    }

    return (
    <nav className="flex flex-row justify-start">
        <div>
            <h1 className="font-serif text-2xl font-bold hover:font-sans">Movies</h1>
        </div>
        <div>
        <ul className="flex flex-row space-x-6 justify-between">
          <li className="font-serif"><a href="/similar">Find similar</a></li>
          <li className="font-serif"><a href="/topgenres">Top genres</a></li>
          <li className="font-serif"><a href="/topchoices">Top choices</a></li>
        </ul>
        </div>
        <div>
        <Button text="Get recommendations" color="black" onClick={onFunction}/>
        </div>
    </nav>
    );
}

export default NavBar;
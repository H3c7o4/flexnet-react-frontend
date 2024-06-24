import Button from "./Button";

function NavBar() {
    const onFunction = () => {
        console.log('clicked');
    }

    return (
    <nav>
        <div>
            <h1 className="font-serif text-2xl font-bold hover:font-sans">Movies</h1>
        </div>
        <ul className="flex flex-row justify-between">
          <li className="font-serif"><a href="/similar">Find similar</a></li>
          <li className="font-serif"><a href="/topgenres">Top genres</a></li>
          <li className="font-serif"><a href="/topchoices">Top choices</a></li>
          <Button text="Get recommendations" color="black" onClick={onFunction}/>
        </ul>
        
    </nav>
    );
}

export default NavBar;
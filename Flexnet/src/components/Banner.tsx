function Banner() {
    return (
        <div 
            className="bg-local text-black p-4 grid justify-items-center"
            style={{ backgroundImage: "url('/assets/images/movie3.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
         }}>
            <h1 className="font-serif text-3xl font-bold text-xl ">Discover movies like the Ones you love</h1>
            <p>Explore a vast collection of films for you!</p>
        </div>
    );
}

export default Banner;
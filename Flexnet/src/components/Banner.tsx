function Banner() {
    return (
        <div 
            className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center p-8 my-8"
            style={{ backgroundImage: "url('https://media.istockphoto.com/id/1126825069/photo/popcorn-in-a-glass-plate-on-the-background-of-the-tv-color-bright-lighting-blue-and-red.jpg?s=612x612&w=0&k=20&c=AzMYpQBscT7_kmm6u5XnN-NE999axhNr_qUaHuA93l8=')" }}
        >
            <div className="p-8 text-white rounded-xl shadow-lg text-center w-full max-w-full mx-2">
                <h1 className="text-4xl font-bold mb-4">Discover movies like the Ones you love</h1>
                <p className="text-lg mb-8">Explore a vast collection of films for you!</p>
                <a href="#movies-section" rel="noopener noreferrer">Explore Now</a>
            </div>
        </div>
    );
}

export default Banner;

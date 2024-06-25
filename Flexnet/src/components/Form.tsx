function Form() {
    return (
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[800px] bg-white">
                <h1 className="font-bold font-serif text-3xl mb-3">Search for Movies</h1>
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                        <div>
                            <label htmlFor="movieTitle1" className="mb-3 block text-base font-medium text-[#07074D]">
                                Movie Title 1
                            </label>
                            <input 
                                type="text" 
                                name="movieTitle1" 
                                id="movieTitle1" 
                                placeholder="Enter a movie title"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                            />
                        </div>
                        <div>
                            <label htmlFor="movieTitle2" className="mb-3 block text-base font-medium text-[#07074D]">
                                Movie Title 2
                            </label>
                            <input 
                                type="text" 
                                name="movieTitle2" 
                                id="movieTitle2" 
                                placeholder="Enter a movie title"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                            />
                        </div>
                        <div>
                            <label htmlFor="movieTitle3" className="mb-3 block text-base font-medium text-[#07074D]">
                                Movie Title 3
                            </label>
                            <input 
                                type="text" 
                                name="movieTitle3" 
                                id="movieTitle3" 
                                placeholder="Enter a movie title"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                            />
                        </div>
                        <div>
                            <label htmlFor="movieTitle4" className="mb-3 block text-base font-medium text-[#07074D]">
                                Movie Title 4
                            </label>
                            <input 
                                type="text" 
                                name="movieTitle4" 
                                id="movieTitle4" 
                                placeholder="Enter a movie title"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                            />
                        </div>
                        <div>
                            <label htmlFor="movieTitle5" className="mb-3 block text-base font-medium text-[#07074D]">
                                Movie Title 5
                            </label>
                            <input 
                                type="text" 
                                name="movieTitle5" 
                                id="movieTitle5" 
                                placeholder="Enter a movie title"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                            />
                        </div>
                        <div>
                            <label htmlFor="favoriteGenres" className="mb-3 block text-base font-medium text-[#07074D]">
                                Favorite Genres
                            </label>
                            <input 
                                type="text" 
                                name="favoriteGenres" 
                                id="favoriteGenres" 
                                placeholder="e.g., Action, Comedy, Drama"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            className="hover:shadow-form w-full rounded-md bg-black py-3 px-8 text-center text-base font-semibold text-white outline-none">
                            Get Recommendations
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;
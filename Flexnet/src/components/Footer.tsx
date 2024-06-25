import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Flexnet Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">About Flexnet</h3>
                        <p className="text-gray-400">Flexnet is an innovative movie recommendation system dedicated to providing the best personalized movie suggestions for all movie enthusiasts. Our mission is to enhance your movie-watching experience by offering curated recommendations based on your preferences.</p>
                    </div>

                    {/* Useful Links Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Useful Links</h3>
                        <ul className="text-gray-400">
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Home</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Recommendations</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Pricing</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">About</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Contact</h3>
                        <ul className="text-gray-400">
                            <li className="mb-2">Email: support@flexnet.com</li>
                            <li className="mb-2">Phone: +123 456 7890</li>
                            <li className="mb-2">Address: Douala, Cameroon</li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                {/* Facebook SVG */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6c0-1.085.232-1.511 1.285-1.511H18V0h-2.285C12.54 0 11 1.305 11 4.05V8z"/></svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                {/* Instagram SVG */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.384 2.163 15.004 2.163 12s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.015-4.947.072-1.28.058-2.41.278-3.29 1.158-.88.88-1.1 2.01-1.158 3.29-.057 1.28-.072 1.688-.072 4.947s.015 3.667.072 4.947c.058 1.28.278 2.41 1.158 3.29.88.88 2.01 1.1 3.29 1.158 1.28.057 1.688.072 4.947.072s3.667-.015 4.947-.072c1.28-.058 2.41-.278 3.29-1.158.88-.88 1.1-2.01 1.158-3.29.057-1.28.072-1.688.072-4.947s-.015-3.667-.072-4.947c-.058-1.28-.278-2.41-1.158-3.29-.88-.88-2.01-1.1-3.29-1.158-1.28-.057-1.688-.072-4.947-.072zm0 5.838a6.163 6.163 0 1 0 0 12.327 6.163 6.163 0 0 0 0-12.327zm0 10.163a3.975 3.975 0 1 1 0-7.95 3.975 3.975 0 0 1 0 7.95zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z"/></svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                {/* Twitter SVG */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.555-2.005.959-3.127 1.184-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.923 0 .386.043.763.128 1.124C7.688 8.094 4.064 6.13 1.64 3.161c-.423.728-.666 1.573-.666 2.475 0 1.71.87 3.213 2.191 4.096-.807-.026-1.566-.248-2.228-.616v.062c0 2.385 1.698 4.374 3.946 4.828-.413.112-.849.172-1.296.172-.317 0-.626-.031-.929-.088.627 1.956 2.445 3.377 4.6 3.415-1.684 1.32-3.808 2.107-6.115 2.107-.397 0-.788-.023-1.174-.068 2.179 1.398 4.768 2.213 7.548 2.213 9.057 0 14.007-7.496 14.007-13.986 0-.213-.004-.426-.014-.637.961-.693 1.797-1.562 2.457-2.549z"/></svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                {/* LinkedIn SVG */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.791 0 0 .774 0 1.728v20.543C0 23.227.791 24 1.77 24h20.46C23.208 24 24 23.227 24 22.271V1.728C24 .774 23.208 0 22.23 0zM7.13 20.452H3.56V9.21h3.57v11.242zM5.346 7.833c-1.141 0-2.063-.93-2.063-2.075 0-1.145.922-2.075 2.063-2.075 1.141 0 2.063.93 2.063 2.075-.001 1.145-.922 2.075-2.063 2.075zM20.452 20.452h-3.57v-5.77c0-1.376-.028-3.147-1.918-3.147-1.919 0-2.214 1.5-2.214 3.048v5.869H9.18V9.21h3.422v1.534h.048c.476-.899 1.637-1.848 3.368-1.848 3.601 0 4.268 2.368 4.268 5.448v6.108z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center text-gray-400 text-sm mt-8">
                    &copy; {new Date().getFullYear()} Flexnet. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;

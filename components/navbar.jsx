const Navbar = () => {
  return (
    <div className="bg-gray-50 shadow-lg sticky">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-8">
          <div className="flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              width:'400px',
              height:'180px',
              backgroundImage: "url('/images/farigh.png')",
            }}
          ></div>
          </div>
          <div className="hidden sm:flex sm:items-center">
            <a href="#" className="text-black text-xl font-semibold hover:text-yellow-600 hover:scale-110 transform transition duration-300 mr-8">
              Products
            </a>
            <a href="#" className="text-black text-xl font-semibold hover:text-yellow-600 hover:scale-110 transform transition duration-300 mr-8">
              Marketplace
            </a>
            <a href="/dashboard" className="text-black text-xl font-semibold hover:text-yellow-600 hover:scale-110 transform transition duration-300 mr-8">
              Partners
            </a>
            <a href="/login" className="text-black text-xl font-semibold hover:text-yellow-600 hover:scale-110 transform transition duration-300">
              Pricing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

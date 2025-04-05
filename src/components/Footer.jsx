const Footer = () => (
  <footer className="bg-gray-800 p-4 text-white pt-10">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
      {/* Column 1 */}
      <div className="flex justify-center md:justify-start items-center">
        <div className="font-bold text-lg uppercase whitespace-nowrap font-unit">
          <div>
            DeRain <br /> Interiors
          </div>
        </div>
      </div>

      {/* Column 2 */}
      <div>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">Media Kit</a></li>
          <li><a href="#" className="hover:underline">Newsletter</a></li>
          <li><a href="#" className="hover:underline">Reader Services</a></li>
          <li><a href="#" className="hover:underline">Subscriptions</a></li>
          <li><a href="#" className="hover:underline">Jobs in Design</a></li>
          <li><a href="#" className="hover:underline">Editorial Submissions</a></li>
          <li><a href="#" className="hover:underline">Contact Us</a></li>
          <li><a href="#" className="hover:underline">SANDOW Careers</a></li>
        </ul>
      </div>

      {/* Column 3 */}
      <div>
        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">About Us</a></li>
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Terms of Service</a></li>
        </ul>
      </div>

      {/* Column 4 */}
      <div>
        <h3 className="font-semibold text-lg mb-4">Connect with Us</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">Facebook</a></li>
          <li><a href="#" className="hover:underline">Twitter</a></li>
          <li><a href="#" className="hover:underline">Instagram</a></li>
        </ul>
      </div>
    </div>

    {/* Copyright */}
    <div className="text-center mt-8">
      <p>&copy; {new Date().getFullYear()} Ali Peter. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;

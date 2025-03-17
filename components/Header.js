export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/">
          <img className="h-6 aspect-auto" src="/images/logo/logo.png"></img>
        </a>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-gray-800 hover:text-blue-600">
              หน้าแรก
            </a>
          </li>

          <li>
            <a href="/contact" className="text-gray-800 hover:text-blue-600">
              ติดต่อเรา
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

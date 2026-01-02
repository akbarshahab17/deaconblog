import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <footer className="bg-neutral-primary-soft rounded-base shadow-xs border border-default m-4 bottom-0">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-body sm:text-center">© 2030 <Link to="https://flowbite.com/" className="hover:underline">Deacon Blog™</Link>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
              <li>
                  <Link to="/about" className="hover:underline me-4 md:me-6">About</Link>
              </li>
              <li>
                  <Link to="/featured" className="hover:underline me-4 md:me-6">Featured</Link>
              </li>
          </ul>
          </div>
      </footer>
    </div>
  )
}

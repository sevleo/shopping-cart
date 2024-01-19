import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav id="navigation" className="shadow-md">
      <ul className="ml-auto mr-auto flex h-28 max-w-screen-xl items-center justify-end gap-4 p-3">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/collections">Collections</Link>
        </li>
        <li>
          <Link to="/collections">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

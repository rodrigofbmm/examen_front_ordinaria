// components/Header.tsx
import { FunctionComponent } from "preact";

const Header: FunctionComponent = () => {
  return (
    <header className="header">
      <h1>Mi App Harry Potter</h1>
      <nav>
        <ul>
          <li><a href="/">todo</a></li>
          <li><a href="/favorites">favoritos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
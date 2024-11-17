import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const [searchKey, setSearchkey] = useState<string>("");
  const navigate = useNavigate();

  const search = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      navigate(`/search/${searchKey}`);
      setSearchkey("");
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchkey(e.target.value);
  };

  return (
    <header className="header">
      <Link to="/">
        <img
          src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
          alt="netflix-font"
        />
      </Link>
      <div id="navigation" className="navigation">
        <nav>
          <ul>
            <li><Link to="/myList">My List</Link></li>
          </ul>
        </nav>
      </div>
      <div id="search" className="search">
        <input type="text" value={searchKey} name='searchkey' placeholder="Search for a title..." onChange={onChange} onKeyDown={search} />
      </div>
    </header>
  )
}

export default Header;
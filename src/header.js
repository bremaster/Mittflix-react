import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {
  constructor() {
    super();
    this.state = {
      searchkey: ''
    }
  }

  componentDidMount() {
    this.setState({searchkey: ''});
  }

  search = (event) => {
    if(event.key == 'Enter'){
      this.props.history.push('/search/'+this.state.searchkey);
      this.setState({searchkey: ''});
    }
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <header className="header">
        <Link to="/">
          <img
            src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
            alt="netflix-font"
            border="0"
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
          <input type="text" value={this.state.searchkey}  name='searchkey' placeholder="Search for a title..." onChange={this.onChange} onKeyPress={this.search} />
        </div>
      </header>
    )
  }
}

export default Header;
import React, { Component, PropTypes } from 'react';
import BookItemInput from './BookItemInput';

class Header extends Component {
  handleSave(title, author) {
    if (title.length !== 0) {
      this.props.addBook(title, author);
    }
  }

  render() {
    return (
      <header>
        <BookItemInput placeholder="Add New Book" newBook onSave={this.handleSave.bind(this)}/>
      </header>
    )
  }
}

Header.PropTypes = {
  addBook: PropTypes.func.isRequired
}

export default Header;
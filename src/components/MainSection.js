import React, { Component, PropTypes } from 'react';
import BookItem from './BookItem';

class MainSection extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { books } = this.props;

    return (
      <section>
        <ul>
          { books.map(book => 
            <BookItem book={book}  key={book.id} />
          )}
        </ul>
      </section>

    )
  }
}

export default MainSection
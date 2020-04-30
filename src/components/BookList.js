import React, { Component } from 'react'

class BookList extends Component {
    render() { 
        return ( 
            <div className="book-list">
                <ul>
                    <li>Flowers Garden</li>
                    <li>Your Way to Happiness</li>
                    <li>The Last Moments</li>
                </ul>
            </div>
         );
    }
}
 
export default BookList;
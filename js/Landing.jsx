import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.searchHandler = this.searchHandler.bind(this);
    }

    /**
     * @method searchHandler
     * @description filters movie json by title to match input
     * will navigate to first match's details page
    */
    searchHandler(event) {
        const input = event.target.value;
        // input >= 3 and pressed Enter
        if (input.length >= 3 && event.keyCode === 13) {
            // filtering logic
            let arrs = this.props.shows.filter(
                (show) => {
                    return show.title.toLowerCase()
                        .indexOf(input.toLowerCase()) !== -1;
                })
                .map((arr) => arr.imdbID);
            // navigation logic
            if (arrs[0] !== undefined) {
                window.location.href = `/details/${arrs[0]}`;
            } else {
                event.target.value = 'No Results! Try Again!';
            }
        }
    }

    render() {
        return (
            <div className='landing'>
                <Header />
                <input type='text' onKeyDown={this.searchHandler} placeholder='Search and Press Enter' />
                <Link to='/search'>or Browse All</Link>
            </div>
        );
    }
}

export default Landing;

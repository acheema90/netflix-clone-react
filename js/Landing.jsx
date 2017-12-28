import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchTerm } from './actionCreators';
import Header from './Header';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.searchHandler = this.searchHandler.bind(this);
        this.handleSearchTermChange = this.props.handleSearchTermChange;
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
                <input value={this.props.searchTerm} onChange={this.handleSearchTermChange} type='text' onKeyDown={this.searchHandler} placeholder='Search and Press Enter' />
                <Link to='/search'>or Browse All</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { searchTerm: state.searchTerm };
};

const mapDispatchToProps = (dispatch) => {
    return({
        handleSearchTermChange(event) {
            dispatch(setSearchTerm(event.target.value));
        }
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);

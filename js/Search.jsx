import React, { Component } from 'react';
import ShowCard from './ShowCard';
import Header from './Header';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        };
        this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    }

    handleSearchTermChange(event) {
        // don't modify state directly, use setState
        this.setState({searchTerm: event.target.value});
    }

    // every react Component class must have a render method
    // and the render method must return markup
    render() {
        return (
            <div className='search'>
                <Header
                    showSearch={true}
                    searchTerm={this.state.searchTerm} onChangeHandler={this.handleSearchTermChange}
                />
                <div>
                    {this.props.shows
                        .filter(show =>
                            `${show.title} ${show.description}`
                            .toLowerCase()
                            .indexOf(this.state.searchTerm.toLowerCase()) !== -1
                        )
                        .map(show => <ShowCard key={show.imdbID} show={show} /> )}
                </div>
            </div>
        );
    }
}

export default Search;

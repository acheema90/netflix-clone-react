import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchTerm } from './actionCreators';
import ShowCard from './ShowCard';
import Header from './Header';

class Search extends Component {
    constructor(props) {
        super(props);
        this.handleSearchTermChange = this.props.handleSearchTermChange;
    }

    // every react Component class must have a render method
    // and the render method must return markup
    render() {
        return (
            <div className='search'>
                <Header
                    showSearch={true}
                    searchTerm={this.props.searchTerm}
                    onChangeHandler={this.handleSearchTermChange}
                />
                <div>
                    {this.props.shows
                        .filter(show =>
                            `${show.title} ${show.description}`
                            .toLowerCase()
                            .indexOf(this.props.searchTerm.toLowerCase()) !== -1
                        )
                        .map(show => <ShowCard key={show.imdbID} show={show} /> )}
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);

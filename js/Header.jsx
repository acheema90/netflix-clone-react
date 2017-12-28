import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    let utilSpace;
    if (props.showSearch) {
        utilSpace = (
            <input
                onChange={props.onChangeHandler}
                value={props.searchTerm}
                type="text" placeholder={props.searchTerm ? props.searchTerm : 'Search'}
            />
        );
    } else {
        utilSpace = (
            <h2>
                <Link to='/Search'>
                    Back
                </Link>
            </h2>
        );
    }
    return (
        <header>
            <h1>
                <Link to='/'>
                    svideo
                </Link>
            </h1>
            {utilSpace}
        </header>
    );
};

export default Header;

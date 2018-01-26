import React from 'react';
import { shallow } from 'enzyme';
import preload from '../../data';
import Search, { Unwrapped as UnwrappedSearch} from '../Search';
import ShowCard from '../ShowCard';

// jest gives us istanbul coverage for free!

test('Search renders correctly', () => {
    const component = shallow(<UnwrappedSearch  shows={preload.shows}
         searchTerm=''/>);
    expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows', () => {
    const component = shallow(<UnwrappedSearch shows={preload.shows}
         searchTerm=''/>);
    expect(component.find(ShowCard).length)
        .toEqual(preload.shows.length);
});

test('Search should render correct amount of shows based on search term', () => {
    const searchTerm = 'black';
    const component = shallow(<UnwrappedSearch shows={preload.shows}
         searchTerm={searchTerm}/>);
    // component.find('input').simulate('change', { target: { value:searchTerm }});
    const showCount = preload.shows.filter(show =>
        `${show.title} ${show.description}`
        .toLowerCase()
        .indexOf(searchTerm.toLowerCase()) !== -1
    );
    expect(component.find(ShowCard).length)
        .toEqual(showCount.length);
});

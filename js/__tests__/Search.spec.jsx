import React from 'react';
import { shallow } from 'enzyme';
import preload from '../../data';
import Search from '../Search';
import ShowCard from '../ShowCard';

// jest gives us istanbul coverage for free! 

test('Search renders correctly', () => {
    const component = shallow(<Search />);
    expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows', () => {
    const component = shallow(<Search />);
    expect(component.find(ShowCard).length)
        .toEqual(preload.shows.length);
});

test('Search should render correct amount of shows based on search term', () => {
    const component = shallow(<Search />);
    const searchTerm = 'black';
    component.find('input').simulate('change', { target: { value:searchTerm }});
    const showCount = preload.shows.filter(show =>
        `${show.title} ${show.description}`
        .toLowerCase()
        .indexOf(searchTerm.toLowerCase()) !== -1
    );
    expect(component.find(ShowCard).length)
        .toEqual(showCount.length);
});

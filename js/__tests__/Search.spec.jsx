import React from 'react';
import { shallow, render } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../store';
import { setSearchTerm } from '../actionCreators';
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
    const searchWord = 'black';
    store.dispatch(setSearchTerm(searchWord));
    const component = render(
        <Provider store={store}>
            <MemoryRouter>
                <Search shows={preload.shows} searchTerm={searchWord} />
            </MemoryRouter>
        </Provider>
     );
    const showCount = preload.shows.filter(show =>
        `${show.title} ${show.description}`
        .toLowerCase()
        .indexOf(searchWord.toLowerCase()) !== -1
    );
    expect(component.find('.show-card').length)
        .toEqual(showCount.length);
});

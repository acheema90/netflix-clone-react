import reducers from '../reducers';

test('SET_SEARCH_TERM', () => {
    const state = reducers(
        { searchTerm: '', apiData: {} },
        { type: 'SET_SEARCH_TERM', payload: 'black'}
    );
    expect(state).toEqual({ searchTerm: 'black', apiData: {} });
});

test('ADD_API_DATA', () => {
    const state = reducers(
        { searchTerm: '', apiData: {} },
        {
            type: 'ADD_API_DATA',
            payload: {
                rating: '1.1',
                title: 'Westworld',
                year: '2016–',
                description: 'Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.',
                poster: 'ww.jpg',
                imdbID: 'tt0475784',
                trailer: 'https://www.youtube-nocookie.com/embed/eX3u0IlBBO4?rel=0&amp;control=0&amp;showinfo=0'
            }
        }
  );
  expect(state).toEqual({
      searchTerm: '',
      apiData: {
          tt0475784: {
            rating: '1.1',
            title: 'Westworld',
            year: '2016–',
            description: 'Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.',
            poster: 'ww.jpg',
            imdbID: 'tt0475784',
            trailer: 'https://www.youtube-nocookie.com/embed/eX3u0IlBBO4?rel=0&amp;control=0&amp;showinfo=0'
          }
      }
  });
});

test('ADD_API_DATA with two shows', () => {
  const state = reducers(
    {
        searchTerm: '',
        apiData: {
            tt0475784: {
                rating: '1.1',
                title: 'Westworld',
                year: '2016–',
                description: 'Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.',
                poster: 'ww.jpg',
                imdbID: 'tt0475784',
                trailer: 'https://www.youtube-nocookie.com/embed/eX3u0IlBBO4?rel=0&amp;control=0&amp;showinfo=0'
            }
        }
    },
    {
      type: 'ADD_API_DATA',
      payload: {
        rating: '6.2',
        title: 'Game of Thrones',
        year: '2011–',
        description: 'Nine noble families fight for control over the mythical lands of Westeros, while a forgotten race returns after being dormant for thousands of years.',
        poster: 'got.jpg',
        imdbID: 'tt0944947',
        trailer: 'https://www.youtube-nocookie.com/embed/giYeaKsXnsI?rel=0&amp;control=0&amp;showinfo=0'
      }
    }
  );
  expect(state).toEqual({
    searchTerm: '',
    apiData: {
        tt0475784: {
            rating: '1.1',
            title: 'Westworld',
            year: '2016–',
            description: 'Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.',
            poster: 'ww.jpg',
            imdbID: 'tt0475784',
            trailer: 'https://www.youtube-nocookie.com/embed/eX3u0IlBBO4?rel=0&amp;control=0&amp;showinfo=0'
      },
      tt0944947: {
          rating: '6.2',
          title: 'Game of Thrones',
          year: '2011–',
          description: 'Nine noble families fight for control over the mythical lands of Westeros, while a forgotten race returns after being dormant for thousands of years.',
          poster: 'got.jpg',
          imdbID: 'tt0944947',
          trailer: 'https://www.youtube-nocookie.com/embed/giYeaKsXnsI?rel=0&amp;control=0&amp;showinfo=0'
     }
    }
  });
});

import { setSearchTerm, addApiData } from '../actionCreators';

test('setSearchTerm', () => {
    expect(setSearchTerm('New York')).toMatchSnapshot();
})

test('addApiData', () => {
    expect(
        addApiData({
            "title": "Stranger Things",
            "year": "2016–",
            "description": "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying forces in order to get him back.",
            "poster": "st.jpg",
            "imdbID": "tt4574334",
            "trailer": "https://www.youtube-nocookie.com/embed/9Egf5U8xLo8?rel=0&amp;control=0&amp;showinfo=0",
            "rating": "8.6"
        })
    ).toMatchSnapshot();
})

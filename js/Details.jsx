import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Spinner from './Spinner';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiData: {
                rating: ''
            }
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/${this.props.show.imdbID}`)
            .then((response) => {
                this.setState({apiData: response.data});
            });
    }

    render() {
        const { title, description, year, poster, trailer } = this.props.show;
        let ratingComponent;
        if (this.state.apiData.rating) {
            ratingComponent = <h3>{this.state.apiData.rating}</h3>;
        } else {
            ratingComponent = <Spinner/>;
        }
        return (
            <div className="details">
                <Header />
                <section>
                    <h1>{title}</h1>
                    <h2>{year}</h2>
                    {ratingComponent}
                    <img src={`/public/img/posters/${poster}`} alt={`Poster for ${title}`} />
                    <p>{description}</p>
                </section>
                <div>
                    <iframe
                        src={trailer}
                        frameBorder="0"
                        allowFullScreen
                        title={`Trailer for ${title}`}
                     />
                </div>
            </div>
        );
    }
}

export default Details;

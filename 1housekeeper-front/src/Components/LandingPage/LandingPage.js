import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import CardDecks from './CardDecks';

class LandingPage extends React.Component {
    render() {
        return (
            <Jumbotron>
                <CardDecks />
            </Jumbotron>
        )
    }
}

export default LandingPage;
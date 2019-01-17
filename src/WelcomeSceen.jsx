import React, { Component } from 'react';
import './welcomeScreen.css';

class WelcomeScreen extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleAnyKey, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleAnyKey, false);
  }

  handleAnyKey = (event) => {
    const { history } = this.props;
    if (event.keyCode === 13) {
      history.push({
        pathname: '/item',
      });
    }
  }

  render() {
    return (
      <div className="transition-item list-page">
        <section className="splash-screen load">
          <div className="title-wrapper">
            <h1 className="title title-top">
              <span className="big">S</span>
            oftware
            </h1>
            <h1 className="title title-bottom">
              <span className="big">E</span>
            nginee
              <span className="big">R</span>
            </h1>
          </div>

          <div className="buttons">
            <a className="text purple-with-blue">Nguyen Minh Tien</a>
            <span className="text grey-with-red">Press ENTER to continue...</span>
          </div>

          <div className="bottom">
            <a href="mailto:linxea.linxea@gmail.com">
              <span className="yellow">©</span>
              <span className="yellow-with-darkyellow"> TIEN</span>
            </a>
            <div className="credit grey-with-red">
            INSERT COIN
              {' '}
              <span className="yellow-with-darkyellow">0</span>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default WelcomeScreen;

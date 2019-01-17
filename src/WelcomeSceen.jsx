import React, { Component } from 'react';
import './welcomeScreen.css';

class App extends Component {
  goToItem = () => {
    const { history } = this.props;
    history.push({
      pathname: '/item',
    });
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
            <div role="button"
              tabIndex="-1"
              className="text purple-with-blue"
              onClick={this.goToItem}
            >
            Push start button
            </div>
            <span className="text grey-with-red">One Player</span>
            <span className="text grey-with-red">or</span>
            <span className="text grey-with-red">Player 1 vs Player 2</span>
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

export default App;

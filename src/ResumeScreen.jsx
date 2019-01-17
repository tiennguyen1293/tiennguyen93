import React, { Component } from 'react';

class ResumeScreen extends Component {
  goBack = () => {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    return (
      <div role="button"
        tabIndex="-1"
        className="transition-item detail-page"
        onClick={this.goBack}
      >
        Resume Screen
      </div>
    );
  }
}

export default ResumeScreen;

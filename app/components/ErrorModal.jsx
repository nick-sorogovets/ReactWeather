import React, { Component } from 'react';

class ErrorModal extends Component {
  static propTypes = {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired,
  }

  static get defaultProps() {
    return {
      title: 'Error',
      message: 'Something went wrong!',
    }
  }

  componentDidMount() {
    const modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }

  render() {
    const { title, message } = this.props;
    return (
      <div
        id="error-modal"
        className="reveal tiny text-center"
        data-reveal
      >
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            OK
          </button>
        </p>
      </div>
    );
  }
}

export default ErrorModal;

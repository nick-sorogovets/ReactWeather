import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

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
    const { title, message } = this.props;

    const modalMarkup = (
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
    const $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    const modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }

  render() {

    return (
      <div></div>
    )
  }
}

export default ErrorModal;

import React, { PureComponent } from 'react';
//import { Test } from './ContactPage.styles';

class ContactPage extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidMount = () => {
    console.log('ContactPage mounted');
  }

  static getDerivedStateFromError(error) {
    // getDerivedStateFromError -> Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
  }

  getDerivedStateFromProps = (nextProps, prevState) => {
    console.log('ContactPage getDerivedStateFromProps', nextProps, prevState);
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('ContactPage getSnapshotBeforeUpdate', prevProps, prevState);
  }

  componentDidUpdate = () => {
    console.log('ContactPage did update');
  }

  componentWillUnmount = () => {
    console.log('ContactPage will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="ContactPageWrapper">
        Test content
      </div>
    );
  }
}

ContactPage.propTypes = {
  // bla: PropTypes.string,
};

ContactPage.defaultProps = {
  // bla: 'test',
};

export default ContactPage;

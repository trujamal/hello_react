import React, { PureComponent } from 'react';
//import { Test } from './AboutPage.styles';

class AboutPage extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidMount = () => {
    console.log('AboutPage mounted');
  }

  static getDerivedStateFromError(error) {
    // getDerivedStateFromError -> Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
  }

  getDerivedStateFromProps = (nextProps, prevState) => {
    console.log('AboutPage getDerivedStateFromProps', nextProps, prevState);
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('AboutPage getSnapshotBeforeUpdate', prevProps, prevState);
  }

  componentDidUpdate = () => {
    console.log('AboutPage did update');
  }

  componentWillUnmount = () => {
    console.log('AboutPage will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="AboutPageWrapper">
        Test content
      </div>
    );
  }
}

AboutPage.propTypes = {
  // bla: PropTypes.string,
};

AboutPage.defaultProps = {
  // bla: 'test',
};

export default AboutPage;

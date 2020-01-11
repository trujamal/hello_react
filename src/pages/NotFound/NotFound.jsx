import React, { PureComponent } from 'react';
//import { Test } from './NotFound.styles';

class NotFound extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidMount = () => {
    console.log('NotFound mounted');
  }

  static getDerivedStateFromError(error) {
    // getDerivedStateFromError -> Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
  }

  getDerivedStateFromProps = (nextProps, prevState) => {
    console.log('NotFound getDerivedStateFromProps', nextProps, prevState);
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('NotFound getSnapshotBeforeUpdate', prevProps, prevState);
  }

  componentDidUpdate = () => {
    console.log('NotFound did update');
  }

  componentWillUnmount = () => {
    console.log('NotFound will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="NotFoundWrapper">
        ERROR 404
      </div>
    );
  }
}

NotFound.propTypes = {
  // bla: PropTypes.string,
};

NotFound.defaultProps = {
  // bla: 'test',
};

export default NotFound;

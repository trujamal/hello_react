import React, { PureComponent } from 'react';
//import { Test } from './ProjectPage.styles';

class ProjectPage extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidMount = () => {
    console.log('ProjectPage mounted');
  }

  static getDerivedStateFromError(error) {
    // getDerivedStateFromError -> Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
  }

  getDerivedStateFromProps = (nextProps, prevState) => {
    console.log('ProjectPage getDerivedStateFromProps', nextProps, prevState);
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('ProjectPage getSnapshotBeforeUpdate', prevProps, prevState);
  }

  componentDidUpdate = () => {
    console.log('ProjectPage did update');
  }

  componentWillUnmount = () => {
    console.log('ProjectPage will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="ProjectPageWrapper">
        Test content
      </div>
    );
  }
}

ProjectPage.propTypes = {
  // bla: PropTypes.string,
};

ProjectPage.defaultProps = {
  // bla: 'test',
};

export default ProjectPage;

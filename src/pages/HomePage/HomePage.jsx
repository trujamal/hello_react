import React, { PureComponent } from 'react';
import {Typography} from 'antd';
// import PropTypes from 'prop-types';
import { HomePageWrapper,HomePageGroup } from './HomePage.styles.js';

const {Title, Text, Paragraph} = Typography;

class HomePage extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidMount = () => {
    console.log('HomePage mounted');
  }

  static getDerivedStateFromError(error) {
    // getDerivedStateFromError -> Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
  }

  getDerivedStateFromProps = (nextProps, prevState) => {
    console.log('HomePage getDerivedStateFromProps', nextProps, prevState);
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('HomePage getSnapshotBeforeUpdate', prevProps, prevState);
  }

  componentDidUpdate = () => {
    console.log('HomePage did update');
  }

  componentWillUnmount = () => {
    console.log('HomePage will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <HomePageWrapper className="HomePageWrapper">
        <HomePageGroup>
          <Title>This is stupid</Title>
          <Text> Maybe he needs a bit of help here</Text>
          <Paragraph>He could be my ex wife for all i know though</Paragraph>
        </HomePageGroup>
      </HomePageWrapper>
    );
  }
}

HomePage.propTypes = {
  // bla: PropTypes.string,
};

HomePage.defaultProps = {
  // bla: 'test',
};

export default HomePage;

import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import { NavigationBarWrapper } from './NavigationBar.styles.js';

const { Header } = Layout;

class NavigationBar extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidMount = () => {
    console.log('NavigationBar mounted');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <NavigationBarWrapper>
          <Header>My Header</Header>
      </NavigationBarWrapper>
    );
  }
}

NavigationBar.propTypes = {
  // bla: PropTypes.string,
};

NavigationBar.defaultProps = {
  // bla: 'test',
};

export default NavigationBar;

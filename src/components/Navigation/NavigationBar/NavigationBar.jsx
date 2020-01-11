import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import { NavigationBarWrapper, NavigationBarIcons, NavigationBarHeader, NavigationBarLinks, NavigationRouter  } from './NavigationBar.styles.js';
import IconLinks from '@/components/Navigation/IconLinks/IconLinks';
import NavigationLinks from '@/components/Navigation/NavigationLinks/NavigationLinks';

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
          <Header>
            <NavigationBarLinks span={8}>
              <NavigationLinks/>
            </NavigationBarLinks>
            <NavigationBarHeader span={8}>
              <NavigationRouter to="/">
                Dalwy Media
              </NavigationRouter>
            </NavigationBarHeader>
            <NavigationBarIcons span={8}>
              <IconLinks/>
            </NavigationBarIcons>
          
          </Header>
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

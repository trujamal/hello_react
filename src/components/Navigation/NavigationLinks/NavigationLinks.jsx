import React, { PureComponent } from 'react';
import { NavigationRouter, NavigationLinksWrapper } from './NavigationLinks.styles';

class NavigationLinks extends PureComponent { 
  constructor(props) {
    super(props);



    this.state = {
      hasError: false,
      activeLink: ''
    };
  }

  componentDidMount = () => {
    console.log('NavigationLinks mounted');
    this.checkForLink();
  }

  checkForLink = () => {
    let active_link = window.location.pathname;
    this.setState({
      activeLink: active_link
    })
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <NavigationLinksWrapper>
        <NavigationRouter to="/about" key="/about">
          About
        </NavigationRouter>
        <NavigationRouter to="/projects" key="/projects">
          Projects
        </NavigationRouter>
        <NavigationRouter to="/contact" key="/contact">
          Contact
        </NavigationRouter>
      </NavigationLinksWrapper>
    );
  }
}

NavigationLinks.propTypes = {
  // bla: PropTypes.string,
};

NavigationLinks.defaultProps = {
  // bla: 'test',
};

export default NavigationLinks;

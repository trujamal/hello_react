import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faDiscord} from '@fortawesome/free-brands-svg-icons'
import { IconRouter, IconLinksWrapper } from './IconLinks.styles';

const IconLinks = (props) => (
  <IconLinksWrapper>
    <IconRouter href="//github.com/Dalwy">
      <FontAwesomeIcon icon={faGithubAlt} size="lg"/>
    </IconRouter>
    <IconRouter href="//discord.gg">
      <FontAwesomeIcon icon={faDiscord} size="lg"/>
    </IconRouter>
  </IconLinksWrapper>
);

IconLinks.propTypes = {
  // bla: PropTypes.string,
};

IconLinks.defaultProps = {
  // bla: 'test',
};

export default IconLinks;

import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/fontawesome-free-solid';

class ScrollTop extends React.PureComponent {
  state = {
    showButton: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  goToTop = () => {
    window.scrollTo(0, 0);
  }

  handleScroll = () => {
    const scrollPos = window.pageYOffset;
    if (scrollPos > 300) {
      this.setState({ showButton: true });
    } else {
      this.setState({ showButton: false });
    }
  }
  
  render() {
    const { showButton } = this.state;
    return (
      <div
        className={`scroll ${showButton ? 'show-button' : ''}`}
        onClick={this.goToTop}
      >
        <FontAwesomeIcon
          className="scroll__icon"
          icon={faArrowUp}
          color="#fff"
          size="3x"
        />
      </div>
    );
  }
}

export default ScrollTop;

//
// Block components
//

import React from 'react';
import { Glyphicon, Grid, Row, Col } from 'react-bootstrap';
import LinkContainerButton from 'components/Button';
import { browserHistory } from 'react-router';
import styles from './styles.css';

export default class BlockInfo extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    const color = this.props.color !== undefined ? this.props.color : 'blue';
    this.state = this.state || {};
    switch (color) {
      case 'blue':
        this.state.blockInfoClass = styles.blockInfoBlue;
        break;
      case 'green':
        this.state.blockInfoClass = styles.blockInfoGreen;
        break;
      case 'orange':
        this.state.blockInfoClass = styles.blockInfoOrange;
        break;
      case 'red':
        this.state.blockInfoClass = styles.blockInfoRed;
        break;
      default:
        this.state.blockInfoClass = styles.blockInfoBlue;
    }
  }

  componentWillUpdate() {
    const color = this.props.color !== undefined ? this.props.color : 'blue';
    this.state = this.state || {};
    switch (color) {
      case 'blue':
        this.state.blockInfoClass = styles.blockInfoBlue;
        break;
      case 'green':
        this.state.blockInfoClass = styles.blockInfoGreen;
        break;
      case 'orange':
        this.state.blockInfoClass = styles.blockInfoOrange;
        break;
      case 'red':
        this.state.blockInfoClass = styles.blockInfoRed;
        break;
      default:
        this.state.blockInfoClass = styles.blockInfoBlue;
    }
  }

  handleClick() {
    browserHistory.push(this.props.link);
  }

  render() {
    return (
      <div className={this.state.blockInfoClass}>
        <Grid fluid bsClass="" className={styles.blockInfoHeader}>
          <Row>
            <Col xs={2}>
              <Glyphicon className={styles.BlockInfoIcon} glyph={this.props.icon} />
            </Col>
            <Col xs={10}>
              <div className={styles.BlockInfoTextBlock}>
                <span className={styles.BlockInfoTitle}>{this.props.title}</span>
                <span className={styles.BlockInfoMessage}>{this.props.msg}</span>
              </div>
            </Col>
          </Row>
        </Grid>
        <LinkContainerButton
          buttonBsStyle="link"
          buttonText={this.props.text}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

BlockInfo.propTypes = {
  icon: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  link: React.PropTypes.string,
  color: React.PropTypes.string,
  title: React.PropTypes.string,
  msg: React.PropTypes.string.isRequired,
};

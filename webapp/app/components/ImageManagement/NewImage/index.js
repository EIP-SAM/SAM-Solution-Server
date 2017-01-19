//
// New Image main components
//

import React from 'react';
import { Panel, Glyphicon, ListGroup, ListGroupItem } from 'react-bootstrap';
import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class NewImage extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
    };
  }

  componentDidMount() {
    this.props.getAllImagesAndFiles();
  }

  getHeaderPanel() {
    const icon = (this.state.expanded) ? 'minus-sign' : 'plus-sign';
    const helpText = (this.state.expanded) ? '(click to hide)' : '(click to show)';

    return (
      <h5>
        <Glyphicon glyph={icon} />
        {' New images need to be added !'}
        <span className={styles.panelHelpText} onClick={() => this.setState({ expanded: !this.state.expanded })}>
          {helpText}
        </span>
      </h5>
    );
  }

  addImage(fileName) {
    this.props.setFileName(fileName);
    this.props.openAddImage();
  }

  render() {
    if (this.props.newFiles.length === 0) {
      return null;
    }
    return (
      <Panel header={this.getHeaderPanel()} bsStyle="primary" collapsible defaultExpanded>
        <ListGroup className={styles.filesList}>
          {this.props.newFiles.map((file, index) => (
            <ListGroupItem key={index} onClick={() => this.addImage(file.name)}>
              <Glyphicon glyph="plus-sign" className={styles.lineGlyph} />
              {file.name}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Panel>
    );
  }
}

NewImage.propTypes = {
  getAllImagesAndFiles: React.PropTypes.func.isRequired,
  setFileName: React.PropTypes.func.isRequired,
  openAddImage: React.PropTypes.func.isRequired,
  newFiles: React.PropTypes.arrayOf(React.PropTypes.object),
};

NewImage.defaultProps = {
  newFiles: [],
};

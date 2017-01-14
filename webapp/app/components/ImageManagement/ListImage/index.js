//
// Image List main components
//

import React from 'react';
import { Table } from 'react-bootstrap';
import Tr from 'components/Tr';
import Th from 'components/Th';
import Td from 'components/Td';
import ButtonPopover from 'components/ButtonPopover';
import styles from './styles.css';


const columns = ['#', 'Name', 'Operating System', 'Version', 'File Name', 'Action'];

/* eslint-disable react/prefer-stateless-function */
export default class ListImage extends React.Component {
  static getRowStyle(isValid) {
    if (isValid) {
      return null;
    }
    return styles.imageToDelete;
  }

  static getRowFileName(fileName, isValid) {
    if (isValid) {
      return fileName;
    }
    return `${fileName} (not found)`;
  }

  getRowAction(id, isValid) {
    if (isValid) {
      return null;
    }
    return (
      <ButtonPopover
        buttonStyle={styles.trash}
        id="delete_image"
        placement="bottom"
        trigger={['focus', 'hover']}
        popoverContent="Delete Image"
        buttonType="link"
        icon="trash"
        link=""
        onClick={() => this.props.deleteImage(id)}
      />
    );
  }

  render() {
    return (
      <Table responsive hover striped>
        <thead>
          <Tr items={columns} component={Th} />
        </thead>
        <tbody>
          {this.props.images.map((image, index) => (
            <Tr
              key={index}
              className={ListImage.getRowStyle(image.isValid)}
              items={[
                { isLink: false, value: index },
                { isLink: false, value: image.name },
                { isLink: false, value: image.operatingSystem },
                { isLink: false, value: image.version },
                { isLink: false, value: ListImage.getRowFileName(image.fileName, image.isValid) },
                { isLink: false, value: this.getRowAction(image.id, image.isValid) },
              ]}
              component={Td}
            />
          ))}
        </tbody>
      </Table>
    );
  }
}

ListImage.propTypes = {
  images: React.PropTypes.arrayOf(React.PropTypes.object),
  deleteImage: React.PropTypes.func.isRequired,
};

ListImage.defaultProps = {
  images: [],
};

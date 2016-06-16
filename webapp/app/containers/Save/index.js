//
// Page save
//

import React from 'react';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';
import { getSavesRequest } from './actions';
import { SaveTable } from 'components/Save/Table/index';
import { SaveButtons } from 'components/Save/Buttons/index';

/* eslint-disable react/prefer-stateless-function */
export class Save extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      saves: [],
    };
  }
  componentDidMount() {
    this.props.getSavesRequest();
  }

  render() {
    return (
      <div>
        <PageHeader>Save</PageHeader>
        <SaveButtons />
        <SaveTable data={this.props.saves.saves} />
      </div>
    );
  }
}

Save.propTypes = {
  saves: React.PropTypes.object,
  getSavesRequest: React.PropTypes.func,
};

function mapStateToProps(state) {
  return {
    saves: state.get('saves'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSavesRequest: () => dispatch(getSavesRequest()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Save);

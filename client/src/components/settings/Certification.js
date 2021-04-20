import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { find, first, values, isString } from 'lodash';
import {
  Table,
  Button,
  DropdownButton,
  MenuItem,
  Modal
} from '@freecodecamp/react-bootstrap';
import { Link, navigate } from 'gatsby';
import { createSelector } from 'reselect';

import { projectMap, legacyProjectMap } from '../../resources/certProjectMap';

import SectionHeader from './SectionHeader';
import SolutionViewer from './SolutionViewer';
import { FullWidthRow, Spacer } from '../helpers';
import { Form } from '../formHelpers';

import { maybeUrlRE } from '../../utils';
import reallyWeirdErrorMessage from '../../utils/reallyWeirdErrorMessage';

import './certification.css';
import { updateLegacyCert } from '../../redux/settings';



CertificationSettings.displayName = 'CertificationSettings';
CertificationSettings.propTypes = propTypes;

export default connect(
  null,
  mapDispatchToProps
)(CertificationSettings);

// @flow

import React from 'react'
import { ScrollView, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions as NavigationActions } from 'react-native-router-flux';

// Styles
import styles from './style.js';

import ScrollableTabViewBuscaEntidades from '../ScrollableTabViewBuscaEntidades';


class ViewBuscaEntidade extends React.Component {

 

 render () {
    return (
       <View style={styles.container}>
        <ScrollableTabViewBuscaEntidades style={styles.container} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewBuscaEntidade)
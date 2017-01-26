// @flow

import React from 'react'
import { ScrollView, Text, View, Image } from 'react-native';
import { Images, Fonts } from '../../Themes';
import { connect } from 'react-redux';
import { Actions as NavigationActions } from 'react-native-router-flux';
import RoundedButton from '../../Components/RoundedButton';
// Styles
import styles from './style.js';

import ScrollableTabViewTelaPrincipal from '../ScrollableTabViewTelaPrincipal'

var ScrollableTabView = require('react-native-scrollable-tab-view');


class TelaPrincipal extends React.Component {

 

 render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollableTabViewTelaPrincipal style={styles.container}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(TelaPrincipal)
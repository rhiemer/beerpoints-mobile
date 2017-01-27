// @flow

import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Image, Modal, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import EntidadeDetalhada from '../../Components/EntidadeDetalhada';


// Styles
import styles from './style.js'

// I18n
import I18n from 'react-native-i18n'


class BarDetalhado extends React.Component {
  render () {  
    return (
      <EntidadeDetalhada entidade={this.props}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(BarDetalhado)



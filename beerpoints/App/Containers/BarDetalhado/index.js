// @flow

import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Image, Modal, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Images ,Metrics } from '../../Themes';
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

import RoundedButton from '../../Components/RoundedButton';






// Styles
import styles from './style.js'

// I18n
import I18n from 'react-native-i18n'


class BarDetalhado extends React.Component {
  render () {
    const { nome, id } = this.props;
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.componentLabelContainer}>
            <Text style={styles.sectionText}>{`${nome}`}</Text>
            <Text style={styles.componentLabel}>{`${I18n.t('idEntidade')}:${id}`}</Text>
          </View>         
          <RoundedButton onPress={NavigationActions.pop}>
            Voltar
          </RoundedButton>
        </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(BarDetalhado)



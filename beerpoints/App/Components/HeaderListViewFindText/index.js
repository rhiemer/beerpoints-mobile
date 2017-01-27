// @flow

import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, ListView, View } from 'react-native'

// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Kohana } from 'react-native-textinput-effects';

import { Metrics, Colors } from '../../Themes'

// I18n
import I18n from 'react-native-i18n'

// Styles
import styles from './style'


type HeaderListViewFindTextProps = {
  label: Object,
  onChangeText: () => void,
  styles?: Object
}


export default class HeaderListViewFindText extends React.Component {
  props: HeaderListViewFindTextProps

  render () {
    return (
      <View style={[{padding: 2, paddingTop: 2}, { backgroundColor: Colors.azulAns }]}>
            <Kohana
              style={[styles.input,styles.inputPesquisa,this.props.styles]}
              label={this.props.label}
              iconClass={FontAwesomeIcon}
              iconName={'search'}
              iconColor={'#ddd'}
              iconColor={'#f4d29a'}
              labelStyle={{ color: '#91627b' }}
              inputStyle={{ color: '#91627b' }}
              onChangeText={this.props.onChangeText}
            />
    </View>
    )
  }
}








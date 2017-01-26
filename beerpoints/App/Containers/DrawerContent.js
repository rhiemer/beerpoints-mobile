// @flow

import React, { Component } from 'react'
import { ScrollView, Image, BackAndroid } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import I18n from 'react-native-i18n'

class DrawerContent extends Component {

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

   handleBuscaEntidade = () => {
    this.toggleDrawer();
    NavigationActions.buscaEntidade();
  }

  handleMapaBar = () => {
    this.toggleDrawer();
    NavigationActions.mapaBar();
  }

  


  render () {
    return (
      <ScrollView style={styles.container}>
        <Image source={Images.logoMenuLateral} style={styles.logo} />
        <DrawerButton text={I18n.t('menuLateralMapa')} onPress={this.handleMapaBar} />
        <DrawerButton text={I18n.t('menuLateralConsulta')} onPress={this.handleBuscaEntidade} />

      </ScrollView>
    )
  }
}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
// @flow

import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'
import CustomNavBar from '../Navigation/CustomNavBar'
import TelaPrincipal from '../Containers/TelaPrincipal'
import I18n from 'react-native-i18n'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene initial key='telaPrincipal' component={TelaPrincipal} title={I18n.t('tituloAplicacao')}  renderLeftButton={NavItems.hamburgerButton} />
        
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter

// @flow

import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'
import CustomNavBar from '../Navigation/CustomNavBar'
import TelaPrincipal from '../Containers/TelaPrincipal'
import I18n from 'react-native-i18n'


import MapaBar from '../Containers/MapaBar'
import ViewBuscaEntidade from '../Containers/ViewBuscaEntidade'

import BuscaCerveja from '../Containers/BuscaCerveja'
import BuscaBar from '../Containers/BuscaBar'

import CervejaDetalhada from '../Containers/CervejaDetalhada'
import BarDetalhado from '../Containers/BarDetalhado'



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
            <Scene key='mapaBar' component={MapaBar} title={I18n.t('tituloMapaBar')} />
            <Scene key='buscaEntidade' component={ViewBuscaEntidade} title={I18n.t('tituloBuscaEntidade')} />
            <Scene key='buscaCerveja' component={BuscaCerveja} title={I18n.t('tituloBuscaCerveja')} />            
            <Scene key='cervejaDetalhada' component={CervejaDetalhada} title={I18n.t('tituloCervejaDetalhada')}  />
            <Scene key='buscaBar' component={BuscaBar} title={I18n.t('tituloBuscaBar')} />
            <Scene key='barDetalhado' component={BarDetalhado} title={I18n.t('tituloBarDetalhado')}  />
            <Scene key='mapaBar' component={MapaBar} title={I18n.t('mapaBar')}  />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
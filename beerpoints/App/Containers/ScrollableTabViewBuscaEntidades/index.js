import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import I18n from 'react-native-i18n';
import Icon from 'react-native-vector-icons/Ionicons';

import TabBar from '../../Components/TabBar';
import styles from './style.js';

import BuscaCerveja from '../BuscaCerveja'
import BuscaBar from '../BuscaBar';


class ScrollableTabViewBuscaEntidades extends React.Component {
  
  render() {
    return (
      <ScrollableTabView
        style={{marginTop: 5, }}
        
        renderTabBar={() => <TabBar />}>
         <BuscaCerveja tabLabel='ios-beer'/>
         <BuscaBar tabLabel='ios-aperture'/>
      </ScrollableTabView>
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

export default connect(mapStateToProps, mapDispatchToProps)(ScrollableTabViewBuscaEntidades)










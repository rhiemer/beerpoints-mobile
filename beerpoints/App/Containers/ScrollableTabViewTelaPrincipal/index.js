import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';


import ScrollableTabView from 'react-native-scrollable-tab-view';
import I18n from 'react-native-i18n';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style.js';


import TabBar from '../../Components/TabBar';
import MapaBar from '../MapaBar';

import ViewBuscaEntidade from '../ViewBuscaEntidade';


export default React.createClass({
  render() {
    return <ScrollableTabView
      style={{marginTop: 2, }}
           
      renderTabBar={() => <TabBar />}
      >
       <MapaBar tabLabel='ios-analytics' />    
       <ViewBuscaEntidade tabLabel='ios-apps'/>   
    </ScrollableTabView>;
  },
});







// @flow

import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, ListView, View } from 'react-native'

// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'


import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Kohana } from 'react-native-textinput-effects';

import { Metrics, Colors } from '../../Themes'
import AlertMessage from '../../Components/AlertMessage'
import HeaderListViewFindText from '../../Components/HeaderListViewFindText';
import RowListViewEntidade from '../../Components/RowListViewEntidade';
import styles from './style'
// I18n
import I18n from 'react-native-i18n'

type ListViewBuscaEntidadeProps = {
  pageSize:number=>15,
  dataSource:Object,
  labelHeader: String,
  labelBuscaNaoEncontrada:String,
  onChangeText: () => void,
  onPressRow: () => void,
  styles?: Object
}



export default class ListViewBuscaEntidade extends React.Component {
  props: ListViewBuscaEntidadeProps

   _noRowData () {
    return this.props.dataSource.getRowCount() === 0
  }

  _renderRow = (searchTerm) => (row) => {
  return (
    <RowListViewEntidade onPress={this.props.onPressRow} entidade={row} highlight={searchTerm} />
  )
}

  render () {
    const { performSearch, searchTerm } = this.props;
    return (
      <ScrollView style={styles.container}>
          <ListView
            style={styles.container}
            pageSize={this.props.pageSize}
            dataSource={this.props.dataSource}
            renderHeader={() => <HeaderListViewFindText label={this.props.labelHeader} onChangeText={this.props.onChangeText} />}
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separatorListView} />}
            renderRow={this._renderRow(searchTerm || '')}
            enableEmptySections          
          />
          <AlertMessage title={this.props.labelBuscaNaoEncontrada} show={this._noRowData()} />
      </ScrollView>
    )
  }
}






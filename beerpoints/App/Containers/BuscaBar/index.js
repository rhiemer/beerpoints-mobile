// @flow

import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, ListView, View } from 'react-native'
import { connect } from 'react-redux'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Kohana } from 'react-native-textinput-effects';

import { Metrics, Colors } from '../../Themes'
import AlertMessage from '../../Components/AlertMessage'
import FullButton from '../../Components/FullButton';

// I18n
import I18n from 'react-native-i18n'

// Styles
import styles from './style'
import BuscaBarActions from './reducer';






class BuscaBar extends React.Component {
  state: {
    dataSource: Object
  }

  constructor (props) {
    super(props)

    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})

    this.state = {
      dataSource: ds.cloneWithRows(props.results)
    }
  }

  _renderRow (row) {
    return (
      <FullButton onPress={() =>  NavigationActions.barDetalhado(row)} text={row.nome} highlight='AE' />
    )
  }

  componentWillReceiveProps (newProps) {
    if (newProps.results) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newProps.results)
      })
    }
  }

  _noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  render () {
    const { performSearch, searchTerm } = this.props;
    return (
      <ScrollView style={styles.container}>
          <View style={[{padding: 5, paddingTop: 5}, { backgroundColor: Colors.azulAns }]}>
            <Kohana
              style={[styles.input, { backgroundColor: '#f9f5ed' }]}
              label={I18n.t('textoPesquisaBuscaBar')}
              iconClass={FontAwesomeIcon}
              iconName={'search'}
              iconColor={'#ddd'}
              iconColor={'#f4d29a'}
              labelStyle={{ color: '#91627b' }}
              inputStyle={{ color: '#91627b' }}
              onChangeText={(text) => performSearch(text)}
            />
          </View>
          <AlertMessage title={I18n.t('buscaBarNaoEncontrado')} show={this._noRowData()} />
          <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={_renderRow2(searchTerm || '')}
          pageSize={15}
          enableEmptySections
          />
      </ScrollView>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.buscaBar.searchTerm,
    results: state.buscaBar.results
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    performSearch: (searchTerm) => dispatch(BuscaBarActions.searchBar(searchTerm)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuscaBar)


const _renderRow2 = (searchTerm) => (row) => {
  return (
    <FullButton onPress={() =>  NavigationActions.barDetalhado(row)} text={row.nome} highlight={searchTerm} />
  )
}
// @flow

import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, ListView, View } from 'react-native'
import { connect } from 'react-redux'
// external libs
import { Actions as NavigationActions } from 'react-native-router-flux'
import ListViewBuscaEntidade from '../../Components/ListViewBuscaEntidade';

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

  detalhar(row) {
    NavigationActions.barDetalhado(row);
  }

  componentWillReceiveProps (newProps) {
    if (newProps.results) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newProps.results)
      })
    }
  }

  
  render () {
    const { performSearch, searchTerm } = this.props;
    return (
         <ListViewBuscaEntidade style={styles.container} 
                             labelBuscaNaoEncontrada={I18n.t('buscaBarNaoEncontrado')} 
                             labelHeader={I18n.t('textoPesquisaBuscaBar')}
                             dataSource={this.state.dataSource}                             
                             onChangeText={(text) => performSearch(text)}
                             onPressRow={(row) => this.detalhar(row)}/>
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


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
import styles from './style.js'

import BuscaCervejaActions from './reducer';


class BuscaCerveja extends React.Component {
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
 
  componentWillReceiveProps (newProps) {
    if (newProps.results) {
      
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newProps.results)
      })
    }
  }

 detalhar(row) {
    NavigationActions.cervejaDetalhada(row)
  }

  render () {
    const { performSearch, searchTerm } = this.props;
    return (
           <ListViewBuscaEntidade style={styles.container} 
                             labelBuscaNaoEncontrada={I18n.t('buscaCervejaNaoEncontrada')} 
                             labelHeader={I18n.t('textoPesquisaBuscaCerveja')}
                             dataSource={this.state.dataSource}                             
                             onChangeText={(text) => performSearch(text)}
                             onPressRow={(row) => this.detalhar(row)}/>
    )
  }

}

const mapStateToProps = (state) => {
  
  return {
    searchTerm: state.buscaCerveja.searchTerm,
    results: state.buscaCerveja.results
  }
}

const mapDispatchToProps = (dispatch) => {
  
  return {
    performSearch: (searchTerm) => dispatch(BuscaCervejaActions.searchCerveja(searchTerm)),    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuscaCerveja)

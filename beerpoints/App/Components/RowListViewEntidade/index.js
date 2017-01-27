import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

import ExamplesRegistry from '../../Services/ExamplesRegistry'
// Styles
import styles from './style'

type RowListViewEntidadeProps = {
  entidade: Object,
  onPress: () => void,
  styles?: Object
}


export default class RowListViewEntidade extends React.Component {
  props: RowListViewEntidadeProps

  render () {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
          <Image source={{uri: this.props.entidade.imagem.large}}
            style={styles.photo} />
          <Text style={styles.text}>
            {`${this.props.entidade.nome}`}
          </Text>
      </TouchableOpacity>
    )
  }
}


import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import MapView from 'react-native-maps'

import ExamplesRegistry from '../../Services/ExamplesRegistry'
import Styles from './style'

// Example
ExamplesRegistry.add('Map Callout', () =>
  <MapViewCalloutBar
    location={{
      title: 'Callout Example'
    }}
    onPress={() => window.alert('That tickles!')}
  />
)

type MapViewCalloutBarProps = {
  location: Object,
  onPress: () => void
}

export default class MapViewCalloutBar extends React.Component {
  props: MapViewCalloutBarProps

  constructor (props: MapViewCalloutBarProps) {
    super(props)
    this.onPress = this.props.onPress.bind(this, this.props.location)    
  }

  render () {
    /* ***********************************************************
    * Customize the appearance of the callout that opens when the user interacts with a marker.
    * Note: if you don't want your callout surrounded by the default tooltip, pass `tooltip={true}` to `MapView.Callout`
    *************************************************************/
    const { location } = this.props
    return (
      <MapView.Callout style={Styles.callout}>
        <TouchableOpacity onPress={this.onPress}>
          <Text>{location.nome}</Text>
        </TouchableOpacity>
      </MapView.Callout>
    )
  }
}

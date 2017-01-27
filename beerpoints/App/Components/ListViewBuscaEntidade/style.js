// @flow

import { View, Text, StyleSheet, Image } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import { StylesSeparatorListView } from '../../Styles/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  separatorListView: {
    ...StylesSeparatorListView.separatorListView
  },
 
})
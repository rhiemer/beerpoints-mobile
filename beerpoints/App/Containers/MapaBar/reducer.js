// @flow

import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { filter } from 'ramda'
import { startsWith } from 'ramdasauce'
import { bares } from '../../database/bar'

const LIST_DATA = bares;


/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  searchMapaBar: ['searchTerm'],
  cancelSearchMapaBar: null
})

export const TemperatureTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  searchTerm: null,
  searching: false,
  results: LIST_DATA
})

/* ------------- Reducers ------------- */

export const performSearch = (state: Object, { searchTerm }: Object) => {

 
  return state.merge({ searching: true, searchTerm, LIST_DATA })
}

export const cancelSearch = (state: Object) => INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH_MAPA_BAR]: performSearch,
  [Types.CANCEL_SEARCH_MAPA_BAR]: cancelSearch
})


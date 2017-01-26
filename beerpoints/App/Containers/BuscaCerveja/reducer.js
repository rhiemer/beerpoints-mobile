// @flow

import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { filter } from 'ramda'
import { startsWith } from 'ramdasauce'
import { cervejas } from '../../database/cerveja'

const LIST_DATA = cervejas;


/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  searchCerveja: ['searchTerm'],
  cancelSearchCerveja: null
})

export const BuscaCervejaTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  searchTerm: '',
  searching: false,
  results: LIST_DATA
})

/* ------------- Reducers ------------- */

export const performSearch = (state: Object, { searchTerm }: Object) => {
  
 
  const results = LIST_DATA.filter((e)=>case_accent_fold(e.nome).contains(case_accent_fold(searchTerm)));
  if (typeof results !== 'undefined') {
    const first10 = results.slice(0, Math.min(10, results.length));
    return state.merge({ searching: true, searchTerm, results: first10 });
  }
  //const results = filter(startsWith(searchTerm), LIST_DATA)
  return state.merge({ searching: true, searchTerm, results })
}

export const cancelSearch = (state: Object) => INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH_CERVEJA]: performSearch,
  [Types.CANCEL_SEARCH_CERVEJA]: cancelSearch
})

function case_accent_fold (s) {
  if (!s) { return ''; }
  return (
    s
    .toLowerCase()
    .replace(/[àáâãäå]/g,"a")
    .replace(/[èéêẽë]/g,"e")
    .replace(/[ìíîĩï]/g,"i")
    .replace(/[òóôõö]/g,"o")
    .replace(/[ùúûũü]/g,"u")
    .replace(/[ç]/g,"u")
  );
  return ret;
};
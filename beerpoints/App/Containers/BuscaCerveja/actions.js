/*
 *
 * Busca Cervja actions
 *
 */

import {
  PESQUISA_CERVEJA_ACTION,PESQUISA_CERVEJA_CANCEL_ACTION
} from './constants';

export const pesquisarCerveja = (searchTerm) => ({
  type: PESQUISA_CERVEJA_ACTION,
  searchTerm,
});

export const cancelarPesquisarCerveja = (state) => ({
  type: PESQUISA_CERVEJA_CANCEL_ACTION,
  state,
});



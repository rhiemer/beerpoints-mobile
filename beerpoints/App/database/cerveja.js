export const cervejas = [
{ id:1,nome:'Paulaner'}, 
{ id:2,nome:'Baden Baden 1999'},
{ id:3,nome:'Baden Baden Bock'}
];

export const buscaCervejas = (nome) => {
  const _cervejas = igr.filter((e) => e.nome.contains(nome))[0];
  const ret = [];
  _cervejas && ret.push({tipo: "Cervejas", valor: _cervejas});
  return ret;
};
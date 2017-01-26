 export const bares = [
      { id:1,nome: 'GAGO 166', latitude: -22.91555, longitude: -43.22425 },
      { id:2,nome: 'BAR DO CHICO', latitude: -22.89454, longitude: -43.1175 },
      { id:3,nome: 'VELOSO', latitude: -22.91287, longitude: -43.19123 },
      { id:4,nome: 'FARANI', latitude: -22.92105, longitude: -43.23246 },
      { id:5,nome: 'HIPORIO', latitude: -22.92200, longitude: -43.23300 }
    ];


export const buscaBares = (nome) => {
  const _bares = igr.filter((e) => e.nome.contains(nome))[0];
  const ret = [];
  _bares && ret.push({tipo: "Bares", valor: _bares});
  return ret;
};
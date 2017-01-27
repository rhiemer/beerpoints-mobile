export const cervejas = [{
        id: 1,
        nome: 'Paulaner',
         imagem: {
             large: "https://randomuser.me/api/portraits/men/47.jpg",
             medium: "https://randomuser.me/api/portraits/med/men/47.jpg",
             thumbnail: "https://randomuser.me/api/portraits/thumb/men/47.jpg"
         }
     },
     {
         id: 2,
         nome: 'Baden Baden 1999',
         imagem: {
             large: "https://randomuser.me/api/portraits/men/13.jpg",
             medium: "https://randomuser.me/api/portraits/med/men/13.jpg",
             thumbnail: "https://randomuser.me/api/portraits/thumb/men/13.jpg"
         }
     },
     {
         id: 3,
         nome: 'Baden Baden Bock',
         imagem: {
             large: "https://randomuser.me/api/portraits/women/22.jpg",
             medium: "https://randomuser.me/api/portraits/med/women/22.jpg",
             thumbnail: "https://randomuser.me/api/portraits/thumb/women/22.jpg"
         }
     }
];

export const buscaCervejas = (nome) => {
    const _cervejas = igr.filter((e) => e.nome.contains(nome))[0];
    const ret = [];
    _cervejas && ret.push({ tipo: "Cervejas", valor: _cervejas });
    return ret;
};
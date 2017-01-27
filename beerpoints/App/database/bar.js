 export const bares = [{
         id: 1,
         nome: 'GAGO 166',
         latitude: -22.91555,
         longitude: -43.22425,
         imagem: {
             large: "https://randomuser.me/api/portraits/men/47.jpg",
             medium: "https://randomuser.me/api/portraits/med/men/47.jpg",
             thumbnail: "https://randomuser.me/api/portraits/thumb/men/47.jpg"
         }
     },
     {
         id: 2,
         nome: 'BAR DO CHICO',
         latitude: -22.89454,
         longitude: -43.1175,
         imagem: {
             large: "https://randomuser.me/api/portraits/men/13.jpg",
             medium: "https://randomuser.me/api/portraits/med/men/13.jpg",
             thumbnail: "https://randomuser.me/api/portraits/thumb/men/13.jpg"
         }
     },
     {
         id: 3,
         nome: 'VELOSO',
         latitude: -22.91287,
         longitude: -43.19123,
         imagem: {
             large: "https://randomuser.me/api/portraits/women/22.jpg",
             medium: "https://randomuser.me/api/portraits/med/women/22.jpg",
             thumbnail: "https://randomuser.me/api/portraits/thumb/women/22.jpg"
         }
     },
     {
         id: 4,
         nome: 'FARANI',
         latitude: -22.92105,
         longitude: -43.23246,
         imagem: {
             large: "https://randomuser.me/api/portraits/women/53.jpg",
             medium: "https://randomuser.me/api/portraits/med/women/53.jpg",
             thumbnail: "https://randomuser.me/api/portraits/thumb/women/53.jpg"
         }
     },
     {
         id: 5,
         nome: 'HIPORIO',
         latitude: -22.92200,
         longitude: -43.23300,
         imagem: {
             large: "https://randomuser.me/api/portraits/men/19.jpg",
             medium: "https://randomuser.me/api/portraits/med/men/19.jpg",
             thumbnail: "https://randomuser.me/api/portraits/thumb/men/19.jpg"
         }
     },
     {
         id: 6,
         nome: 'SALVATORE',
         latitude: -22.95200,
         longitude: -43.24300,
         imagem: {
             large: "https://randomuser.me/api/portraits/men/19.jpg",
             medium: "https://randomuser.me/api/portraits/med/men/19.jpg",
             thumbnail: "https://randomuser.me/api/portraits/thumb/men/19.jpg"
         }
     }
 ];


 export const buscaBares = (nome) => {
     const _bares = igr.filter((e) => e.nome.contains(nome))[0];
     const ret = [];
     _bares && ret.push({ tipo: "Bares", valor: _bares });
     return ret;
 };
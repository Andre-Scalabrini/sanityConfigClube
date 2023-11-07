// schemas/pet.js
export default {
    name: 'premios',
    type: 'document',
    title: 'Prêmios',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Título'
      },
      {
        name: 'description',
        type: 'string',
        title: 'Descrição'
      },
      {
        name: 'imagem',
        type: 'image',
        title: 'Imagem'
      }
    ]
  }
  
  
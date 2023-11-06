// schemas/pet.js
export default {
    name: 'premios',
    type: 'document',
    title: 'Premios',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Titulo'
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
  
  
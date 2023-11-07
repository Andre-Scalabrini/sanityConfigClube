export default{
    name: 'laboratorios',
    type: 'document',
    title: 'Laboratórios',
    fields: [
      {
        name: 'laboratorio',
        type: 'string',
        title: 'Laboratório'
      },
      
      {
        name: 'descricao',
        type: 'string',
        title: 'Descrição'
      },

      {
        name: 'foto',
        type: 'image',
        title: 'Foto',
      },

      {
        name: 'fotoPequena1',
        type: 'image',
        title: 'Foto Pequena 1',
      },

      {
        name: 'fotoPequena2',
        type: 'image',
        title: 'Foto Pequena 2',
      }
    ]
}
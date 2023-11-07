export default {
    name: 'noticia',
    type: 'document',
    title: 'Notícia',
    fields: [
      {
        name: 'titulo',
        type: 'string',
        title: 'Título'
      },
      {
        name: 'subtitulo',
        type: 'string',
        title: 'Subtítulo'
      },
      {
        name: 'conteudo',
        type: 'string',
        title: 'Descrição'
      },
      {
        name: 'imagem',
        type: 'image',
        title: 'Imagem da Notícia'
      },
      {
        name: 'data',
        type: 'date',
        title: 'Data de Publicação'
      }
    ]
  }
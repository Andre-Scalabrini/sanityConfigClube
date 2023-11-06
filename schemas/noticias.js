export default {
    name: 'noticia',
    type: 'document',
    title: 'Noticia',
    fields: [
      {
        name: 'titulo',
        type: 'string',
        title: 'Título'
      },
      {
        name: 'subtitulo',
        type: 'string',
        title: 'Sub título'
      },
      {
        name: 'conteudo',
        type: 'string',
        title: 'Descricao'
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
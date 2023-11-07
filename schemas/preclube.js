export default
{
    name: 'preclube',
    type: 'document',
    title: 'Pré Clube',
    fields: [
        {
            title: 'Descrição',
            name: 'description',
            type: 'string'
        },
        {
            title: 'Imagem',
            name: 'imagem',
            type: 'image'
        },
        {
             
        title: 'Horários',
        name: 'horarios',
        type: 'reference',
        to: [{type: 'horarios'}]
        }
    ]
}
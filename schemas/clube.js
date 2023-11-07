export default
{
    name: 'clube',
    type: 'document',
    title: 'Clube',
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
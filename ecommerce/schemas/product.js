import {defineType, defineField, defineArrayMember} from 'sanity'

const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: defineField([
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [defineArrayMember({type: 'image'})],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    {
      name: 'id',
      title: 'ID',
      type: 'number',
    },
  ]),
})

export default product

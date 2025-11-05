import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  access:{
    create: () => false,
    read: () => true,
    update: () => true,
    delete: () => false,
  },
  auth: true,
  fields: [
  ],
}

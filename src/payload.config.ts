// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { s3Storage } from '@payloadcms/storage-s3'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { env } from './env'
import { ShopLocations } from './collections/ShopLocations'
import { WatchRequests } from './collections/watches/WatchRequests'
import { WatchDials } from './collections/watches/WatchDial'
import { WatchMaterials } from './collections/watches/WatchMaterials'
import { WatchImages } from './collections/watches/WatchImages'
import { Watches } from './collections/watches/Watches'
import { Contact } from './collections/Contact'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, WatchDials, WatchMaterials, WatchRequests,Watches,Contact],
  globals: [ShopLocations,WatchImages],
  editor: lexicalEditor(),
  secret: env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: {
          prefix: 'media',
          disableLocalStorage: true,
        },
      },
      bucket: env.AWS_S3_BUCKET,
      config: {
        forcePathStyle: true,
        credentials: {
          accessKeyId: env.AWS_ACCESS_KEY_ID,
          secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
        },
        region: env.AWS_REGION,
        endpoint: env.AWS_S3_ENDPOINT,
  
      },
      disableLocalStorage: true,
    })
  ],
})

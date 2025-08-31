import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { cache } from 'react'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getPayloadUtil = cache(async () => {
  return await getPayload({
    config: configPromise,
  })
})
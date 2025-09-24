import { clsx, type ClassValue } from "clsx"
import { getPayload } from "payload"
import { cache } from "react"
import { twMerge } from "tailwind-merge"
// import configPromise from '../payload.config'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export const getPayloadUtil = cache(async () => {
//   return await getPayload({
//     config: configPromise,
//    })
// })
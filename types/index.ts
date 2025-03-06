import {
  CartSchema,
  OrderItemSchema,
  ProductInputSchema,
  UserInputSchema,
  UserSignInSchema,
} from '@/lib/validator'
import { z } from 'zod'
export type IProductInput = z.infer<typeof ProductInputSchema>
export type Data = {
  users: IuserInput[]
  products: IProductInput[]

  headerMenus: {
    name: string

    href: string
  }[]

  carousels: {
    image: string

    url: string

    title: string

    buttonCaption: string

    isPublished: boolean
  }[]
}

export type OrderItem = z.infer<typeof OrderItemSchema>
export type Cart = z.infer<typeof CartSchema>

//user
export type IuserInput = z.infer<typeof UserInputSchema>
export type IuserSignIn = z.infer<typeof UserSignInSchema>

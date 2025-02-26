'use client'

import React, { ReactNode } from 'react'
import useCartSidebar from '@/hooks/use-cart-sidebar'
import CartSidebar from './cart-sidebar'
import { Toaster } from '../ui/sonner'

interface ClientProvidersProps {
  children: ReactNode
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  const isCartSidebarOpen = useCartSidebar()

  return (
    <>
      {isCartSidebarOpen ? (
        <div className='flex min-h-screen'>
          <div className='flex-1 overflow-hidden'>{children}</div>
          <CartSidebar />
        </div>
      ) : (
        <div>{children}</div>
      )}
      <Toaster />
    </>
  )
}

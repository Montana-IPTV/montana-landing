"use client"

import { useEffect } from 'react'
import Intercom from '@intercom/messenger-js-sdk'

export function IntercomProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Intercom with app_id only (anonymous users for landing page)
    Intercom({
      app_id: 'ws4rbr9e',
      language_iso_code: 'tr',
    })

    // Cleanup function
    return () => {
      // Intercom cleanup if needed
      if (typeof window !== 'undefined' && window.Intercom) {
        window.Intercom('shutdown')
      }
    }
  }, [])

  return <>{children}</>
}


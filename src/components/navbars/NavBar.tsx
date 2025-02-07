import { useEffect } from 'react'

declare global {
  interface Window {
    TelegramWebviewProxy?: {
      postEvent: (event: string, data: string) => void
    }
  }
  interface External {
    notify: (data: string) => void
  }
}

const Navbar = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const showBackButton = () => {
      const data = JSON.stringify({
        eventType: 'web_app_setup_back_button',
        eventData: { is_visible: true },
      })

      if (window.TelegramWebviewProxy) {
        window.TelegramWebviewProxy.postEvent('web_app_setup_back_button', JSON.stringify({ is_visible: true }))
      } else if (window.parent) {
        window.parent.postMessage(data, 'https://web.telegram.org')
      } else if (window.external && typeof window.external.notify === 'function') {
        window.external.notify(data)
      }
    }

    showBackButton()
  }, [])

  return (
    <nav style={{ padding: '10px', background: '#eee', display: 'flex', alignItems: 'center' }}>
      <button onClick={() => window.history.back()} style={{ marginRight: '10px', padding: '5px 10px', cursor: 'pointer' }}>
        ⬅ Back
      </button>
      <h2>My Telegram App</h2>
    </nav>
  )
}

export default Navbar

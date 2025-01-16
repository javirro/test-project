'use client'

import { useState } from 'react'

import style from './securityOptions.module.css'

function SecurityOptions() {
  const [deviceAuth, setDeviceAuth] = useState(false)
  const [showWalletShortcuts, setShowWalletShortcuts] = useState(false)

  return (
    <section className={style.mainSection}>
      <section className={style.content}>
        <div className={style.contentDiv}>
          <p className={style.contentDivText}>Use Device Authentication</p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <label
              style={{
                display: 'inline-block',
                width: '48px',
                height: '24px',
                position: 'relative',
                cursor: 'pointer',
              }}
            >
              <input
                type="checkbox"
                checked={deviceAuth}
                onChange={() => setDeviceAuth(!deviceAuth)}
                style={{
                  display: 'none',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: deviceAuth ? '#007bff' : '#ccc',
                  borderRadius: '24px',
                  transition: 'background-color 0.3s ease',
                }}
              ></span>
              <span
                style={{
                  position: 'absolute',
                  top: '2px',
                  left: deviceAuth ? '26px' : '2px',
                  width: '20px',
                  height: '20px',
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  transition: 'left 0.3s ease',
                  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
                }}
              ></span>
            </label>
          </div>
        </div>
        <div className={style.contentDiv}>
          <p className={style.contentDivText}>Require Authentication</p>
          <p className={style.inmediately}>Immediately</p>
        </div>
      </section>
      <section className={style.content}>
        <div className={style.contentDiv}>
          <p className={style.contentDivText}>Show Wallet Shortcuts</p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <label
              style={{
                display: 'inline-block',
                width: '48px',
                height: '24px',
                position: 'relative',
                cursor: 'pointer',
              }}
            >
              <input
                type="checkbox"
                checked={showWalletShortcuts}
                onChange={() => setShowWalletShortcuts(!showWalletShortcuts)}
                style={{
                  display: 'none',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: showWalletShortcuts ? '#007bff' : '#ccc',
                  borderRadius: '24px',
                  transition: 'background-color 0.3s ease',
                }}
              ></span>
              <span
                style={{
                  position: 'absolute',
                  top: '2px',
                  left: showWalletShortcuts ? '26px' : '2px',
                  width: '20px',
                  height: '20px',
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  transition: 'left 0.3s ease',
                  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
                }}
              ></span>
            </label>
          </div>
        </div>
      </section>
    </section>
  )
}

export default SecurityOptions

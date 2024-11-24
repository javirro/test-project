'use client'

import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('./tapBar'), { ssr: false })

export default DynamicComponentWithNoSSR

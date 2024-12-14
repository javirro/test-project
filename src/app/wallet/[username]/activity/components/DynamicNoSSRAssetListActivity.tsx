'use client'

import dynamic from 'next/dynamic'
import { AssetsListActivityProps } from './AssetsListActivity'

const DynamicNoSSRAssetListActivity = dynamic<AssetsListActivityProps>(() => import('./AssetsListActivity'), { ssr: false })

export default DynamicNoSSRAssetListActivity

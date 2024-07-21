import React from 'react'
import { useArtworksByMedium } from '../api/queries'
import ImageGrid from './ImageGrid'
import { MediumType } from '../utils/shared'

interface MediumPageProps {
    medium: MediumType
}

const MediumPage = ({ medium }: MediumPageProps) => {
    const {data:artworks} = useArtworksByMedium(medium)

    return <ImageGrid artworks={artworks} />
}
export default MediumPage

import React from 'react'
import { useArtworks } from '../api/queries'
import ImageGrid from './ImageGrid'
import { MediumType } from '../utils/shared'
import { Spinner } from './Spinner'

interface MediumPageProps {
    medium: MediumType
}

const MediumPage = ({ medium }: MediumPageProps) => {
    const { data: artworks, isFetchedAfterMount } = useArtworks(medium)

    return isFetchedAfterMount ? <ImageGrid artworks={artworks} /> : <Spinner />
}
export default MediumPage

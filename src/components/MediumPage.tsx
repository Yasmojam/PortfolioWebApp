import React, { useEffect, useState } from 'react'
import backend from '../api/backend'
import { ArtworkSchema } from '../api/apiTypes'
import ImageGrid from './ImageGrid'
import { MediumType, sortArtworksByDate } from '../utils/shared'

interface MediumPageProps {
    medium: MediumType
}

const MediumPage = ({ medium }: MediumPageProps) => {
    const [artworks, setArtworks] = useState<ArtworkSchema[]>([])
    useEffect(() => {
        backend
            .get(`/api/get-artwork-mediums?medium=${medium}`)
            .then((res) => {
                const artwork = res.data
                const sortedArtworks = artwork.data.sort(sortArtworksByDate)
                setArtworks(sortedArtworks)
            })
            .catch((e) => {
                console.log(`Error: ${JSON.stringify(e)}`)
            })
    }, [medium])

    return <ImageGrid artworks={artworks} />
}
export default MediumPage

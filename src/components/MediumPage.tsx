import { useArtworks } from '../api/queries'
import ImageGrid from './ImageGrid'
import { MediumType } from '../utils/shared'
import FadeIn from './FadeIn'

interface MediumPageProps {
    medium: MediumType
}

const MediumPage = ({ medium }: MediumPageProps) => {
    const { data: artworks, isFetchedAfterMount } = useArtworks(medium)

    return (
        isFetchedAfterMount && artworks && (
            <FadeIn key={`medium-gallery-${medium}`}>
                <ImageGrid artworks={artworks} />
            </FadeIn>
        )
    )
}
export default MediumPage

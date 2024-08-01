import ImageGrid from './ImageGrid'
import '../styling/PortfolioPage.scss'
import CollectionsGrid from './CollectionsGrid'
import { useCollections } from '../api/queries'
import FadeIn from './FadeIn'

const PortfolioPage = () => {
    const { data: collections } = useCollections()

    const handleClickScroll = (scrollToCollectionId: number) => {
        const element = document.getElementById(
            `${scrollToCollectionId}-section`
        )
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        collections && (
            <div
                style={{
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    margin: '0 8px',
                }}
            >
                <CollectionsGrid
                    collections={collections}
                    onClick={handleClickScroll}
                />
                <FadeIn key={'portfolio-page-fade'}>
                    <div className={'collections-container'}>
                        {collections.map((collection, index) => {
                            return (
                                <div
                                    key={index}
                                    id={`${collection.id}-section`}
                                    style={{
                                        flexDirection: 'column',
                                        display: 'flex',
                                        flex: 1,
                                    }}
                                >
                                    <div
                                        className={'collection-title'}
                                        style={{
                                            display: 'flex',
                                            flex: 1,
                                            width: '100%',
                                            justifyContent: 'space-between',
                                            padding: 10,
                                        }}
                                    >
                                        {collection.title}
                                    </div>
                                    {!!collection.artworks && (
                                        <div>
                                            <ImageGrid
                                                artworks={collection.artworks}
                                            />
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </FadeIn>
            </div>
        )
    )
}

export default PortfolioPage

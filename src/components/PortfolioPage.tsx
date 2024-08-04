import ImageGrid from './ImageGrid'
import '../styling/PortfolioPage.scss'
import '../styling/typography.scss'
import CollectionsGrid from './CollectionsGrid'
import { useCollections } from '../api/queries'
import FadeIn from './FadeIn'
import DOMPurify from 'dompurify'

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
            <FadeIn key={'portfolio-page-fade'}>
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
                                    <div className={'collection-title-cont'}>
                                        <text className="heading">
                                            {collection.title}
                                        </text>

                                        <text
                                            className="subheading"
                                            dangerouslySetInnerHTML={{
                                                __html: DOMPurify.sanitize(
                                                    collection.description
                                                ),
                                            }}
                                        />
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
                </div>
            </FadeIn>
        )
    )
}

export default PortfolioPage

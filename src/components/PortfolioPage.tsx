import React, { useEffect, useState } from 'react'
import ImageGrid from './ImageGrid'
import '../styling/PortfolioPage.scss'
import backend from '../api/backend'
import { CollectionArtworkSchema } from '../api/apiTypes'
import CollectionsGrid from './CollectionsGrid'

const PortfolioPage = () => {
    const [collections, setCollections] = useState<
        CollectionArtworkSchema[] | null
    >(null)

    useEffect(() => {
        backend
            .get(`/api/get-collections-data`)
            .then((res) => {
                const collectionsData = res.data
                    .data as CollectionArtworkSchema[]
                setCollections(
                    collectionsData.filter(
                        (collection) => collection.artworks.length > 0
                    )
                )
            })
            .catch((e) => {
                console.log(`Error: ${JSON.stringify(e)}`)
            })
    }, [])

    const handleClickScroll = (scrollToCollectionId: number) => {
        const element = document.getElementById(
            `${scrollToCollectionId}-section`
        )
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div
            style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
            }}
        >
            <CollectionsGrid
                collections={collections}
                onClick={handleClickScroll}
            />
            {collections &&
                collections.map((collection, index) => {
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
                                    <ImageGrid artworks={collection.artworks} />
                                </div>
                            )}
                        </div>
                    )
                })}
        </div>
    )
}

export default PortfolioPage

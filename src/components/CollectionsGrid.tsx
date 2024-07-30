import '../styling/CollectionsGrid.scss'
import { CollectionArtworkSchema } from '../api/apiTypes'

interface ImageGridProps {
    collections: CollectionArtworkSchema[]
    onClick: (whereToScroll: number) => void
}

const CollectionsGrid = ({ collections, onClick }: ImageGridProps) => {
    return (
        <div className="content">
            {collections &&
                collections.map((collection, index) => (
                    <div
                        key={`${index}-${collection.title}`}
                        onClick={() => onClick(collection.id)}
                    >
                        <div className="c-button-wrapper u-topMediumMargin">
                            <button
                                className="c-button c-button--alpha "
                                data-automation="signIn"
                                type="submit"
                            >
                                <span className="c-button__text ">
                                    {collection.title}
                                </span>
                            </button>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default CollectionsGrid

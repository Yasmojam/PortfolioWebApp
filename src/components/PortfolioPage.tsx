import React, { useState } from 'react'
import ImageGrid from './ImageGrid'
import '../styling/PortfolioPage.scss'
import { useWindowType } from '../utils/window'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
const PortfolioPage = () => {
    const listOfArt = [
        { collection: 'Portraits', tag: 'portrait-collection' },
        { collection: 'Electronic Cats', tag: 'eCat-collection' },
        { collection: 'Branding', tag: 'branding-collection' },
        { collection: 'Display Pictures', tag: 'display-collection' },
    ]

    const windowType = useWindowType()

    const [selectedCollection, setSelectedCollection] = useState(0)

    return (
        <div
            style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
            }}
        >
            {listOfArt.map((artworks, index) => {
                return (
                    <div
                        key={index}
                        style={{
                            flexDirection: 'column',
                            display: 'flex',
                            flex: 1,
                        }}
                    >
                        <div
                            onClick={() => {
                                if (selectedCollection === index) {
                                    setSelectedCollection(-1)
                                } else {
                                    setSelectedCollection(index)
                                }
                            }}
                            className={'collection-title'}
                            style={{
                                display: 'flex',
                                flex: 1,
                                width: '100%',
                                justifyContent: 'space-between',
                                padding: 10,
                            }}
                        >
                            {artworks.collection}

                            {windowType === 'MOBILE' ? (
                                <FontAwesomeIcon
                                    size={'sm'}
                                    icon={
                                        selectedCollection === index
                                            ? faMinus
                                            : faPlus
                                    }
                                    color={'#32302c'}
                                />
                            ) : null}
                        </div>
                        {selectedCollection === index &&
                        windowType === 'MOBILE' ? (
                            <div>
                                <ImageGrid type={artworks.tag} />
                            </div>
                        ) : null}
                        {windowType === 'DESKTOP' ? (
                            <div>
                                <ImageGrid type={artworks.tag} />
                            </div>
                        ) : null}
                    </div>
                )
            })}
        </div>
    )
}

export default PortfolioPage

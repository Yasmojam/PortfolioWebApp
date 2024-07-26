import React, { useState } from 'react'
import '../styling/ImageGrid.scss'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import { ArtworkSchema } from '../api/apiTypes'

interface ImageGridProps {
    artworks: ArtworkSchema[]
}

const ImageGrid = ({ artworks }: ImageGridProps) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedArtwork, setSelectedArtwork] = useState(0)

    return (
        <div>
            {modalOpen && (
                <Lightbox
                    imagePadding={50}
                    enableZoom={false}
                    mainSrc={artworks[selectedArtwork].url}
                    nextSrc={
                        selectedArtwork === artworks.length - 1
                            ? artworks[0].url
                            : artworks[selectedArtwork + 1].url
                    }
                    prevSrc={
                        selectedArtwork === 0
                            ? artworks[artworks.length - 1].url
                            : artworks[selectedArtwork - 1].url
                    }
                    onCloseRequest={() => setModalOpen(false)}
                    onMovePrevRequest={() =>
                        setSelectedArtwork(
                            selectedArtwork === 0
                                ? artworks.length - 1
                                : selectedArtwork - 1
                        )
                    }
                    onMoveNextRequest={() =>
                        setSelectedArtwork(
                            selectedArtwork === artworks.length - 1
                                ? 0
                                : selectedArtwork + 1
                        )
                    }
                />
            )}
            <div className="gallery">
                {artworks &&
                    artworks.map((artwork, index) => (
                        <div
                            className="artwork-cont"
                            key={`${index}-${artwork.title}`}
                        >
                            <div className="artwork-info-cont">
                                <img
                                    className={'artwork-desktop'}
                                    alt={artwork.title}
                                    src={artwork.url}
                                    onClick={() => {
                                        setModalOpen(true)
                                        setSelectedArtwork(index)
                                    }}
                                />
                                <div className={'title-year-cont'}>
                                    <div className="artwork-name">
                                        {artwork.title}
                                    </div>
                                    <div className="year">{artwork.date}</div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default ImageGrid

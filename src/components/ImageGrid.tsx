import React, { useState } from 'react'
import '../styling/ImageGrid.scss'
import { ArtworkSchema } from '../api/apiTypes'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

interface ImageGridProps {
    artworks: ArtworkSchema[]
}

const ImageGrid = ({ artworks }: ImageGridProps) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedArtwork, setSelectedArtwork] = useState(0)

    return (
        artworks && (
            <div>
                {modalOpen && (
                    <Lightbox
                        open={modalOpen}
                        close={() => setModalOpen(false)}
                        slides={artworks.map((artwork) => ({
                            src: artwork.url,
                        }))}
                        index={selectedArtwork}
                    />
                )}

                <div className="gallery">
                    {artworks.map((artwork, index) => (
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
                                        setSelectedArtwork(index)
                                        setModalOpen(true)
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
    )
}

export default ImageGrid

import React, { useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import '../styling/ImageGrid.scss'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import { ArtworkSchema } from '../api/apiTypes'
import { extractYearFromISO } from '../utils/shared'

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
                    mainSrc={`${process.env.REACT_APP_API_URL}/${artworks[selectedArtwork].url}`}
                    nextSrc={
                        selectedArtwork === artworks.length - 1
                            ? `${process.env.REACT_APP_API_URL}/${artworks[0].url}`
                            : `${process.env.REACT_APP_API_URL}/${
                                  artworks[selectedArtwork + 1].url
                              }`
                    }
                    prevSrc={
                        selectedArtwork === 0
                            ? `${process.env.REACT_APP_API_URL}/${
                                  artworks[artworks.length - 1].url
                              }`
                            : `${process.env.REACT_APP_API_URL}/${
                                  artworks[selectedArtwork - 1].url
                              }`
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
                            <CSSTransition
                                in={true}
                                appear={true}
                                enter={true}
                                exit={true}
                                timeout={1000}
                                classNames="fade"
                                unmountOnExit
                            >
                                <div className="artwork-info-cont">
                                    <img
                                        className={'artwork-desktop'}
                                        alt={artwork.title}
                                        src={`${process.env.REACT_APP_API_URL}/${artwork.url}`}
                                        onClick={() => {
                                            setModalOpen(true)
                                            setSelectedArtwork(index)
                                        }}
                                    />
                                    <div className={'title-year-cont'}>
                                        <div className="artwork-name">
                                            {artwork.title}
                                        </div>
                                        <div className="year">
                                            {extractYearFromISO(artwork.date)}
                                        </div>
                                    </div>
                                </div>
                            </CSSTransition>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default ImageGrid

import React, { useCallback, useEffect, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import backend from '../api/backend'
import '../styling/ImageGrid.scss'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const ImageGrid = ({ type }) => {
    const [artworks, setArtworks] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedArtwork, setSelectedArtwork] = useState(0)

    const retrieveData = useCallback(async () => {
        await backend
            .get(`/api/artworks/tags/${type}`)
            .then((res) => {
                const artwork = res.data
                // console.log("fetched response: " + JSON.stringify(artwork));
                const sortedArtworks = artwork.data.sort(
                    (a: ArtworkResponse, b: ArtworkResponse) => {
                        // Ascending date - newest to oldest
                        return (
                            new Date(b.date).getTime() -
                            new Date(a.date).getTime()
                        )
                    }
                )
                setArtworks(sortedArtworks)
            })
            .catch((e) => {
                console.log(JSON.stringify(e))
            })
    }, [type])

    useEffect(() => {
        retrieveData()
    }, [retrieveData])

    const extractYearFromISO = (isoDate) => {
        const date = new Date(isoDate)
        return date.getFullYear()
    }

    return (
        <div>
            {modalOpen && (
                <Lightbox
                    imagePadding={50}
                    enableZoom={false}
                    mainSrc={`${process.env.REACT_APP_API_URL}/img/${artworks[selectedArtwork].medium}/${artworks[selectedArtwork].image}`}
                    nextSrc={
                        selectedArtwork === artworks.length - 1
                            ? `${process.env.REACT_APP_API_URL}/img/${artworks[0].medium}/${artworks[0].image}`
                            : `${process.env.REACT_APP_API_URL}/img/${
                                  artworks[selectedArtwork + 1].medium
                              }/${artworks[selectedArtwork + 1].image}`
                    }
                    prevSrc={
                        selectedArtwork === 0
                            ? `${process.env.REACT_APP_API_URL}/img/${
                                  artworks[artworks.length - 1].medium
                              }/${artworks[artworks.length - 1].image}`
                            : `${process.env.REACT_APP_API_URL}/img/${
                                  artworks[selectedArtwork - 1].medium
                              }/${artworks[selectedArtwork - 1].image}`
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
            <TransitionGroup>
                <div className="gallery">
                    {artworks &&
                        artworks.map((artwork, index) => (
                            <div className="artwork-cont" key={index}>
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
                                            src={`${process.env.REACT_APP_API_URL}/img/${artwork.medium}/${artwork.image}`}
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
                                                {extractYearFromISO(
                                                    artwork.date
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </CSSTransition>
                            </div>
                        ))}
                </div>
            </TransitionGroup>
        </div>
    )
}

export default ImageGrid

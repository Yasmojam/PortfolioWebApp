import React, { useCallback, useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import backend from '../api/backend'
import '../styling/ImageGrid.css'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const ImageGrid = ({ type }) => {
    const nodeRef = useRef(null)
    const [artworks, setArtworks] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedArtwork, setSelectedArtwork] = useState(0)

    const retrieveData = useCallback(async () => {
        await backend
            .get(`/api/artworks/tags/${type}`)
            .then((res) => {
                const artwork = res.data
                // console.log("fetched response: " + JSON.stringify(artwork));
                const sortedArtworks = artwork.data.sort((a, b) => {
                    // Ascending date - newest to oldest
                    return new Date(b.date) - new Date(a.date)
                })
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
        <CSSTransition
            nodeRef={nodeRef}
            in={true}
            appear={true}
            enter={true}
            exit={true}
            timeout={300}
            classNames="fade"
            unmountOnExit
        >
            <div>
                {modalOpen && (
                    <Lightbox
                        imagePadding={100}
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
                <div className="gallery" ref={nodeRef}>
                    {artworks &&
                        artworks.map((artwork, index) => (
                            <div className="artwork-cont" key={index}>
                                <div className="artwork-info-cont">
                                    <img
                                        className="artwork"
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
                                            {extractYearFromISO(artwork.date)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </CSSTransition>
    )
}

export default ImageGrid

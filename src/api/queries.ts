import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import {
    ABOUT_INFO_API,
    ARTWORKS_BY_MEDIUM_API,
    BASE_URL,
    COLLECTIONS_API,
    FRONT_PAGE_ARTWORKS_API,
    ICON_API,
} from './constants'
import {
    ArtworkSchema,
    CollectionArtworkSchema,
    IconSchema,
    AboutInfoSchema,
} from './apiTypes'
import {
    extractYearFromISO,
    MediumType,
    sortArtworksByDate,
} from '../utils/shared'

export const client = axios.create({
    baseURL: BASE_URL,
})

const transformArtwork = (artwork: ArtworkSchema): ArtworkSchema => {
    return {
        ...artwork,
        date: extractYearFromISO(artwork.date),
        url: `${BASE_URL}${artwork.url}`,
    }
}

const transformArtworks = (artworks: ArtworkSchema[]): ArtworkSchema[] => {
    return artworks.map((artwork) => transformArtwork(artwork))
}

export const useCollections = () => {
    return useQuery({
        queryKey: [COLLECTIONS_API],
        queryFn: () => client.get<CollectionArtworkSchema[]>(COLLECTIONS_API),
        select: (res) => {
            const collectionsData = res.data
            return collectionsData
                .filter(
                    (collection) =>
                        collection.artworks && collection.artworks.length > 0
                )
                .map((collection) => ({
                    ...collection,
                    artworks: transformArtworks(
                        (collection.artworks ?? []).sort(sortArtworksByDate)
                    ),
                }))
        },
    })
}

export const useArtworks = (medium: MediumType) => {
    return useQuery({
        queryKey: [ARTWORKS_BY_MEDIUM_API],
        queryFn: () => client.get<ArtworkSchema[]>(`${ARTWORKS_BY_MEDIUM_API}`),
        select: (res) => {
            const artworks = res.data
            const sortedArtworks = artworks.sort(sortArtworksByDate)

            return transformArtworks(sortedArtworks).filter(
                (artwork) => artwork.category === medium
            )
        },
    })
}

export const useSlideShowArtworks = () => {
    return useQuery({
        queryKey: [FRONT_PAGE_ARTWORKS_API],
        queryFn: () => client.get<ArtworkSchema[]>(FRONT_PAGE_ARTWORKS_API),
        select: (res) => {
            const artworks = res.data
            return transformArtworks(artworks)
        },
    })
}

export const useIcon = () => {
    return useQuery({
        queryKey: [ICON_API],
        queryFn: () => client.get<IconSchema>(ICON_API),
        select: (res) => {
            const icon = res.data.artwork
            return transformArtwork(icon)
        },
    })
}

export const useAboutInfo = () => {
    return useQuery({
        queryKey: [ABOUT_INFO_API],
        queryFn: () => client.get<AboutInfoSchema>(ABOUT_INFO_API),
        select: (res) => {
            const aboutInfo = res.data
            return {
                ...aboutInfo,
                artwork: transformArtwork(aboutInfo.artwork),
            }
        },
    })
}

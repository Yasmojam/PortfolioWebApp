import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import {
    ARTWORKS_BY_MEDIUM_API,
    BASE_URL,
    COLLECTIONS_API,
    FRONT_PAGE_ARTWORKS_API,
} from './constants'
import { ArtworkSchema, CollectionArtworkSchema } from './apiTypes'
import {
    extractYearFromISO,
    MediumType,
    sortArtworksByDate,
} from '../utils/shared'

export const client = axios.create({
    baseURL: BASE_URL,
})

const transformArtworks = (artworks: ArtworkSchema[]) => {
    return artworks.map((artwork) => ({
        ...artwork,
        date: extractYearFromISO(artwork.date),
        url: `${BASE_URL}/${artwork.url}`,
    }))
}

export const useCollections = () => {
    return useQuery({
        queryKey: [COLLECTIONS_API],
        queryFn: () => client.get<CollectionArtworkSchema[]>(COLLECTIONS_API),
        select: (res) => {
            const collectionsData = res.data
            return collectionsData
                .filter((collection) => collection.artworks.length > 0)
                .map((collection) => ({
                    ...collection,
                    artworks: transformArtworks(collection.artworks),
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
                (artwork) => artwork.medium === medium
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

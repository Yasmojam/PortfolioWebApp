import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ARTWORKS_BY_MEDIUM_API, COLLECTIONS_API, FRONT_PAGE_ARTWORKS_API } from "./constants";
import { ArtworkSchema, CollectionArtworkSchema } from "./apiTypes";
import { MediumType, sortArtworksByDate } from "../utils/shared";

const baseURl = process.env.REACT_APP_API_URL;
export const client = axios.create({
  baseURL: baseURl,
});

export const useCollections = () => {
  return useQuery(
    {
      queryKey: [COLLECTIONS_API],
      queryFn: () => client.get<CollectionArtworkSchema[]>(COLLECTIONS_API),
      select: (res) => {
        const collectionsData = res
          .data
        return collectionsData.filter(
          (collection) => collection.artworks.length > 0)
      },
    }
  )
}

export const useArtworksByMedium = (medium: MediumType) => {
  return useQuery(
    {
      queryKey: [ARTWORKS_BY_MEDIUM_API],
      queryFn: () => client.get<ArtworkSchema[]>(`${ARTWORKS_BY_MEDIUM_API}?medium=${medium}`),
      select: (res) => {
        const artworks = res.data
        return artworks.sort(sortArtworksByDate)
      },
    }
  )
}

export const useSlideShowArtworks = () => {
  return useQuery(
    {
      queryKey: [FRONT_PAGE_ARTWORKS_API],
      queryFn: () => client.get<ArtworkSchema[]>(FRONT_PAGE_ARTWORKS_API),
      select: (res) => {
        const artworks = res.data
        return artworks
      },
    }
  )

}
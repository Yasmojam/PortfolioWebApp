/* tslint:disable */
/* eslint-disable */
/**
/* This file was automatically generated from pydantic models by running pydantic2ts.
/* Do not modify it by hand - just update the pydantic models and then re-run the script
*/

export interface ArtworkSchema {
    title: string
    date: string
    url: string
    collectionId?: number
}
export interface CamelModel {}
export interface CollectionArtworkSchema {
    id: number
    title: string
    description: string
    artworks?: ArtworkSchema[]
}
export interface CollectionSchema {
    id: number
    title: string
    description: string
}

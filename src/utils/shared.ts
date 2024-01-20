import { ArtworkSchema } from '../api/apiTypes'

export const sideBarIcon = `${process.env.REACT_APP_API_URL}/img/digital/me_profile.jpg`

export enum paths {
    HOME = '/',
    ABOUT = '/about',
    DIGITAL = '/digital',
    TRADITIONAL = '/traditional',
    COLLECTIONS = '/collections',
}

export const listOfPages = [
    { to: '/', title: 'Home' },
    { to: '/about', title: 'About' },
    { to: '/digital', title: 'Digital' },
    { to: '/traditional', title: 'Traditional' },
    { to: '/collections', title: 'Collections' },
]

export enum MediumType {
    TRADITIONAL = 'traditional',
    DIGITAL = 'digital',
}

export const extractYearFromISO = (isoDate) => {
    const date = new Date(isoDate)
    return date.getFullYear()
}

export const sortArtworksByDate = (a: ArtworkSchema, b: ArtworkSchema) => {
    // Ascending date - newest to oldest
    return new Date(b.date).getTime() - new Date(a.date).getTime()
}

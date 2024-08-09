import { ArtworkSchema } from '../api/apiTypes'

export const sideBarIcon = `${
    import.meta.env.VITE_APP_API_URL
}/media/img/me_profile.jpg`

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
    COLLABORATIVE = 'collaborative',
    MISCELLANEOUS = 'miscellaneous',
}

export const extractYearFromISO = (isoDate: string) => {
    const date = new Date(isoDate)
    return date.getFullYear().toString()
}

export const sortArtworksByDate = (a: ArtworkSchema, b: ArtworkSchema) => {
    // Ascending date - newest to oldest
    return new Date(b.date).getTime() - new Date(a.date).getTime()
}

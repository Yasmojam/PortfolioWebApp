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

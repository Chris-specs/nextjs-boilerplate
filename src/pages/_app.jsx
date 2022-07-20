// Styles
import '../styles/globals.sass'
// RouteProtector
import RouteProtector from '@layouts/RouteProtector'

function MyApp({ Component, pageProps }) {
    return (
        <RouteProtector>
            <Component {...pageProps} />
        </RouteProtector>
    )
}

export default MyApp

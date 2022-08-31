
import AppContextProvider from "../components/AppContext"
import Landing from "../components/landing";

export default function Home() {
    return (
        <AppContextProvider>
            <Landing/>
        </AppContextProvider>
    );
}

import { Suspense, lazy, useEffect } from 'react';
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';

import './App.scss';
import AOS from 'aos'
import "aos/dist/aos.css";
import Box from "@mui/joy/Box";
import Layout from './Layout/Layout.component';
import PageLoaderSkeleton from './components/pageLoaderSkeleton/PageLoaderSkeleton.component';

const Home = lazy(() => import('./routes/Home/Home.page'));
const Varieties = lazy(() => import('./routes/Varieties/Varieties.page'));
const Contact = lazy(() => import('./routes/Contact/Contact.page'));

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={
            <Suspense fallback={<PageLoaderSkeleton />}>
                <Home />
            </Suspense>
        } />
        <Route path={`/varieties`} element={
            <Suspense fallback={<PageLoaderSkeleton />}>
                <Varieties />
            </Suspense>
        } />
        <Route path={`/contact`} element={
            <Suspense fallback={<PageLoaderSkeleton />}>
                <Contact />
            </Suspense>
        } />
        <Route path={`/*`} element={<Home />} />
    </Route>
));


function App() {

    useEffect(() => {
        /* ! important how to init AOS in Vite */
        /* Also important following line in the import section - import  "aos/dist/aos.css"; */
        console.log('in here')
        AOS.init({
            easing: 'ease-in',
            // easing: 'ease-in-sine',
            delay: 0,
            duration: 300,
            offset: 50,
            anchorPlacement: 'bottom-center',
        })
    }, []);

    return (
        <Box sx={{ width: '100vw', m: 0, p: 0 }}>
            <RouterProvider router={router} />
        </Box>
    )
}
export default App;

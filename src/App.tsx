import { Suspense, lazy, useEffect } from 'react';
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';

import './App.scss';
import AOS from 'aos'
import Box from "@mui/joy/Box";
import Layout from './Layout/Layout.component';
import PageLoaderSkeleton from './components/pageLoaderSkeleton/PageLoaderSkeleton.component';
import Varieties from './routes/Varieties/Varieties.page';
import Home from './routes/Home/Home.page';
// const Varieties = lazy(() => import('./routes/Pricing/Pricing'));
const Contact = lazy(() => import('./routes/Contact/Contact.page'));

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
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
        AOS.init({
            easing: 'ease-in',
            delay: 50,
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

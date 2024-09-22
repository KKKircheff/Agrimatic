import { useEffect } from 'react';
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';

import './App.scss';
import AOS from 'aos'
import Box from "@mui/joy/Box";
import Home from './routes/Home.page'
import Layout from './Layout/Layout.component';
// import PageLoaderSkeleton from "./components/pageLoaderSkeleton/PageLoaderSkeleton.component";
// const Resources = lazy(() => import('./routes/Resources/Resources'));
// const Pricing = lazy(() => import('./routes/Pricing/Pricing'));
// const AiWriter = lazy(() => import('./routes/AI_Writer/AiWriter'));
// const SignUp = lazy(() => import('./routes/SignUp/SignUp'));
// const LogIn = lazy(() => import('./routes/LogIn/LogIn'));
// const Profile = lazy(() => import('./routes/Profile/Profile'));
// const ProtectedRoute = lazy(() => import('./components/protected-route/ProtectedRoute.component'))

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        {/* <Route path={`/resources`} element={
            <Suspense fallback={<PageLoaderSkeleton />}>
                <Resources />
            </Suspense>
        } />

        <Route path={`/pricing`} element={
            <Suspense fallback={<PageLoaderSkeleton />}>
                <Pricing />
            </Suspense>
        } />

        <Route path={`/ai-writer`} element={
            <Suspense fallback={<PageLoaderSkeleton />}>
                <ProtectedRoute>
                    <AiWriter />
                </ProtectedRoute>
            </Suspense>
        } />

        <Route path={`/signup`} element={
            <Suspense fallback={<PageLoaderSkeleton />}>
                <SignUp />
            </Suspense>
        } />

        <Route path={`/login`} element={
            <Suspense fallback={<PageLoaderSkeleton />}>
                <LogIn />
            </Suspense>
        } />
        <Route path={`/profile`} element={
            <Suspense fallback={<PageLoaderSkeleton />}>
                <ProtectedRoute>
                    <Profile />
                </ProtectedRoute>
            </Suspense>
        } /> */}
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

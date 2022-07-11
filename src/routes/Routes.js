import HeaderOnly from '../Layout/HeaderOnly/HeaderOnly';

import routeConfig from '../config/routes';

import Home from '../pages/Home/Home';
import Following from '../pages/Following/Following'
import Profile from '../pages/Profile/Profile'
import Upload from '../pages/Upload/Upload'

const publicRoutes = [
    { path: routeConfig.home , component: Home},
    { path: routeConfig.following , component: Following},
    { path: routeConfig.profile , component: Profile},
    { path: routeConfig.upload , component: Upload, layout: HeaderOnly}
];
const privateRoutes = [

]

export {publicRoutes, privateRoutes} 

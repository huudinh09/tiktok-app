import HeaderOnly from '../Layout/HeaderOnly/HeaderOnly';

import Home from '../pages/Home/Home';
import Following from '../pages/Following/Following'
import Profile from '../pages/Profile/Profile'
import Upload from '../pages/Upload/Upload'

const publicRoutes = [
    { path: '/' , component: Home},
    { path: '/following' , component: Following},
    { path: '/@:nickname' , component: Profile},
    { path: '/upload' , component: Upload, layout: HeaderOnly}
];
const privateRoutes = [

]

export {publicRoutes, privateRoutes} 

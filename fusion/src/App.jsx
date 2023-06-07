/* eslint-disable no-unused-vars */
import './App.css';
import LoadingSpinner from './components/LoadingSpinner'
import {Routes, Route} from 'react-router-dom';
import {Home} from './components/Home/Home.jsx'
import { ExplorePage } from './pages/Explore/ExplorePage';
import {Feed} from './components/Feed/Feed';
import {Admin} from './components/admin/Admin'
import {Login} from './components/auth/login/Login';
import {SignUp} from './components/auth/signup/SignUp';
import {Auth} from './components/auth/Auth';
import {Chat} from './components/chat/Chat';
import {VPlayer} from './components/vedioPlayer/vPlayer';
import {LayerComponent} from './layer/LayerComponent';
import {HelmetProvider, Helmet} from 'react-helmet-async';
import {HomePage} from './pages/Home/HomePage';
import { PrivateRoute } from './routes/PrivateRoute';
import { PublicRoute } from './routes/PublicRoute';
import { ProtectedRoute } from './routes/ProtectedRoute';
import { ChannelsPage } from './pages/Channels/ChannelsPage';
import GroupVoice from './components/voice/GroupVoice';
import { Channels } from './components/channels/Channels';
import Direct from './components/direct/Direct';
import VideoChat from './components/video/VideoChat';
const isDemo = false

function App() {

    return (

        <>
            <HelmetProvider>
                <Helmet>
                    <meta charSet='utf-8'/>
                    <title>Fusion</title>
                    <link rel="canonical" href="http://localhost:5173"/>
                </Helmet>
                <LoadingSpinner/>
                <div className="App">
                    <Routes> {
                        isDemo ? (
                            <>
                                <Route path='/'
                                    element={<HomePage/>}>
                                    <Route index
                                        element={<ExplorePage/>}/>
                                    <Route path='chat'
                                        element={<Chat/>}/>
                                    <Route path='feed'
                                        element={<Feed/>}/>
                                    <Route path='video'
                                        element={<VPlayer/>}/>
                                </Route>

                                <Route exact path='admin/*'
                                    element={<Admin/>}></Route>
                                <Route exact path='auth/*'
                                    element={<Auth/>}>
                                    <Route path='login'
                                        element={<Login/>}/>
                                    <Route path='register'
                                        element={<SignUp/>}/>
                                </Route>

                                <Route exact path='/channels/:id' element={<ChannelsPage/>}>

                                <Route index element={<Chat/>} />
                                <Route path='voice/:id' element={<GroupVoice/>} />
                                <Route path='video/:id' element={<VideoChat/>} />

                                </Route>

                                <Route exact path='/direct/' element={<Direct/>}>
                                    
                                </Route>
                                
                            </>
                        ) : (
                            <>
                            <Route element={<PrivateRoute/>}>
                                <Route path='/'
                                    element={<HomePage/>}>
                                    <Route index
                                        element={<ExplorePage/>}/>
                                    <Route path='chat'
                                        element={<Chat/>}/>
                                    <Route path='feed'
                                        element={<Feed/>}/>
                                    <Route path='video'
                                        element={<VPlayer/>}/>
                                </Route>
                            </Route>
                                <Route exact path='admin/*'
                                    element={<Admin/>}>
                                </Route>
                            <Route element={<PublicRoute/>}>
                                <Route exact path='auth/'
                                    element={<Auth/>}>
                                    <Route path='login'
                                        element={<Login/>}/>
                                    <Route path='register'
                                        element={<SignUp/>}/>
                                </Route>
                            </Route>
                            
                            <Route element={<PrivateRoute/>}>
                            <Route exact path='/channels/:id' element={<ChannelsPage/>}>

                                <Route index element={<Chat/>} />
                                <Route path='voice/:id' element={<GroupVoice/>} />
                                <Route path='video/:id' element={<VideoChat/>} />

                            </Route>
                            </Route>

                            <Route element={<PrivateRoute/>}>
                            <Route exact path='/direct/' element={<Direct/>}>

                              
                            </Route>
                            </Route>
                            </>
                        )
                    } 
                    </Routes>

                </div>
                <LayerComponent/> 
                
                </HelmetProvider>
        </>
    );
}

export default App;

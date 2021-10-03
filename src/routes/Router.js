import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";
import Header from '../common/header/Header';
import Main from '../layout/main/Main';
import BlogDetails from '../layout/blog-details/BlogDetails';
import SideNav from '../common/sidenav/SideNav';

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                   <Route path='/home' component={Main} />
                   <Route path='/blogdetails' component={BlogDetails} />
                   <Route path='/sidenav' component={SideNav} />
                   <Route path='/' component={Main} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}



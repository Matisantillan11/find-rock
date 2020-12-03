import React from 'react'
import{BrowserRouter, Switch, Route} from 'react-router-dom'
import SearchResultPage from '../containers/SearchResultPage.jsx'
import Artist from '../containers/Artist.jsx'
import Home from '../containers/HomePage.jsx'

export default () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exacth path="/search" component={SearchResultPage}/>
                <Route exact path="/artist" component={Artist}/>
                <Route path="/" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}
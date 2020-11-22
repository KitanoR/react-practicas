import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroesScreen } from '../components/heroes/HeroesScreen';
import { DcScreen } from '../components/dc/DcScreen';

export const DashboardRoutes = () => {
    return (
      <>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/marvel" component={MarvelScreen} />
            <Route exact path="/marvel/:heroeID" component={HeroesScreen} />
            <Route exact path="/dc" component={DcScreen} />
            <Redirect to="/marvel" />
          </Switch>
        </div>
      </>
    );
}

import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Signup from '~/pages/Signup';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

import RegisterProvider from '~/pages/RegisterProvider';
import RegisterClient from '~/pages/RegisterClient';
import RegisterProduct from '~/pages/RegisterProduct';
import RegisterPoints from '~/pages/RegisterPoints';
import ListProviders from '~/pages/ListProviders';
import ListClients from '~/pages/ListClients';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={Signup} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/registerProvider" component={RegisterProvider} isPrivate />
      <Route path="/registerClient" component={RegisterClient} isPrivate />
      <Route path="/registerProduct" component={RegisterProduct} isPrivate />
      <Route path="/registerPoints" component={RegisterPoints} isPrivate />
      <Route path="/listProviders" component={ListProviders} isPrivate />
      <Route path="/listClients" component={ListClients} isPrivate />
    </Switch>
  );
}

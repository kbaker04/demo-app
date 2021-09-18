import React, { FC } from 'react';
import {
  Switch, Route
} from 'react-router-dom';

import PostList from '../pages/PostList';

import { RoutesProps } from './types';

const Routes: FC<RoutesProps> = () => (
  <Switch>
    <Route path="/" exact>
      <PostList />
    </Route>
  </Switch>
);

export default Routes;

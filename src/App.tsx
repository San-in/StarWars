import React, {JSX} from 'react';
import {Navigation} from './navigations/Navigation.tsx';
import {Provider} from 'react-redux';
import {store} from './redux/store.ts';

export const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

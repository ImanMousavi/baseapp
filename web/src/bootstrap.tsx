/* eslint-disable global-require */
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactDOM from 'react-dom';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Provider } from 'react-redux';
import { UserContextProvider } from 'web/src/components/app/UserContextProvider';

import { App } from './App';
import { AppContextProvider } from './components/app/AppContextProvider';
import './index.pcss';
import { rootSaga } from './modules';
import { rangerSagas } from './modules/public/ranger';
import { rangerMiddleware, sagaMiddleware, store } from './store';

if (!Intl?.PluralRules) {
  require('@formatjs/intl-pluralrules/polyfill');
  require('@formatjs/intl-pluralrules/locale-data/en');
  require('@formatjs/intl-pluralrules/locale-data/ru');
  require('@formatjs/intl-pluralrules/locale-data/uk');
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
if (!Intl?.RelativeTimeFormat) {
  require('@formatjs/intl-relativetimeformat/polyfill');
  require('@formatjs/intl-relativetimeformat/locale-data/en');
  require('@formatjs/intl-relativetimeformat/locale-data/ru');
  require('@formatjs/intl-relativetimeformat/locale-data/uk');
}

sagaMiddleware.run(rootSaga);
rangerMiddleware.run(rangerSagas);

ReactDOM.render(
  <Provider store={store}>
    <UserContextProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </UserContextProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

import { call, delay, put, select } from 'redux-saga/effects';
import { removeCSRFToken } from 'web/src/helpers';
import {
  resetHistory,
  setBlocklistStatus,
  signInRequire2FA,
  userOpenOrdersReset,
  userReset,
} from '../../..';
import { msAlertDisplayTime } from '../../../../api';
import { selectUserInfo, isPendingUser, User } from '../../../user/profile';
import { alertData, alertDelete, AlertPush } from '../actions';
import { ALERT_PUSH } from '../constants';

export function* handleAlertSaga(action: AlertPush) {
  if (action.payload.type === 'error') {
    const { code } = action.payload;
    switch (code) {
      case 401:
        if (action.payload.message.indexOf('identity.session.auth0.email_not_verified') > -1) {
          return;
        }

        const isPending: boolean = yield select(isPendingUser);
        if (isPending) {
          break;
        }

        if (
          action.payload.message.indexOf('identity.session.not_active') > -1 ||
          action.payload.message.indexOf('authz.invalid_session') > -1 ||
          action.payload.message.indexOf('authz.client_session_mismatch') > -1 ||
          action.payload.message.indexOf('authz.csrf_token_mismatch') > -1
        ) {
          yield put(userReset());
          removeCSRFToken();
          yield put(userOpenOrdersReset());
          yield put(signInRequire2FA({ require2fa: false }));
          yield put(resetHistory());
        }

        if (action.payload.message.indexOf('identity.session.not_active') > -1) {
          yield put(alertData(action.payload));
        } else if (
          action.payload.message.indexOf('authz.client_session_mismatch') > -1 ||
          action.payload.message.indexOf('authz.csrf_token_mismatch') > -1
        ) {
          yield call(callAlertData, action);
        } else {
          const user: User = yield select(selectUserInfo);
          if (!user.email.length && action.payload.message.indexOf('authz.invalid_session') > -1) {
            break;
          } else {
            yield call(callAlertData, action);
            break;
          }
        }
        break;
      case 422:
        if (action.payload.message.indexOf('value.taken') > -1) {
          window.location.replace('/');
        } else {
          yield call(callAlertData, action);
        }
        break;
      case 429:
        yield call(callAlertData, {
          type: ALERT_PUSH,
          payload: {
            type: 'error',
            code: 429,
            message: ['error.try_later'],
          },
        });
        break;
      case 471:
        yield put(setBlocklistStatus({ status: 'restricted' }));
        break;
      case 472:
        yield put(setBlocklistStatus({ status: 'maintenance' }));
        break;
      default:
        yield call(callAlertData, action);
    }
  } else {
    yield call(callAlertData, action);
  }
}

function* callAlertData(action: AlertPush) {
  yield put(alertData(action.payload));
  yield delay(parseFloat(msAlertDisplayTime()));
  yield put(alertDelete());
}

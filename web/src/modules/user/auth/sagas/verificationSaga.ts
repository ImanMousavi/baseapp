import { call, put } from 'redux-saga/effects';
import { setCSRFToken } from 'web/src/helpers/CSRFToken';
import { alertPush, sendError, User, userData } from '../../..';
import { API, RequestOptions } from '../../../../api';
import { signUpError, VerificationFetch } from '../actions';

const verificationConfig: RequestOptions = {
  apiVersion: 'barong',
};

export function* verificationSaga(action: VerificationFetch) {
  try {
    const user: User = yield call(
      API.post(verificationConfig),
      '/identity/users/email/confirm_code',
      action.payload,
    );

    yield put(userData({ user }));
    if (user.csrf_token) {
      setCSRFToken(user.csrf_token);
    }

    yield put(alertPush({ message: ['success.email.confirmed'], type: 'success' }));
  } catch (error) {
    yield put(
      sendError({
        error,
        processingType: 'alert',
        extraOptions: {
          actionError: signUpError,
        },
      }),
    );
  }
}

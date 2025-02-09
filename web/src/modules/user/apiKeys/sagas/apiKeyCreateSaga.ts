import { call, put } from 'redux-saga/effects';
import { alertPush, sendError } from '../../..';
import { API, RequestOptions } from '../../../../api';
import { getCSRFToken } from '../../../../helpers';
import {
  apiKeyCreate,
  ApiKeyCreateFetch,
  ApiKeyDataInterface,
  apiKeys2FAModal,
  apiKeysError,
} from '../actions';

const createOptions = (csrfToken?: string): RequestOptions => {
  return {
    apiVersion: 'barong',
    headers: { 'X-CSRF-Token': csrfToken },
  };
};

export function* apiKeyCreateSaga(action: ApiKeyCreateFetch) {
  try {
    const apiKey: ApiKeyDataInterface = yield call(
      API.post(createOptions(getCSRFToken())),
      '/resource/api_keys',
      action.payload,
    );
    yield put(apiKeyCreate(apiKey));
    yield put(alertPush({ message: ['success.api_keys.created'], type: 'success' }));
    yield put(apiKeys2FAModal({ action: 'createSuccess', apiKey }));
  } catch (error) {
    yield put(
      sendError({
        error,
        processingType: 'alert',
        extraOptions: {
          actionError: apiKeysError,
        },
      }),
    );
  }
}

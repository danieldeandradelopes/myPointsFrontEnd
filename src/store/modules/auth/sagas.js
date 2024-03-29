import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error('Usuário não é prestador de serviços!');
      return;
    }

    api.defaults.headers.Authorization = `bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha na autenticação, verifique seus dados!');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, cpf } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      cpf,
      provider: true,
    });

    toast.success('Colaborador cadastrado!');

    history.push('/');
  } catch (error) {
    toast.error('Falha no cadastro, verifique seus dados!');

    yield put(signFailure());
  }
}

export function* signUpClient({ payload }) {
  try {
    const { name, email, cpf } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      cpf,
      provider: false,
    });

    toast.success('Cliente cadastrado!');

    history.push('/');
  } catch (error) {
    toast.error('Falha no cadastro, verifique seus dados!');

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}
export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_UP_REQUEST_CLIENT', signUpClient),
  takeLatest('@auth/SIGN_OUT', signOut),
]);

import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { registerPointsFailure } from './actions';

export function* registerPoints({ payload }) {
  try {
    const { cpf, cash_value, date } = payload;

    // console.log(date);

    yield call(api.post, 'transactions', {
      date,
      cpf,
      cash_value,
    });

    toast.success('Pontos registrados com sucesso!');

    history.push('/');
  } catch (error) {
    toast.error('Falha ao registrar os pontos!');
    yield put(registerPointsFailure());
  }
}

export default all([
  takeLatest('@points/REGISTER_POINTS_REQUEST', registerPoints),
]);

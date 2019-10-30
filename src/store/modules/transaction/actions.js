export function registerPointsRequest(cpf, cash_value, date) {
  return {
    type: '@points/REGISTER_POINTS_REQUEST',
    payload: { cpf, cash_value, date },
  };
}

export function registerPointsSuccess(points) {
  return {
    type: '@points/REGISTER_POINTS_SUCCESS',
    payload: { points },
  };
}

export function registerPointsFailure() {
  return {
    type: '@points/REGISTER_POINTS_FAILURE',
  };
}

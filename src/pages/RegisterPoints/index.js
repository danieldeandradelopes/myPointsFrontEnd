import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { format } from 'date-fns';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';

import { registerPointsRequest } from '~/store/modules/transaction/actions';

import { Container, ButtonBack, ButtonAdd } from './styles';

const schema = Yup.object().shape({
  cpf: Yup.string().required('Insira um cpf válido!'),
  cash_value: Yup.number().required('Insira o valor da compra!'),
});

export default function RegisterPoints() {
  const dispatch = useDispatch();

  function handleSubmit({ cpf, cash_value }) {
    const date = format(new Date(), "yyyy-MM-dd'T'HH:mm:ssxxx");

    dispatch(registerPointsRequest(cpf, cash_value, date));
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <h1>Cadastrar Pontos</h1>

        <Input name="cpf" placeholder="CPF do Cliente" type="text" />

        <Input
          type="number"
          min="0"
          name="cash_value"
          placeholder="Valor da compra"
        />
        <hr />
        <ButtonAdd type="submit">Cadastrar</ButtonAdd>
      </Form>

      <Link to="/dashboard">
        <ButtonBack type="button" onClick={() => {}}>
          Voltar
        </ButtonBack>
      </Link>
    </Container>
  );
}

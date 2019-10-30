import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';
// import { signOut } from '~/store/modules/auth/actions';

import { signUpRequestClient } from '~/store/modules/auth/actions';

// import AvatarInput from './AvatarInput';

import { Container, ButtonBack, ButtonAdd } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido!')
    .required('O e-mail é obrigatório!'),
  cpf: Yup.string().required('Insira um cpf válido!'),
});

export default function RegisterClient() {
  const dispatch = useDispatch();
  // const profile = useSelector(state => state.user.profile);

  function handleSubmit({ name, email, cpf }) {
    dispatch(signUpRequestClient(name, email, cpf));
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <h1>Adicionar Cliente</h1>
        {/* <AvatarInput name="avatar_id" /> */}

        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" placeholder="E-mail do cliente" type="email" />
        <Input name="cpf" placeholder="CPF" type="number" minLength="0" />
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

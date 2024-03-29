import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Link } from 'react-router-dom';
// import { signOut } from '~/store/modules/auth/actions';

import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container, ButtonBack, ButtonAdd } from './styles';

export default function RegisterProduct() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  // function handleSignOut() {
  //   dispatch(signOut());
  // }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" placeholder="Seu endereço de e-mail" type="email" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />
        <ButtonAdd type="submit">Atualizar perfil</ButtonAdd>
      </Form>

      <Link to="/dashboard">
        <ButtonBack type="button" onClick={() => {}}>
          Voltar
        </ButtonBack>
      </Link>
    </Container>
  );
}

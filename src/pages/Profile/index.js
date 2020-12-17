/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

import AvatarInput from './Avatarinput';

import { Container } from './styles';

function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.user.profile);
    const [title] = useState('ProjetoWeb | Meu Perfil');

    useEffect(() => {
        document.title = title;
    }, [title]);

    function handleSubmit(data) {
        dispatch(updateProfileRequest(data));
    }

    function handleSignOut() {
        dispatch(signOut());
    }

    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <AvatarInput name="avatar_id" />

                <Input name="name" placeholder="Nome Completo" />
                <Input
                    name="email"
                    type="email"
                    placeholder="Seu endereço de email"
                />

                <hr />
                <Input
                    name="oldPassword"
                    type="password"
                    placeholder="Sua senha atual"
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Nova senha"
                />
                <Input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirmação de senha"
                />

                <button type="submit">Atualizar perfil</button>
            </Form>

            <button type="button" onClick={handleSignOut}>
                Sair do ProjetoWeb
            </button>
        </Container>
    );
}

export default Profile;

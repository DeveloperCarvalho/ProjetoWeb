import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
    name: Yup.string().required('Nome Obrigatório'),
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('E-mail obrigatório'),
    password: Yup.string()
        .min(6, 'No minimo 6 caracteres')
        .required('Senha obrigatória'),
});

function SignUp() {
    const dispatch = useDispatch();

    function handleSubmit({ name, email, password }) {
        dispatch(signUpRequest(name, email, password));
    }
    return (
        <>
            <img src={logo} alt="Projeto Web" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome completo" />
                <Input
                    name="email"
                    type="email"
                    placeholder="Digite o seu e-mail"
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Digite sua senha"
                />
                <button type="submit">Criar Conta</button>
                <Link to="/">Retornar a página anterior</Link>{' '}
            </Form>
        </>
    );
}

export default SignUp;

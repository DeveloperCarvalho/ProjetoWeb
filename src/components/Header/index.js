import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logoMenor.svg';
import { Container, Content, Profile } from './styles';

function Header() {
    const profile = useSelector((state) => state.user.profile);

    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} width={120} alt="Logo" />
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>

                <aside>
                    <Notifications />

                    <Profile>
                        <div>
                            <strong>{profile.name}</strong>
                            <Link to="/profile">Meu Perfil!</Link>
                        </div>
                        <img
                            src={
                                profile.avatar.url ||
                                'https://avatars.dicebear.com/4.5/api/avataaars/.svg?w=50&h=50'
                            }
                            alt="José"
                        />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}

export default Header;

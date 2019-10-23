import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaHornbill } from 'react-icons/fa';

// import Notifications from '~/components/Notifications';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <div>
            <Link to="/dashboard">
              <FaHornbill color="#7159c1" size={30} />
            </Link>
          </div>
          <Link to="/dashboard">HOME</Link>
        </nav>

        <aside>
          {/* <Notifications /> */}
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>

            <img
              src={
                profile.avatar !== null
                  ? profile.avatar.url
                  : 'https://api.adorable.io/avatars/49/abott@adorable.png'
              }
              alt="Profile"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

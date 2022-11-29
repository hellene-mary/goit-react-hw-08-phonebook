import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Dna } from 'react-loader-spinner';

import UserMenu from 'components/userMenu/UserMenu';
import { Container, Nav, Header, Title } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      <Header>
        {isLoggedIn && <UserMenu />}
        <div>
          {!isLoggedIn && <Nav to="/register">Register</Nav>}
          {!isLoggedIn && <Nav to="/login">Log In</Nav>}
        </div>
        {isLoggedIn && <Nav to="/contacts">Contacts</Nav>}
      </Header>
      <Suspense
        fallback={
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        }
      >
        <Title>Phonebook</Title>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Navigation;

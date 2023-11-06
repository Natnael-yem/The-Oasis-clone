import { styled } from 'styled-components';
import { useUser } from '../features/authentication/useUser';
import Spinner from './Spinner';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FullPage = styled.div`
  height: 100vh;
  background-color: var() (--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* eslint-disable react/prop-types */
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  //if there is No authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  //while loading, show  a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  //if there Is a user, render the app

  if (isAuthenticated) return children ;
}

export default ProtectedRoute;

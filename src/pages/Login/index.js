import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Button, FormInput, Gap, Link } from '../../components';

export default function Login() {
  const history = useHistory();

  const submitLogin = (e) => {
    e.preventDefault();
    history.push('/');
  };

  return (
    <StyledPage>
      <StyledWrapper>
        <StyledForm onSubmit={submitLogin}>
          <StyledLogo>
            <img src="/ig-logo.svg" alt="" />
          </StyledLogo>
          <Gap vertical="39px" />

          <FormInput variant="login-form" placeholder="Username" />
          <Gap vertical="12px" />
          <FormInput
            variant="login-form"
            placeholder="Password"
            type="password"
          />
          <Gap vertical="19px" />

          <Link to="/forgot-password" text="Forgot Password ?" align="right" />
          <Gap vertical="30px" />

          <Button
            type="submit"
            variant="primary"
            label="Log In"
            display="block"
          />
          <StyledOr>
            <StyledLine></StyledLine>
            <p>OR</p>
            <StyledLine></StyledLine>
          </StyledOr>
          <StyledRegistrationLink>
            Don’t have an account?
            <Link to="/register" text="Sign up" />
          </StyledRegistrationLink>
        </StyledForm>
      </StyledWrapper>
    </StyledPage>
  );
}
const StyledRegistrationLink = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  div {
    display: inline-block;
    margin-left: 6px;
  }
`;
const StyledLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.2);
`;
const StyledOr = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 12px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.4);
    padding: 0px 30px;
  }
`;
const StyledWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
`;
const StyledForm = styled.form`
  display: block;
`;
const StyledPage = styled.div``;
const StyledLogo = styled.div`
  text-align: center;
`;

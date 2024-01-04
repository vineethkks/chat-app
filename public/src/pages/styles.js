import styled from 'styled-components';

export const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #4e0eff;
      border-radius: 0.4rem;
      color: white;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid #997aaf;
        outline: none;
      }
      &:input:-internal-autofill-selected {
        background-color: transparent;
        color: white;
      }
    }
    span {
      color: white;
      text-transform: uppercase;
      a {
        color: #4e0eff;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  background-color: #131324;
  height: 100vh;
  width: 100vw;
  .loader {
    max-inline-size: 100%;
  }
  h1 {
    color: white;
  }
  .avatars {
    display: flex;
    gap: 2rem;
    .avatar {
      border: 0.4rem solid transparent;
      padding: 0.4rem;
      border-radius: 5rem;
      display: flex;
      align-items: color-interpolation-filters;
      justify-content: center;
      transition: 0.5s ease-in-out;
      img {
        height: 6rem;
      }
      &:hover {
        scale: 1.2;
        transition: 0.5s;
      }
    }
    .selected {
      border: 0.4rem solid #4e0eff;
    }
  }
`;

export const SubmitButton = styled.button`
  background-color: #997af0;
  color: white;
  padding: 1rem 2rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.4rem;
  font-size: 1rem;
  text-transform: uppercase;
  transition: 0.5s ease-in-out;
  &:hover {
    background-color: #4e0eff;
  }
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: #131324;
  overflow: hidden;
  .container {
    height: 90vh;
    width: 95vw;
    overflow: hidden;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
  h1 {
    color: white;
  }
`;

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 1rem 2rem;
  gap: 1rem;
  &::-webkit-scrollbar {
    width: 10px;
    padding: 2px;
    background: #080420;
    &-thumb {
      width: 2px;
      border-radius: 3px;
      background: #160840;
    }
  }
`;

export const MessageDiv = styled.div`
  .sender {
    float: right;
  }
  .receiver {
    float: left;
  }
  .message {
    display: inline-flex;
    padding: 0.5rem 1rem;
    max-width: 40%;
    background: #160840;
    overflow-wrap: break-word;
    font-size: 1.1rem;
    color: #d1d1e1;
    border-radius: 1rem;
  }
`;

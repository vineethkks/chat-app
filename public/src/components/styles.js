import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  height: 6rem;
  background: #160840;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  .contact-info {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
  }
  img {
    height: 4rem;
    width: 4rem;
  }
  h1 {
    color: white;
  }
`;

export const ChatContactsContainer = styled.div`
  display: grid;
  grid-template-rows: 10% 90%;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  background: #080420;
  &:nth-child(1) {
    box-shadow: 0.2rem 0rem #020105;
    z-index: 1;
  }
  .brand {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    height: 6rem;
    background: #160840;
    align-items: center;
    padding: 2rem;
    img {
      height: 4rem;
      width: 4rem;
    }
    h1 {
      color: white;
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: scroll;
    background: #080420;
    align-items: center;
    &::-webkit-scrollbar {
      width: 10px;
      padding: 2px;
      background: #080420;
    }
    &::-webkit-scrollbar-thumb {
      width: 2px;
      border-radius: 3px;
      background: #160840;
    }
    .contact {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      gap: 2rem;
      height: 6rem;
      padding: 2rem;
      border-bottom: 0.3rem solid #160840;
      &:hover {
        background: #120630;
      }
      img {
        height: 3rem;
        width: 3rem;
      }
      h3 {
        color: white;
      }
    }
  }
`;

export const ConversationSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    color: white;
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
  background: #8075d2;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
  &:hover {
    background: #9186f3;
  }
  &::selection {
    scale: 1.3;
  }
`;

export const ChatContainerDiv = styled.div`
  display: grid;
  grid-template-rows: 90% 10%;
  padding: 2rem;
  gap: 1rem;
  background: #080420;
`;

export const ChatInputContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
  overflow: hidden;
  align-items: center;
  background: #080420;
  padding: 0 2rem;
  padding-bottom: 0.3rem;
  .button-container {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    .emoji {
      position: relative;
      svg {
        font-size: 2rem;
        color: #ffff00c8;
        cursor: pointer;
      }
    }
  }
  .input-container {
    width: 95%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    background: #ffffff34;
    input {
      width: 100%;
      height: 60%;
      background: transparent;
      color: white;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;
      &::selection {
        background: #9186f3;
      }
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 0.3rem 2rem;
      border-radius: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #9186f3;
      border: none;
      svg {
        font-size: 2rem;
        color: white;
      }
    }
  }
`;

export const EmojiPickerContainer = styled.div`
  display: flex;
  width: 100%;
  .epr-main {
    height: 30rem !important;
    width: 100% !important;
    background: #080420;
    box-shadow: 0 5px 10px #9186f3;
    border-color: #9186f3;
    .epr-body {
      padding: 0 1rem;
      &::-webkit-scrollbar {
        background: #080420;
        width: 5px;
        &-thumb {
          background: #9186f3;
        }
      }
    }
    .epr-emoji-category-label {
      background: #080420 !important;
    }
    input.epr-search {
      background: transparent;
      border-color: #9186f3;
    }
  }
`;

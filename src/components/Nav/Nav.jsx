import React from 'react';
import { useSetRecoilState } from 'recoil';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { searchInputState } from '../../atom';

const Nav = () => {
  const history = useHistory();

  const setSearchInput = useSetRecoilState(searchInputState);

  const InputKeyEnter = e => {
    e.key === 'Enter' && history.push('/search');
  };

  return (
    <Section>
      <Container>
        <Logo href="/">LETTER LOG</Logo>
        <Menu>
          <IconSearch>
            <i className="fas fa-search"></i>
          </IconSearch>
          <InputSearch
            onChange={e => setSearchInput(e.target.value)}
            onKeyPress={InputKeyEnter}
            type="search"
            placeholder="우체통을 검색해주세요."
          />
          <CreatePostBtn>우체통 만들기</CreatePostBtn>
        </Menu>
      </Container>
    </Section>
  );
};

export default Nav;

const Section = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.05);
  z-index: 999;
  background-color: #ffff;
`;

const Container = styled.div`
  ${({ theme }) => theme.setFlex('space-between')}
  height: 111px;
  padding: 0 8vw;
`;

const Logo = styled.a`
  text-decoration: none;
  font-size: 18px;
  font-weight: 800;
  color: ${({ theme }) => theme.fontColor};
`;

const Menu = styled.div`
  ${({ theme }) => theme.setFlex('stretch')}
`;

const IconSearch = styled.div`
  &:hover {
    cursor: pointer;
  }

  i {
    font-size: 20px;
    color: ${({ theme }) => theme.fontColor};
  }
`;

const InputSearch = styled.input`
  font-size: 16px;
  margin: 0 10px;
  border-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.fontColor};
  outline: none;

  &::placeholder {
    font-weight: 300;
    color: ${({ theme }) => theme.subFontColor};
  }
`;

const CreatePostBtn = styled.p`
  margin: 0 10px;
  color: ${({ theme }) => theme.fontColor};

  &:hover {
    cursor: pointer;
  }
`;

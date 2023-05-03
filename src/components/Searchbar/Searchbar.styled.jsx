import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0077b6;
  min-height: 64px;
  padding: 8px 16px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  border-radius: 15px;
  overflow: hidden;
  font-size: 20px;
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 48px;
  padding-left: 20px;
  font-size: 20px;
  border: none;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  ::placeholder {
    font-size: 18px;
  }
`;

export const SearchButton = styled.button`
  display: inline-block;
  padding: 5px;
  width: 48px;
  height: 48px;
  border: 0;
  background-color: white;
  cursor: pointer;
  svg {
    fill: blue;
    font-size: 24px;
  }
`;

export const SearchButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;


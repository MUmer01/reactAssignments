import React from "react";
import styled from "styled-components";

// https://styled-components.com/docs/basics
const StyleComponent = () => {
  return (
    <Wrapper>
      <Title>Style Component</Title>
      <Text>
        Some Random Text <span>Example</span>
      </Text>
      <Text>
        Some Random Text <span>Example</span>
      </Text>
      <Text as="a" href="abc" size="60px">
        Link By Text
      </Text>

      <br />

      <Button
        onClick={() => {
          alert("Normal");
        }}
      >
        Normal
      </Button>

      <Button primary>Primary</Button>
    </Wrapper>
  );
};

export default StyleComponent;

const Text = styled.p.attrs((p) => ({
  size: p.size || "1.5em"
}))`
  font-size: ${(props) => props.size};
  text-align: center;
  color: rebeccapurple;
  span {
    color: red;
  }
  .xyz & {
    background-color: red;
  }
  .abc & {
    background-color: blue;
  }
  & + & {
    background-color: yellow;
  }
  &.abc {
    background-color: green;
  }
  &:hover {
    color: red;
  }
  &:visited {
    color: black;
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.div`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


















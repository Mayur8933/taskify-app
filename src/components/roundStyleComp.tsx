import styled from "styled-components";

const Circle = styled.span`
  height: 30px;
  width: 30px;
  border: 8px solid grey;
  &:hover {
    background: yellow;
  }
  margin: 3px;
`;

interface Props {
  icon: any;
}

const RoundStyleComp: React.FC<Props> = ({ icon }) => {
  return (
    <>
      <Circle>{icon}</Circle>
    </>
  );
};

export default RoundStyleComp;

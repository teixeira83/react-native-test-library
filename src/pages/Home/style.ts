import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding: 0 30px;
  background-color: #333;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const BodyText = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 50px;
  background-color: #836FFF;
  width: 50%;
  height: 40px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

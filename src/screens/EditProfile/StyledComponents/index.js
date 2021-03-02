import styled from 'styled-components'

export const Wrapper = styled.View`
  background-color: #FFFFFF;
`

export const EditProfileWrapper = styled.ScrollView`
  width: 343px;
  margin: 0px auto;
  position: relative;
  
`

export const ExitButton = styled.TouchableOpacity`
  position: absolute;
  top: 18px;
  right: 0;
`

export const EditProfileContent = styled.KeyboardAvoidingView`
  position: relative;
  top: 162px;
  width: 100%;
  margin-bottom: 350px;
`

export const EditProfileHeading = styled.Text`
  width: 100%;
  text-align: center;
  font-family: MazzardH-Bold;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 30px;
  text-transform: capitalize;

  color: #1E201D;
  margin-bottom: 38px;
`

export const InputWrapper = styled.View`
  width: 100%;
  position: relative;
  margin-bottom: 10px;
  justify-content: center;
  padding-horizontal: 10px;
`

export const FirstNameInput = styled.TextInput`
  width: 100%;
  height: 45px;
  padding-left: 20px;
  background-color: ${props=>props.isFocused?"white":"#F6F6F6"};
  border-radius: 59px;
  margin-bottom: 5px;
  border: ${props => props.isFocused?"1px solid #EDA920" : "0px"};
`

export const InputIcon = styled.Image`
  position: absolute;
  right: 30px;
`

export const Legend = styled.Text`
  position: relative;
  width: ${props => props.widthValue};
  bottom: -8px;
  left: 20px;
  text-align: center;
  font-weight: bold;
  z-index: 10;
  font-family: MazzardH-Regular;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 18px;
  color: #EDA920;
  background-color: white;

`

export const LastNameInput = styled.TextInput`
  width: 100%;
  height: 45px;
  padding-left: 20px;
  background-color: ${props=>props.isFocused?"white":"#F6F6F6"};
  border-radius: 59px;
  margin-bottom: 5px;
  border: ${props => props.isFocused?"1px solid #EDA920" : "0px"};
`

export const EmailInput = styled.TextInput`
  width: 100%;
  height: 45px;
  padding-left: 20px;
  background-color: ${props=>props.isFocused?"white":"#F6F6F6"};
  border: ${props => props.isFocused?"1px solid #EDA920" : "0px"};
  background: #F6F6F6;
  border-radius: 59px;
  margin-bottom: 5px;
`

export const PhoneInput = styled.TextInput`
  width: 100%;
  height: 45px;
  background: #F6F6F6;
  border-radius: 59px;
  margin-bottom: 15px;
  padding-left: 20px;
  background-color: ${props=>props.isFocused?"white":"#F6F6F6"};
  border: ${props => props.isFocused?"1px solid #EDA920" : "0px"};
`

export const SaveButton = styled.Text`
  width: 96%;
  background: #D51E16;
  border-radius: 59px;
  padding: 15px 0px;
  font-family: MazzardH-Bold;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 5px;
  margin-left: 5px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
`
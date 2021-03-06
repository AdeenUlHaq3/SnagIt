import React from 'react';
import {
  Wrapper,
  InputWrapper,
  InputLeftIcon,
  InputRightIcon,
  SearchInput,
  NothingFoundImage,
} from './StyledComponents'
import { SafeAreaView, View } from 'react-native';
import BottomSearch from '../../Components/BottomSearch'
import searchIcon from '../../assets/search/search.png'
import backIcon from '../../assets/search/back.png'
import nothingFoundImage from '../../assets/search/nothingFound.png'
const Search = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Wrapper behavior='padding' >
        <InputWrapper>

          <SearchInput placeholder="search" />
          <InputLeftIcon source={backIcon} />
          <InputRightIcon source={searchIcon} />
        </InputWrapper>

        <NothingFoundImage source={nothingFoundImage} />
        <View style={{position: "absolute", bottom: 40}}>
          <BottomSearch />
        </View>
      </Wrapper>

    </SafeAreaView>
  );
};

export default Search;
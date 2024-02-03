import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  View,
} from 'react-native';
import {useAppDispatch} from '../../redux/hooks.ts';
import {resetFemaleCount} from '../../redux/slices/femaleSlice.ts';
import {resetMaleCount} from '../../redux/slices/maleSlice.ts';
import {resetOtherGenderCount} from '../../redux/slices/otherGenderSlice.ts';
import {getNextPeople} from '../../services/getNextPeople.ts';
import {getInitialData} from '../../services/getInitialData.ts';
import {PersonShortInfoRow} from '../../components/PersonShortInfoRow';
import {CounterBox} from '../../components/CounterBox';
import {CustomButton} from '../../components/CustomButton';
import {Data, Person} from '../../common/interfaces/data.ts';
import {BACKGROUND_IMAGE} from '../../common/constants.ts';
import {styles} from './styles.ts';

export const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<Person[] | []>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);

  const handleEndReached = async () => {
    if (nextPage) {
      const response: Data = await getNextPeople(nextPage);
      setData(prevState => [...prevState, ...response.results]);
      setNextPage(response.next);
    }
  };
  const resetCounters = () => {
    dispatch(resetMaleCount());
    dispatch(resetFemaleCount());
    dispatch(resetOtherGenderCount());
  };

  useEffect(() => {
    const init = async () => {
      const response: Data | undefined = await getInitialData();
      if (response) {
        setData(response.results);
        setNextPage(response.next);
      }
    };
    init();
  }, []);

  return (
    <ImageBackground
      resizeMode="cover"
      source={{
        uri: BACKGROUND_IMAGE,
      }}
      style={styles.background}>
      {data.length ? (
        <SafeAreaView style={styles.container}>
          <ScrollView
            horizontal
            style={styles.counterContainer}
            contentContainerStyle={styles.counter}>
            <CounterBox name={'male'} />
            <CounterBox name={'female'} />
            <CounterBox name={'other'} />
          </ScrollView>

          <View style={styles.button}>
            <CustomButton
              onPress={resetCounters}
              alingSelf={'flex-end'}
              text={'Reset all'}
            />
          </View>

          <FlatList
            data={data}
            style={styles.list}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => `${item.url} + ${index}`}
            renderItem={({item}) => <PersonShortInfoRow item={item} />}
            onEndReached={handleEndReached}
            onEndReachedThreshold={0.1}
          />
        </SafeAreaView>
      ) : (
        <ActivityIndicator size={'large'} />
      )}
    </ImageBackground>
  );
};

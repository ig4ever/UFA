import React, { useState } from 'react'
import { SafeAreaView, FlatList, RefreshControl } from 'react-native'
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useDebounce } from 'usehooks-ts';

interface Props {
  style?: any
  contentContainerStyle?: any
  Card?: any
  data: any
  renderItem?: any | null
  getData?: (params: any) => void | null
  resetData?: () => void | null
  onPress?: (params: any) => void | null
  limitSize?: number
  numColumns?: number | null
  numPage?: number | null
  numSize?: number | null
  isLastPage?: boolean | false
  horizontal?: boolean | null
  extraParams?: string | null
  ListHeaderComponent?: any | null
  ListFooterComponent?: any | null
  handleLoadMore?: (params: any) => void | null
  loading?: boolean
}

const ListCardItem = (props: Props) => {
  const { 
    style,
    contentContainerStyle,
    Card,
    data,
    renderItem,
    getData, 
    resetData,
    onPress,
    numColumns,
    horizontal,
    extraParams,
    ListHeaderComponent,
    ListFooterComponent,
    handleLoadMore,
    loading,
  } = props;

  const [refreshing, setRefreshing] = useState(false);

  React.useEffect(() => {
    resetData();
    getListItem(extraParams);
  }, [])

  const getListItem = (params: string) => {
    getData ? getData(params) : null;
  }

  const onRefresh = async () => {
    setRefreshing(true);
    resetData ? resetData() : null;
    await getListItem(extraParams);
    setRefreshing(false);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      { renderItem ? 
        <FlatList
          style={style}
          contentContainerStyle={contentContainerStyle}
          numColumns={numColumns ? numColumns : horizontal ? 1 : 1}
          horizontal={horizontal}
          refreshControl={
            loading ? 
            <RefreshControl
              refreshing={loading}
              onRefresh={onRefresh}
              colors={['#3A99D8']}
            />
            :
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#3A99D8']}
            />
          }
          data={data}
          renderItem={renderItem}
          keyExtractor={(item: any) => item?.id}
          onEndReachedThreshold={0.3}
          onEndReached={handleLoadMore}
          ListHeaderComponent={ListHeaderComponent}
          ListFooterComponent={ListFooterComponent}
        /> :
        <FlatList
          style={style}
          contentContainerStyle={contentContainerStyle}
          numColumns={numColumns ? numColumns : horizontal ? 1 : 1}
          horizontal={horizontal}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#3A99D8']}
            />
          }
          data={data}
          renderItem={({ item, index }: { item: any, index: number }) => (
            <Card key={index} item={item} onPress={() => onPress ? onPress(item) : {}} />
          )}
          keyExtractor={(item: any) => item?.id}
          onEndReachedThreshold={0.3}
          onEndReached={handleLoadMore}
          ListHeaderComponent={ListHeaderComponent}
          ListFooterComponent={ListFooterComponent}
        />
      }
    </SafeAreaView>
  )
}

export default ListCardItem;

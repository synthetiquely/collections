import React from 'react';
import { observer } from 'mobx-react';
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll';
import View from '../View/View';
import Gallery from './Gallery';
import NoData from '../NoData/NoData';

const Views = observer(({
  images, isOpen, onClick, isLoading, loadItems,
}) => {
  if (!images) {
    return null;
  }

  if (!images.length && !isLoading) {
    return (
      <NoData>Картинок не найдено. Попробуйте поискать что-нибудь еще.</NoData>
    );
  }

  const renderItems = () =>
    images.map((item, index) => (
      <View image={item} key={item.id} onClick={onClick(index)} />
    ));

  return (
    <InfiniteScroll isLoading={isLoading} loadMore={loadItems}>
      <Gallery isOpen={isOpen}>{renderItems()}</Gallery>
    </InfiniteScroll>
  );
});

export default Views;

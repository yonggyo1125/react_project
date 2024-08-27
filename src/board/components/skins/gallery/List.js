import React from 'react';
import ListItems from './ListItems';
import ListSearchForm from './ListSearchForm';

const List = ({ items, search, onSubmit }) => {
  return (
    <>
      <ListItems items={items} />
      <ListSearchForm search={search} onSubmit={onSubmit} />
    </>
  );
};

export default React.memo(List);

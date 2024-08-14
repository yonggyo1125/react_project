import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Pagination = ({ pagination, onClick }) => {
  console.log(pagination);
  const { page, pages, prevRangePage, nextRangePage, totalPages } = pagination;

  return (
    pages.length > 0 && (
      <Wrapper>
        {pages.map((p) => (
          <div key={'page' + p[0]} onClick={() => onClick(Number(p[0]))}>
            {p[0]}
          </div>
        ))}
      </Wrapper>
    )
  );
};

export default React.memo(Pagination);

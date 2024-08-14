import React from 'react';
import styled from 'styled-components';
import {
  MdFirstPage,
  MdLastPage,
  MdNavigateNext,
  MdNavigateBefore,
} from 'react-icons/md';

const Wrapper = styled.div``;

const Pagination = ({ pagination, onClick }) => {
  const { page, pages, prevRangePage, nextRangePage, totalPages } = pagination;

  return (
    pages.length > 0 && (
      <Wrapper>
        {prevRangePage > 0 && (
          <>
            <MdFirstPage onClick={() => onClick(1)} />
            <MdNavigateBefore onClick={() => onClick(Number(prevRangePage))} />
          </>
        )}
        {pages.map((p) => (
          <div key={'page' + p[0]} onClick={() => onClick(Number(p[0]))}>
            {p[0]}
          </div>
        ))}
        {nextRangePage > 0 && (
          <>
            <MdNavigateNext onClick={() => onClick(Number(nextRangePage))} />
            <MdLastPage onClick={() => onClick(Number(totalPages))} />
          </>
        )}
      </Wrapper>
    )
  );
};

export default React.memo(Pagination);

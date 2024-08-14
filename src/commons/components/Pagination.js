import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

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
            <MdFirstPage onClick={() => onClick(1)} className="page" />
            <MdNavigateBefore
              onClick={() => onClick(Number(prevRangePage))}
              className="page"
            />
          </>
        )}
        {pages.map((p) => (
          <div
            key={'page' + p[0]}
            onClick={() => onClick(Number(p[0]))}
            className={'page ' + classNames({ on: Number(p[0]) === page })}
          >
            {p[0]}
          </div>
        ))}
        {nextRangePage > 0 && (
          <>
            <MdNavigateNext
              onClick={() => onClick(Number(nextRangePage))}
              className="page"
            />
            <MdLastPage
              onClick={() => onClick(Number(totalPages))}
              classname="page"
            />
          </>
        )}
      </Wrapper>
    )
  );
};

export default React.memo(Pagination);

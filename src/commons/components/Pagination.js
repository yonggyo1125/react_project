import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

import {
  MdFirstPage,
  MdLastPage,
  MdNavigateNext,
  MdNavigateBefore,
} from 'react-icons/md';

const Wrapper = styled.div`
  display: flex;
  max-width: 450px;
  min-width: 100px;
  margin: 10px auto;
  align-items: center;
  justify-content: center;

  .page {
    min-width: 35px;
    max-width: 45px;
    padding: 0 5px;
    height: 35px;
    line-height: 33px;
    text-align: center;
    font-size: 1.15rem;
    border: 1px solid #000;
    border-radius: 3px;
    cursor: pointer;
  }
  .page + .page {
    margin-left: 3px;
  }

  .page.on {
    background: #000;
    color: #fff;
  }
`;

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
            className={'page' + classNames({ ' on': Number(p[0]) === page })}
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
              className="page"
            />
          </>
        )}
      </Wrapper>
    )
  );
};

export default React.memo(Pagination);

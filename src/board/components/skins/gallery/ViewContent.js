import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FcDownload } from 'react-icons/fc';
import { SmallButton } from '../../../../commons/components/Buttons';

const Wrapper = styled.div`
  .contents {
    img {
      max-width: 750px !important;
      width: auto !important;
      height: auto !important;
    }
  }
`;

const ViewContent = ({ data, onDelete }) => {
  const { t } = useTranslation();
  const { board } = data;

  return (
    <Wrapper>
      <div className="subject">{data.subject}</div>
      <div className="post-info">
        <div className="left">
          {data.poster}
          {data.member && '(' + data.member.email + ')'}
        </div>
        <div className="right">
          IP. {data.ip} / {t('조회수')}. {data.viewCount.toLocaleString()} /
          {data.createdAt}
        </div>
      </div>
      <div
        className="contents"
        dangerouslySetInnerHTML={{ __html: data.content }}
      ></div>
      {data?.attachFiles?.length > 0 && (
        <ul className="downloads">
          {data.attachFiles.map(({ fileDownloadUrl, fileName }) => (
            <li key={fileDownloadUrl}>
              <FcDownload /> <a href={fileDownloadUrl}>{fileName}</a>
            </li>
          ))}
        </ul>
      )}
      {data.showList && (
        <Link to={'/board/list/' + board.bid}>{t('글목록')}</Link>
      )}
      {data.showEdit && (
        <>
          <Link to={'/board/write/' + board.bid}>{t('글쓰기')}</Link>
          <Link to={'/board/update/' + data.seq}>{t('글수정')}</Link>
        </>
      )}
      {data.showDelete && (
        <SmallButton type="button" onClick={() => onDelete(data.seq)}>
          {t('글삭제')}
        </SmallButton>
      )}
    </Wrapper>
  );
};

export default React.memo(ViewContent);

import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FcDownload } from 'react-icons/fc';

const Wrapper = styled.div``;

const ViewContent = ({ data }) => {
  const { t } = useTranslation();

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
    </Wrapper>
  );
};

export default React.memo(ViewContent);

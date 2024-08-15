import React, { useCallback, useState } from 'react';
import apiRequest from '../libs/apiRequest';
import { SmallButton } from './Buttons';
import MessageBox from './MessageBox';
import { useTranslation } from 'react-i18next';

const FileUpload = ({
  children,
  gid,
  location,
  color,
  imageOnly,
  single,
  done,
  callback,
  width,
}) => {
  const [message, setMessage] = useState('');

  const { t } = useTranslation();

  // 버튼 클릭 처리
  const onButtonClick = useCallback(() => {
    const fileEl = document.createElement('input');
    fileEl.type = 'file';
    fileEl.multiple = !Boolean(single);
    fileEl.click();

    const fileListener = (e) => {
      const files = e.target.files;
      try {
        if (files.length === 0) {
          throw new Error(t('파일을_선택하세요.'));
        }

        if (imageOnly) {
          for (const file of files) {
            if (!file.type.includes('image/')) {
              throw new Error(t('이미지_형식의_파일만_업로드하세요.'));
            }
          }
        }

        if (!gid?.trim()) {
          throw new Error(t('필수항목(gid)_누락'));
        }

        const formData = new FormData();
        formData.append('gid', gid.trim());
        if (location) formData.append('location', location);

        for (const file of files) {
          formData.append('file', file);
        }

        if (single) {
          formData.append('single', Boolean(single));
        }

        if (imageOnly) {
          formData.append('imageOnly', Boolean(imageOnly));
        }

        if (done) {
          formData.append('done', Boolean(done));
        }

        (async () => {
          try {
            const res = await apiRequest('/file/upload', 'POST', formData);
            if (res.status === 201 && res.data.success) {
              // 파일 업로드 후속 처리
              if (typeof callback === 'function') {
                callback(res.data.data);
              }
              // 성공시 처리
              return;
            }

            if (res.data.message) setMessage(res.data.message);
          } catch (err) {
            setMessage(err.message);
            console.error(err);
          }
        })();
      } catch (err) {
        setMessage(err.message);
      }
    };

    fileEl.removeEventListener('change', fileListener);

    fileEl.addEventListener('change', fileListener);
  }, [single, gid, location, imageOnly, t, callback, done]);

  return (
    <>
      <SmallButton
        width={width}
        type="button"
        color={color}
        onClick={onButtonClick}
      >
        {children}
      </SmallButton>
      {message && <MessageBox color="danger">{message}</MessageBox>}
    </>
  );
};

export default React.memo(FileUpload);

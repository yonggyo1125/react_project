import React from 'react';

import { FaWindowClose, FaFileUpload } from 'react-icons/fa';

const FileItems = ({
  files,
  mode,
  insertImageCallback,
  fileDeleteCallback,
}) => {
  return (
    files &&
    files.length > 0 && (
      <ul>
        {files.map(({ seq, fileName, fileDownloadUrl, fileUrl }) => (
          <li key={seq}>
            <a href={fileDownloadUrl}>{fileName}</a>
            {mode === 'editor' && (
              <FaFileUpload onClick={() => insertImageCallback(fileUrl)} />
            )}
            <FaWindowClose onClick={() => fileDeleteCallback(seq)} />
          </li>
        ))}
      </ul>
    )
  );
};

export default React.memo(FileItems);

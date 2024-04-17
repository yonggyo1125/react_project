import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import JoinForm from '../components/JoinForm';

const JoinContainer = () => {
    const [form, setForm] = useState({});

    const { t } = useTranslation();

  return <JoinForm />;
};

export default React.memo(JoinContainer);

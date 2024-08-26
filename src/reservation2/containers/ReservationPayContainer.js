import React, { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { MidButton } from '../../commons/components/Buttons';

const returnUrl = `${window.location.origin}/payment/process`;
const closeUrl = `${window.location.origin}/payment/close`;
const ReservationPayContainer = ({ payConfig, form, data, setPageTitle }) => {
  const { t } = useTranslation();

  useEffect(() => {
    setPageTitle(data.rstrNm + ' ' + t('예약결제하기'));
  }, [t, data, setPageTitle]);

  const onPayProcess = useCallback(() => {
    window.INIStdPay.pay('inicisForm');
  }, []);

  return (
    <>
      <MidButton type="button" onClick={onPayProcess}>
        {t('결제하기')}
      </MidButton>
      <form id="inicisForm" method="POST">
        <input type="hidden" name="version" value="1.0" />
        <input type="hidden" name="gopaymethod" />
        <input type="hidden" name="mid" value={payConfig.mid} />
        <input type="hidden" name="oid" value={payConfig.oid} />
        <input type="hidden" name="price" value={payConfig.price} />
        <input type="hidden" name="timestamp" value={payConfig.timestamp} />
        <input type="hidden" name="use_chkfake" value="Y" />
        <input type="hidden" name="signature" value={payConfig.signature} />
        <input
          type="hidden"
          name="verification"
          value={payConfig.verification}
        />
        <input type="hidden" name="mKey" value={payConfig.mkey} />
        <input type="hidden" name="currency" value="WON" />
        <input
          type="hidden"
          name="goodname"
          value={`${data.rstrNm}/${form.person}인 예약`}
        />
        <input type="hidden" name="buyername" value={form.name} />
        <input type="hidden" name="buyertel" value={form.mobile} />
        <input type="hidden" name="buyeremail" value={form.email} />
        <input type="hidden" name="returnUrl" value={returnUrl} />
        <input type="hidden" name="closeUrl" value={closeUrl} />
        <input type="hidden" name="acceptmethod" value="below1000" />
      </form>
    </>
  );
};

export default React.memo(ReservationPayContainer);

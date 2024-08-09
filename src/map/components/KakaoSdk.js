const KakaoSdk = () => {
  const sdk = document.querySelector('.kakao-sdk');
  if (!sdk) {
    const head = document.head;
    const script = document.createElement('script');
    script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?appkey=accdb0b1755dfe36354d015faaeeff10&libraries=services';

    script.className = 'kakao-sdk';
    head.prepend(script);
  }
};

export default KakaoSdk;

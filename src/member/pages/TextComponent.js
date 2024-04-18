const TextComponent = ({ children }) => {
  const value = { userInfo: { email: 'user01@test.org', name: '사용자01' } };
  return children(value);
};

export default TextComponent;

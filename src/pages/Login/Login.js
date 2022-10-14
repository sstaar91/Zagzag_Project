import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    id: '',
    pw: '',
  });
  const { id, pw } = userInfo;
  const navigate = useNavigate();

  const handleUserInfo = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const clickBtn = () => {
    if (id === trueId && pw === truePassword) {
      alert('로그인 성공');
      navigate('/main');
    } else {
      alert('다시하세요');
    }
  };

  const trueId = 'bluemind';
  const truePassword = '1234asdf';

  return (
    <div className="login">
      <div className="loginContainer">
        <h1 className="logo">zagzag</h1>
        <div className="inputBox">
          <span className="inputTitle">아이디</span>
          <input
            className="input"
            type="text"
            placeholder="아이디를 입력하세요"
            name="id"
            onChange={handleUserInfo}
          />
        </div>
        <div className="inputBox">
          <span className="inputTitle">비밀번호</span>
          <input
            className="input"
            type="password"
            name="pw"
            placeholder="비밀번호를 입력하세요"
            onChange={handleUserInfo}
          />
        </div>
        <button className="loginBtn" onClick={clickBtn}>
          로그인
        </button>
      </div>
    </div>
  );
};

export default Login;

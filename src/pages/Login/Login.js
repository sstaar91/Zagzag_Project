import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const clickBtn = () => {
    navigate('/main');
  };

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
          />
        </div>
        <div className="inputBox">
          <span className="inputTitle">비밀번호</span>
          <input
            className="input"
            type="password"
            placeholder="비밀번호를 입력하세요"
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

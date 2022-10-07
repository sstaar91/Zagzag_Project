import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Main.scss';

const Main = () => {
  return (
    <nav className="main">
      <div className="header">
        <span className="logo">Zagzag</span>
        <div className="iconWrap">
          <FontAwesomeIcon className="icon" icon={faCartShopping} size="xl" />
          <FontAwesomeIcon className="icon" icon={faUser} size="xl" />
        </div>
      </div>
      <ul className="menu">
        <li>홈</li>
        <li>매거진</li>
        <li>단독</li>
        <li>브랜드</li>
      </ul>
      <div className="main">
        <img className="mainImage" src="./images/main.jpg" alt="main" />
        <div className="mainTitle"> [ OOTD : 주차룩 ] </div>
      </div>
    </nav>
  );
};

export default Main;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import './Main.scss';

const Main = () => {
  return (
    <nav className="main">
      <div className="header">
        <span className="logo">Zagzag</span>
        <div className="searchBox">
          <input className="searchInput" placeholder="검색" />
          <FontAwesomeIcon className="searchIcon" icon={faSearch} />
        </div>
        <div className="iconWrap">
          <FontAwesomeIcon className="icon" icon={faCartShopping} size="xl" />
          <FontAwesomeIcon className="icon" icon={faUser} size="xl" />
        </div>
      </div>
      <ul className="menu">
        <li>홈</li>
        <li>기획전</li>
        <li>쇼핑몰</li>
        <li>룩북</li>
      </ul>
      <div className="feed">
        <img className="mainImage" src="./images/main.jpg" alt="main" />
        <div className="mainTitle"> [ 오늘의 룩 : 주차룩 ] </div>
      </div>
    </nav>
  );
};

export default Main;

import "./Login.css";
import KakaoLoginWide from "../assets/kakao_login_large_wide.png";
import KakaoLoginNarrow from "../assets/kakao_login_large_narrow.png";

const Login = () => {
  return (
    <div className="LoginBackGround">
      <div className="Wrapper">
        <div className="Logo">BreadFeet</div>
        <div className="Phrase">빵지순례를 위한 단 하나의 준비물</div>
      </div>
      <a herf="#!">
        <picture>
          <source srcSet={KakaoLoginNarrow} media="(max-width: 1024px)" />{" "}
          {/* 1024px 이하일때 narrow ver로 변경 */}
          <img src={KakaoLoginWide} alt="카카오 로그인" />
          {/* 기본은 wide ver */}
        </picture>
      </a>
    </div>
  );
};

export default Login;

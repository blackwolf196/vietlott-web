import styled from 'styled-components';

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 320px;

  .main-container {
    border: solid 1px #ccc;
    padding: 12px;
    border-radius: 12px;
    background: #deb887;
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
    user-select: none;
    max-width: 80%;
    transition: all 0.3s;

    @media (min-width: 420px) {
      max-width: 90%;
    }

    @media (min-width: 768px) {
      padding: 24px;
    }

    .app-name-title {
      font-size: 48px;
      font-weight: 600;
      color: #FC000C;
      text-transform: uppercase;
      margin-bottom: 32px;
      text-align: center;

      @media (min-width: 768px) {
        font-size: 64px;
      }
    }

    .box-container {
      display: flex;

      .box-number {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-inline: 12px;
        font-size: 18px;
        font-weight: bold;
        transition: all 0.5s ease-in-out;

        @media (min-width: 768px) {
          width: 64px;
          height: 64px;
          font-size: 24px;
          margin-inline: 24px;
        }
      }
    }
  }

  .btn-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 24px;
  }

  .btn-roll {
    align-items: center;
    background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
    border: 0;
    border-radius: 10px;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-family: "Codec cold", sans-serif;
    font-size: 16px;
    font-weight: 700;
    height: 54px;
    justify-content: center;
    letter-spacing: .4px;
    line-height: 1;
    max-width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    text-decoration: none;
    text-transform: uppercase;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    &:active {
      outline: 0;
    }

    &:focus {
      outline: 0;
    }

    &:hover {
      outline: 0;

      span {
        transform: scale(.9);
        opacity: .75;
      }
    }

    span {
      transition: all 200ms;
    }

    @media screen and (max-width: 991px) {
      font-size: 15px;
      height: 50px;

      span {
        line-height: 50px;
      }
    }
  }
`;

export default StyledApp;
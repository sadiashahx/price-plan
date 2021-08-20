import styled from "styled-components";
import caret from "./caret.png";

export const UpgradeContainerPg = styled.div`
  background-color: #fbfbfc;
 
`;

export const UpgradeContainer = styled.div`
  margin-top: 10px;

  @media only screen and (min-width: 768px) {
    margin: 20px;
  }
`;

export const UpgradePlanContainer = styled.div`
  border-bottom: ${(props) => (props.noborder? "none" : "1px solid #ddd4e2")};
  background-color: #fbfbfc;

  h2 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    color: #43225b;
  }

  .upgrade-p1 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 125%;
    letter-spacing: 0.5px;
    color: #7b648c;
  }

  .upgrade-p2 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 125%;
    letter-spacing: 0.02em;
    color: #7b648c;
  }

  .upgrade-p3 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 125%;
    letter-spacing: 0.15px;
    color: #43225b;
  }

  .upgrade-p4 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 125%;
    color: #43225b;
  }

  h1 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 49px;
    color: #43225b;
  }

  .upgrade-p5 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 125%;
    letter-spacing: 0.02em;
    color: #43225b;
  }

  @media only screen and (max-width: 991px) {
    .plan-box-responsive {
      flex-direction: column;
      margin: 10px auto;
      justify-content: center;
      align-items: center;
    }
  }

  @media only screen and (max-width: 767px) {
    .order-confirm-row {
      flex-direction: column;
      margin: 10px auto;
      justify-content: center;
      align-items: center;
    }

    h1 {
      font-size: 24px;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    h2 {
      font-size: 20px;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    p {
      font-size: 12px;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    li {
      list-style: none;
    }
  }

  @media only screen and (max-width: 581px) {
    .dropdown-row {
      flex-direction: column;
      margin: 5px auto;
      padding: 10px auto;
      justify-content: center;
      align-items: center;
    }

    .dropdown-monthly {
      margin-top: 20px;
    }
  }
`;

export const UpgradePbox = styled.div`
  width: 283px;
  height: auto;
  /* height: auto; */
  border: 1px solid #ddd4e2;
  box-sizing: border-box;
  box-shadow:  ${(props) => (props.isActive ? "0px 4px 10px rgba(67, 34, 91, 0.15), 0px 10px 30px rgba(67, 34, 91, 0.2)" : "0px 4px 10px rgba(67, 34, 91, 0.05), 0px 10px 30px rgba(67, 34, 91, 0.1)")};
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  padding-right: 30px;
  padding-left: 30px;
  background-color: ${(props) => (props.isActive ? "#43225B" : "white")};

  .pbox-p1 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 125%;
    text-align: center;
    letter-spacing: 0.02em;
    color: #8e7a9d;
    background: #f6f4f7;
    border: 1px solid #eee9f4;
    box-sizing: border-box;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 90px;
    height: 23px;
    justify-content: center;
    vertical-align: middle;
    padding: 3px 0px;
  }

  .pbox-p2 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 125%;
    text-align: center;
    letter-spacing: 0.15px;
    color: ${(props) => (props.isActive ? "white" : "#7B648C")};
  }

  .pbox-p3 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 125%;
    text-align: center;
    letter-spacing: 0.02em;
    text-decoration: line-through;
    text-decoration-color: red;
    color: ${(props) => (props.isActive ? "white" : "#7B648C")};
  }

  .pbox-h1 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 49px;
    text-align: center;
    text-decoration: none;
    color: ${(props) => (props.isActive ? "white" : "#7B648C")};
  }

  .pbox-p4 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 125%;
    text-align: center;
    letter-spacing: 0.02em;
    color: ${(props) => (props.isActive ? "white" : "#8E7A9D")};
  }

  .pbox-btn {
    width: 223px;
    height: 40px;
    font-family: Open Sans;
    background: #ffffff;
    border: ${(props) => props.isActive ? "1px solid #2CDC82" : "1px solid #DDD4E2"};
    box-sizing: border-box;
    border-radius: 5px;
    text-align: center;
    font-style: normal;
    font-family: Open Sans;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    margin-top: 20px;
    color: ${(props) => (props.isActive ? "white" : "#8E7A9D")};
    background-color: ${(props) => (props.isActive ? "#2CDC82" : "white")};
  }
`;

export const UpgradeOrderConfirm = styled.div`
  width: 596px;
  background: #f6f4f7;
  height: auto;
  border: 1px solid #ddd4e2;
  border-radius: 10px;

  .orderbox1 {
    border-bottom: 1px solid #ddd4e2;
  }

  .orderbox2 {
    border-bottom: 1px solid #ddd4e2;
  }

  .orderbox3 {
    border-bottom: 1px solid #ddd4e2;
  }

  .orderbox-p1 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 125%;
    letter-spacing: 0.5px;
    color: #43225b;
    margin: 2px;
  }

  .orderbox-p2 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 125%;
    letter-spacing: 0.02em;
    color: #7b648c;
  }

  .orderbox-p3 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 125%;
    color: #43225b;
    margin: 20px 0px;
  }

  .orderbox-p4 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 125%;
    letter-spacing: 0.15px;
    color: #43225b;
    margin-top: 30px 0px 40px 0px;
  }

  .orderbox-p6 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 125%;
    letter-spacing: 0.15px;
    color: #43225b;
    margin: 50px 0px 20px 0px;
  }

  .orderbox-p5 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 125%;
    color: #43225b;
    margin: 20px 0px;
  }

  @media only screen and (max-width: 767px) {
    width: 500px;
    height: auto;
    margin: 0;
    padding: 0;

    .orderbox1 {
      display: block;
      text-align: center;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      font-size: 12px;
    }

    .orderbox2 {
      display: block;
      text-align: center;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      font-size: 12px;
    }

    .orderbox3 {
      display: block;
      text-align: center;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      font-size: 12px;
    }

    .orderbox-p4 {
      font-size: 12px;
    }

    .orderbox-p6 {
      font-size: 12px;
    }

    .orderbox-p1 {
      font-size: 12px;
      text-align: left;
      justify-content: left;
    }

    .orderbox-p2 {
      font-size: 12px;
    }

    .orderbox-p3 {
      font-size: 12px;
      text-align: left;
      justify-content: left;
    }

    .orderbox-p5 {
      font-size: 13px;
    }
  }

  @media only screen and (max-width: 560px) {
    width: 350px;
    height: auto;
    margin: 0;
    padding: 0;

    .orderbox1 {
      display: block;
      text-align: center;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      font-size: 12px;
    }

    .orderbox2 {
      display: block;
      text-align: center;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      font-size: 12px;
    }

    .orderbox3 {
      display: block;
      text-align: center;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      font-size: 12px;
    }

    .orderbox-p4 {
      font-size: 12px;
    }

    .orderbox-p6 {
      font-size: 12px;
    }

    .orderbox-p1 {
      font-size: 12px;
      text-align: left;
      justify-content: left;
    }

    .orderbox-p2 {
      font-size: 12px;
    }

    .orderbox-p3 {
      font-size: 12px;
      text-align: left;
      justify-content: left;
    }

    .orderbox-p5 {
      font-size: 13px;
    }
  }
`;

export const UpgradePInclude = styled.div`
  width: 253px;
  height: auto;

  .pinclude-p1 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 125%;
    color: #43225b;
  }

  .pinclude-p2 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 125%;
    letter-spacing: 0.02em;
    color: #7b648c;
    margin-top: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ddd4e2;
    padding-bottom: 10px;
  }

  .pinclude-p3 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 125%;
    letter-spacing: 0.02em;
    color: #7b648c;
    margin-top: 10px;
    margin-bottom: 10px;
    border-bottom: none;
    padding-bottom: 10px;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 20px;
    height: auto;
  }
`;

export const DropdownSelect = styled.select`
  .select__control {
    width: 265px;
    height: 35px;
    border: 1px solid #ddd4e2;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: white;
    letter-spacing: 0.15px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 125%;
    color: #43225b;
    padding: 2px 12px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: url(${caret}) no-repeat;
    background-position-x: 235px;
    background-position-y: 5px;
    cursor: pointer;
  }

  .select__control:focus {
    outline: #ddd4e2;
  }

  .select__menu {
    width: 265px;
    height: 35px;
    color: #43225b;
    background-color: white;
  }
`;

export const DropdownDiv = styled.div`
  width: 270px;
  height: 40px;
  border: 1px solid #ddd4e2;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: white;
  letter-spacing: 0.15px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 125%;
  color: #43225b;
  padding: 1px 2px;

  &:focus {
    outline: #ddd4e2;
  }

  select {
    width: 265px;
    height: 35px;
    border: 0px solid white;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: white;
    letter-spacing: 0.15px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 125%;
    color: #43225b;
    padding: 2px 12px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: url(${caret}) no-repeat;
    /* transform: rotate(180deg); */ 
    background-position-x: 235px;
    background-position-y: 5px;
    cursor: pointer;
  }

  select:focus {
    outline: none;
  }

  option {
    border: 1px solid #ddd4e2;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: white;
    letter-spacing: 0.15px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 125%;
    color: #43225b;
    margin-top: 15px;
    padding: 10px 5px;
    cursor: pointer;
    width: 180px;
  }

  option:hover {
    background-color: #43225b !important;
    color: white !important;
  }

`;

export const UpgradePDetail = styled.div`
  width: 596px;
  height: auto;

  .pdetail-p1 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;
    color: #43225b;
  }

  .pdetail-p2 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 125%;
    letter-spacing: 0.5px;
    color: #7b648c;
  }

  .pdetail-p3 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;
    color: #43225b;
  }

  @media only screen and (max-width: 768px) {
    width: 500px;
    height: auto;
    margin: 10px auto;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 541px) {
    width: 420px;
    height: auto;
    margin: 10px auto;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 430px) {
    width: 350px;
    height: auto;
    margin: 10px auto;
    justify-content: center;
    align-items: center;
  }
`;

export const UpgradeFAQ = styled.div`
  background-color: #ffffff;
  border: 1px solid #ddd4e2;
  box-sizing: border-box;
  border-radius: 5px;

  .faq-p1 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 125%;
    letter-spacing: 0.15px;
    color: #43225b;
  }

  .faq-p2 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0.02em;
    color: #43225b;
  }
`;

export const UpgradeButton = styled.button`
  width: 223px;
  height: 40px;
  font-family: Open Sans;
  background: #2cdc82;
  color: white;
  border: 1px solid #ddd4e2;
  box-sizing: border-box;
  border-radius: 5px;
  text-align: center;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;

  @media only screen and (max-width: 769px) {
    text-align: center;
    justify-content: center;
    margin: 0 auto;
    align-items: center;
    display: flex;
  }
`;

export const UpgradeNA = styled.div`
  background-color: #fbfbfc;

  h1 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 49px;
    color: #43225b;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
`;

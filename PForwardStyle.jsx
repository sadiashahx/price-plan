import styled from "styled-components";

export const PForwardContainer = styled.div`
       
       border-bottom: ${props => props.noborder ? "none" : "1px solid lightgrey"};
       width: 645px;
    
       h2
       {
         font-family: 'Open Sans';
         font-style: normal;
         font-weight: bold;
         font-size: 24px;
         line-height: 33px;
         color: #43225B;
       }

       label
       {
         font-family: 'Open Sans';
         font-style: normal;
         font-weight: normal;
         font-size: 16px;
         line-height: 125%;
         margin-top: -10px;
         padding-left: 10px;
         color: '#43225B';
         letter-spacing: 0.25px;
       }

       [type="radio"]:checked, [type="radio"]:not(:checked) 
       {
       position: absolute;
       left: -9999px;
       }

       [type="radio"]:checked + label, [type="radio"]:not(:checked) + label
       {
         position: relative;
         padding-left: 28px;
         cursor: pointer;
         line-height: 12px;
         display: inline-block;
         color: #666;
       }

       [type="radio"]:checked + label:before, [type="radio"]:not(:checked) + label:before {
         content: '';
         position: absolute;
         left: 0;
         top: 0;
         width: 12px;
         height: 12px;
         border: 1px solid #43225B;
         border-radius: 100%;
         background: #fff;
       }

       [type="radio"]:checked + label:after, [type="radio"]:not(:checked) + label:after {
         content: '';
         width: 6px;
         height: 6px;
         background: #43225B;
         position: absolute;
         top: 3px;
         left: 3px;
         border-radius: 100%;
         -webkit-transition: all 0.2s ease;
         transition: all 0.2s ease;
       }

       [type="radio"]:not(:checked) + label:after {
         opacity: 0;
         -webkit-transform: scale(0);
         transform: scale(0);
       }

       [type="radio"]:checked + label:after {
         opacity: 1;
         -webkit-transform: scale(1);
         transform: scale(1);
       }

       p
       {
         font-family: Open Sans;
         color: '#7B648C';
         font-size: 12px;
         letter-spacing: 0.02em;
         line-height: 125%;
         font-style: normal;
         font-weight: normal;
       }

       .tinput
       {
         width: 406px;
         height: 36px;
         font-family: Open Sans;
         font-size: 16px;
       }

       .enport-h
       {
         font-family: Open Sans;
         font-size: 16px;
       }

       input::placeholder 
       {
          color: '#43225B';
          font-family: Open Sans;
          font-family: Open Sans;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 125%;
          letter-spacing: 0.25px;
       }

`;

export const PForwardButton = styled.button`
       border: none; 
       width: 136px;
       font-family: Open Sans;
       font-style: normal;
       height: 40px;
       font-weight: 600;
       border-radius: 5px;
       background-color: #2CDC82;
       color: white;
       font-size: 14px;
       line-height: 14px;
       text-align: center;
       font-style: normal;
`;


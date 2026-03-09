import { css } from '@emotion/react'

export const topMenu = css`
    margin-top:30px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    .accountIcon {
       display: inline-flex;
       margin-right: auto;
       cursor: "pointer";
    }
    .eatClubLogo {
        margin:0;
        padding:0;
        cursor: "pointer";
    }
    .filtersIcon {
        display: flex;
        margin-left: auto;
        cursor: "pointer";
    }
`;
export const cardImage = css`
        max-height: 200px;
        width: 100%;
`;
export const restaurantListTitle = css`
      font-weight: bold;
      font-style: normal;
`;

export const midNav = css`
      flex-direction: row;
      display: flex;
      align-items: center;
      padding: 10px 0;
      border-bottom: 1px solid #eaeaea;
      li {
        width: 25%;
        display: flex;
        justify-content: center; 
        align-items: center; 
      }
`;

export const cardTitleSection = css`
    padding: 10px 0 15px;
    margin: 0 17px;
    .cardTitle {
        text-align: center;
        font-size: 24px;
    }
    .cardTitleBottomContent {
        display: flex;
        justify-content: center; 
        align-items: center; 
        border-bottom: 1px solid #eaeaea;
        padding-bottom: 15px;
        p {
            color: #b9b9b9;
            padding-right: 15px;
            background-image: url("src/assets/separator.png");
            background-repeat: no-repeat;
            background-size: 10px 10px;
            background-position: right;
            margin-right: 6px;
            font-size: 15px;
            &:last-of-type {
                background-image: none;
                margin-right: none;
            }
        }
    }
`;

export const cardDetailsContent = css`
     margin: 0 30px;
     
     .detailsOperatingHoursDistance {
        font-size: 12px;
     }
    .cardDealsAmount{
        p {
            font-weight: bold;
            color: #ca4938;
            font-size: 17px;
            margin-bottom: 0px;
            &:first-of-type {
                width: 25px;
            }
    }
`;

export const cardDealsDiscountSection  = css`
    margin-top: 8px;
    padding-top: 10px;
    border-top: 1px solid #eaeaea;
    width: 100%;
    display: flex;
    .cardDealsLeft {
        font-size: 10px;
        color: #c7c7c7;
        clear: both;
    }
    .cardDealsAvailability {
        font-size: 12px;
        color: #7d7d7d;
    }
    .cardDealsRedeemBtn {
        font-size: 11px;
        font-weight: bold;
        color: #ca4938;
        border: 1.5px solid #ca4938;
        border-radius: 20px;
        padding: 5px 12px;
        &:active {
            background-color: #ca4938;
            color: white;
        }
    }
    .cardDealsAmountAvailabilitySection {
        width: 80%;
    }
    .cardDealsRedeemSection {
       
        width: 20%;
        display: flex;
        align-items: center;
        a {
            margin-left: auto;
        }
    }
`;

export const iconTextContent = css`
    display: flex;
    justify-content: left; 
    align-items: center; 
    font-size: 14px;

    p {
        display: inline-flex;
        margin-bottom: 8px;
        &:first-of-type {
            width: 35px;
            display: flex;
            justify-content: left;; 
            align-items: left;
        }
    }
`;

export const cardDetailsContainer = css`
    position: relative;
`;

export const smallBadge = css`
    background-color: #ca4938;
    border-radius: 3px;
    font-size: 9px;
    position: absolute;
    top: 5px;
    right: 20px;
    color: white;
    padding: 3px 8px;
    display: flex;
    justify-content: left;; 
    align-items: center;
    border: 0;
    img {
        padding-right: 2px;
    }
`;



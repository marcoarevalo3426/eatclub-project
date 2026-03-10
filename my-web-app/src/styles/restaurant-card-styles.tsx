import { css } from '@emotion/react'

export const restaurantCard = css`

    @media (min-width: 768px) {
        float: left;
        width: 350px;
        margin-right: 20px;
        margin-bottom: 20px;
        min-height: 350px;
    }
    margin-top:20px;
    cursor: "pointer";
    .cardImageContentContainer {
        position: relative;
        display: block;
    }
    .cardImage {
        max-height: 200px;
        width: 100%;
        border-radius: 5px;
    }
    .cardTitle {
        font-weight: bold;
        line-height: 1.5;
        color: #2a2a2a;
        margin-top: 10px;
    }
    .cardDistance{
        font-weight: 200;
        font-size: 13px;
        color: #636363;
    }
    .cardCuisine {
        font-size: 10px;
        font-weight: bold;
        color: #7d7d7d;
    }
    .cardBottomContent {
        display: flex;
        align-items: left;
        justify-content: start;
        p {
            color: #7d7d7d;
            padding-right: 20px;
            background-image: url("src/assets/separator.png");
            background-repeat: no-repeat;
            background-size: 10px 10px;
            background-position: right;
            margin-right: 7px;
            font-size: 13px;
            &:last-of-type {
                background-image: none;
                margin-right: none;
            }
        }
    }
    .cardTitleFavIconHolder {
        display: flex;
    }  
`;

export const discountBadge = css`
    background-color: #ca4938;
    display: inline-block;
    position: absolute;
    top: 10px;
    left: 10px;
    color: white;
    padding: 3px 10px 5px 5px;
    border-radius: 4px;
    box-shadow: 2px 2px 3px #7d7d7d;
    line-height: 1.3;
    .discountAmount {
        font-size: 15px;
        font-weight: 500;
    }
    .discountTimeBeforeExpiry {
        font-size: 10px;
    }
`;

export const favIconButton = css`
    margin-left: auto;
    padding-top: 12px;
    width: 35px;
    height: 35px;
    img {
        width: 35px;
        height: 35px;
    }
`;


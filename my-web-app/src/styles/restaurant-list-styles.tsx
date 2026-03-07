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

export const searchBar = css`
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 5px 16px;
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    .searchIcon {
        padding-right: 5px;
    }
    .searchInput {
        border: 0;
        width: 100%;
        padding: 2px 5px;
        ::placeholder {
        color: #c0c0c0;
        }
    }
`;
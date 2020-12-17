import styled from 'styled-components';

export const Container = styled.div`
    background: #525252;
    padding: 0 30px;
`;

export const Content = styled.div`
    height: 64px;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        display: flex;
        align-items: center;

        img {
            margin-right: 20px;
            padding-right: 20px;
            border-right: 1px solid #717171;
        }

        a {
            font-weight: bold;
            color: #eee;
        }
    }
    aside {
        display: flex;
        align-items: center;
    }
`;

export const Profile = styled.div`
    display: flex;
    margin-left: 15px;
    padding-left: 15px;
    border-left: 1px solid #525252;

    div {
        text-align: right;
        margin-right: 10px;

        strong {
            display: block;
            color: #f8f8f8;
        }

        a {
            display: block;
            margin-top: 2px;
            font-size: 12px;
            color: #ddd;
        }
    }
    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }
`;
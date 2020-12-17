import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
    height: 100%;
    background: linear-gradient(-90deg, #000000, #3c3b3b);

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 315px;
    text-align: center;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
    }

    input {
        background: rgba(0, 0, 0, 0.1);
        border: 0;
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        color: #fff;
        margin: 0 0 10px;
    }
    span {
        color: #da9700;
        align-self: flex-start;
        margin: 0 0 10px;
        font-family: 'Roboto', sans-serif;
        font-size: 12px;
    }

    button {
        margin: 5px 0 0;
        height: 44px;
        background: #e6e6e6;
        font-weight: bold;
        color: #3b3a3a;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;

        &:hover {
            background: ${darken(0.05, '#e6e6e6')};
        }
    }
    a {
        color: #fff;
        margin-top: 15px;
        font-size: 15px;
        opacity: 0.8;
        font-family: 'Roboto', sans-serif;

        &:hover {
            opacity: 1;
        }
    }

    img {
        width: 200px;
    }
`;

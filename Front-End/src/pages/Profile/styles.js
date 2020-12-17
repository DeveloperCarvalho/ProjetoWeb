import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    max-width: 600px;
    margin: 50px auto;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        input {
            background: rgba(255, 255, 255, 0.1);
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

        hr {
            border: 0;
            height: 1px;
            background: rgba(255, 255, 255, 0.2);
            margin: 10px 0 20px;
        }

        button {
            margin: 10px 0 0;
            height: 44px;
            background: #4e4e4e;
            font-weight: bold;
            color: #cecece;
            border: 0;
            border-radius: 4px;
            font-size: 15px;
            font-family: sans-serif;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.05, '#4e4e4e')};
            }
        }
    }
    > button {
        width: 100%;
        margin: 5px 0 0;
        height: 44px;
        background: #37545a;
        font-weight: bold;
        color: #cecece;
        border: 0;
        border-radius: 4px;
        font-size: 15px;
        font-family: sans-serif;
        transition: background 0.2s;

        &:hover {
            background: ${darken(0.08, '#37545a')};
        }
    }
`;

import styled from 'styled-components';

export const Container = styled.div`
    max-width: 600px;
    margin: 50px auto;

    display: flex;
    flex-direction: column;

    header {
        display: flex;
        align-self: center;
        align-items: center;
        margin-bottom: 20px;

        button {
            border: 0;
            background: none;
        }

        strong {
            color: #fff;
            font-size: 24px;
            margin: 0 15px;
            font-family: sans-serif;
            font-weight: normal;
        }
    }

    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 15px;
        magin-top: 30px;
    }
`;

export const Time = styled.ul`
    padding: 20px;
    border-radius: 4px;
    background: #efefef;

    opacity: ${(props) => (props.past ? 0.6 : 1)};

    strong {
        display: block;
        color: ${(props) => (props.available ? '#bbb' : '#6b6b6b')};
        font-size: 20px;
        font-weight: normal;
        font-family: sans-serif;
    }

    span {
        display: block;
        margin-top: 3px;
        color: ${(props) => (props.available ? '#bbb' : '#666')};
    }
`;

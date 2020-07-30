import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
    hasError: boolean;
}

export const Container = styled.div`
    align-items: center;
    justify-content: center;
    a {
        position: absolute;
        right: 20%;
        padding: 51px;
        font-size: 20px;
        top: 10%;
        text-align: center;
        width: 450px;
        margin-top: 2px;
        height: 130px;
        background: #04d361;
        border-radius: 12px;
        border: 0;
        color: #fff;
        font-weight: bold;
        text-decoration: none;
        transition: background-color 0.2s;
        &:hover {
            background: ${shade(0.2, '#04d361')};
        }
    }
`;

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    max-width: 650px;
    margin-top: 40px;
    line-height: 46px;
`;

export const Img = styled.div`
    margin-top: 20px;
`;

export const Form = styled.form<FormProps>`
    margin-top: 15px;
    max-width: 1000px;

    display: block;
    input {
        flex: 1;
        height: 50px;
        width: 60%;
        margin-left: 25%;
        margin-right: 50%;
        padding: 0 24px;
        border-radius: 12px;
        color: #3a3a3a;
        border: 2px solid #fff;
        border-right: 0;
        margin-right: 12px;
        margin-top: 10px
            ${(props) =>
                props.hasError &&
                css`
                    border-color: #c53030;
                `};

        &::placeholder {
            color: #a8a8b3;
        }
    }
    button {
        width: 110px;
        margin-top: 22px;
        align-items: center;
        justify-content: center;
        height: 40px;
        margin-left: 50%;
        background: #04d361;
        border-radius: 12px;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#04d361')};
        }
    }
`;

export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a {
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;
        transition: transform 0.2s;
        & + a {
            margin-top: 16px;
        }
        &:hover {
            transform: translateX(10px);
        }

        img {
            width: 64px;
            height: 64px;
            border-radius: 32px;
        }

        div {
            margin-left: 16px;
            flex: 1;
            strong {
                font-size: 20px;
                color: #3d3d4d;
            }
            p {
                font-size: 18px;
                color: #a8a8b3;
                margin-top: 4px;
            }
        }
        svg {
            margin-left: auto;
            color: #cbcbd6;
        }
    }
`;

export const Error = styled.span`
    display: block;
    margin-top: 8px;
    color: #c53030;
`;

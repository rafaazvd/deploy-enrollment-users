import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
    hasError: boolean;
}
export const Header = styled.header`
    display: flex;
    margin-top: 40px;
    align-items: center;
    justify-content: space-between;
    a {
        display: flex;
        align-items: center;
        text-decoration-line: none;
        height: 144px;
        width: 244px;
        font-size: 19px;
        color: #a8a8b3;
        transition: color 0.2s;

        &:hover {
            color: #666;
        }
        svg {
            margin-right: 4px;
        }
    }
`;

export const Error = styled.span`
    display: block;
    margin-top: 8px;
    color: #c53030;
`;

export const RepositoriesInfo = styled.section`
    margin-top: 80px;
    table {
        width: 1077px;
        border: solid 2px #73d343;
        tr {
            th {
                background-color: #af877f;

                color: #fff;
            }
            td {
                height: 32px;
                padding: 3px;
                background-color: #dddd;
                font-size: 12px;
                a {
                    position: absolute;
                    right: 13%;
                    svg {
                        margin-left: 17px;
                        margin-right: -3%;
                    }
                }
                button {
                    position: absolute;
                    right: 11%;
                    border: none;
                    background-color: #dddd;
                }
            }
        }
    }
    a {
        background-color: #c53030;
        font-size: 17px;
        text-decoration: none;
        padding: 11px;
        position: absolute;
        right: 17%;
        top: 12%;
        color: #fff;
        border-radius: 9px;
        &:hover {
            background: ${shade(0.2, '#c53030')};
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
        width: 210px;
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
    strong {
        position: absolute;
        left: 11%;
        margin-top: 19px;
        font-size: 22px;
    }
`;

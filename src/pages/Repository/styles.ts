import styled from 'styled-components';

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

export const RepositoriesInfo = styled.section`
    margin-top: 80px;
    table {
        width: 1077px;
        border: solid 2px #73d343;

        thead {
            tr {
                th {
                    background-color: #af877f;

                    color: #fff;
                }
            }
        }
        tbody {
            tr {
                td {
                    height: 32px;
                    padding: 3px;
                    background-color: #dddd;
                    font-size: 12px;

                    button {
                        & + button {
                            right: 11%;
                        }
                        position: absolute;
                        right: 9%;
                        border: none;
                        background-color: #dddd;
                    }
                }
            }
        }
    }
`;

import styled from 'styled-components';
import { color  } from 'styles/theme';

export const UserCard = styled.div`
    width: 50rem;
    border: 1px solid ${color.gray_200};
    background-color: ${color.light};
    box-sizing: border-box;
    overflow: none;
    margin-bottom: 5em;

    .head{
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        padding: 1.2rem;
        box-sizing: border-box;

        .userInfo{
            display: flex;
            align-items: center;

            i {
                font-size:4rem;
                background-color: red;
                border-radius: 5rem;
                border: 1px solid ${color.light};
                color: ${color.dark};
                margin-right: 1.5rem;
            }
        }
    }

    .picture{
        width:100%;
        box-sizing: border-box;

        img{ 
            width: 100%;
            height: 100%;
        }
    }

    .description{
        padding: 1.2rem;

        .name{
            font-weight: 600;
        }

        .place{
            font-size: 1.1rem;
        }

        .bio{
            margin-top: 1rem;
        }
    }
`


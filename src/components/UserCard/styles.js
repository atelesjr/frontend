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
                background-color: ${color.light};;
                border-radius: 5rem;
                color: ${color.gray_300};
                margin-right: 1.5rem;
            }
        }

        .timestamp{
            color: ${ color.gray_300 };
            font-size: 1.2rem;
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
            font-size: 1.5rem;
            font-weight: 600;
            color: ${color.gray_500};

            i {
                font-size: 1.5rem;
                margin-right: 1.5rem;

                &.male{
                    color: ${color.blue};
                }

                &.female{
                    color: ${color.pink};
                }
            }
            }
        }

        .place{
            color: ${ color.gray_300 };
            font-size: 1.1rem;
        }

        .bio{
            color: ${ color.gray_400 };
            margin-top: 1rem;
        }
    }
`


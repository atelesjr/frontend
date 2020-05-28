import React from 'react';
import * as S from './styles';

const UserCard = ({ post }) => {
    return(
        <S.UserCard>
            <div className="head"> 
                <div className="userInfo">
                    <i class="fas fa-user-circle" />
                    <div className="username">
                       {post.username}
                    </div>
                </div>
                <div className="timestamp">
                    { post.timestamp }
                '</div>
            </div>
            <div className="picture">
                <img src={post.picture } alt={ post.username } />
            </div>
            <div className="description">
                <div className="name">
                    { `${ post.first_name } ${ post.last_name }` } 
                </div>
                <div className="place">
                    { `${post.city}, ${post.country}`}
                </div>
                <div className="bio">
                    { post.bio }
                </div>
            </div>
        </S.UserCard>
    )
}

export default UserCard;
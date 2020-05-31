import { getPosts } from '../postsActions';

const action = getPosts();

it('has the correct type', () =>{
   expect(action.type).toEqual('GET_POSTS');
});
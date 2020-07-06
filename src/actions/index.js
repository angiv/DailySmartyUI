import { SET_RECENT_POSTS } from '../actions/types';

import axios from 'axios';


export function fetchRecentPosts() {
    return function(dispath) {
        axios.get('https://api.dailysmarty.com/posts')
            .then(response => {
                console.log(response.data.posts);
                dispatch({
                    type: SET_RECENT_POSTS,
                    payload: response.data.posts
                })
            })
    }
}


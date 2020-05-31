import axios from 'axios'

export const API_URL='https://my.api.mockaroo.com/instagram_feed.json?key=d3fb7580'

/**
 * posts
 */
export const posts = async () => {
    let response = await axios.get(API_URL).then(res => {
        return res.data
    }).catch(error => {
        return error
    })

    return response
}
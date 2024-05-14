const query = require('../../utils/query');
async function getPost(posts){
    const res = await query("SELECT * FROM phong");
    return res
}
module.exports = {getPost}
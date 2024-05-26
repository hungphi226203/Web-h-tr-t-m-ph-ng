const query = require('../../utils/query');
async function getPost(posts){
    const res = await query("SELECT * FROM phong WHERE status='đã duyệt'");
    return res
}
module.exports = {getPost}
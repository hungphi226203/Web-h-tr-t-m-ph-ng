const query = require('../../utils/query');

async function generateId() {
    let id,result;
    do {
        id = Math.floor(Math.random() * 1000000);
        result = await query("SELECT id FROM phong WHERE id = ?", [id]);
    } while (result.length > 0);
    return id;
}

async function post(addres,description,area,price){
    const id = await generateId();
    await query("INSERT INTO phong(id,addres,des,area,price) VALUES (?,?,?,?,?)",[id,addres,description,area,price])
}
module.exports = {post}
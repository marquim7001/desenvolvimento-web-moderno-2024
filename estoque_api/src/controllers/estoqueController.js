const Produto = require ('..models/produto');


async function getProdutos(req, res){
    let produtos = await Produto.FindAll();
    res.send(produtos);
}

function postCadastarProduto(req, res){

    let produto ={
        nome: req.body.nome,
        quantidade: req.body.quantidade
    };
    Produto.create(produto). then(()=>{res.send(true)}).catch(()=>{console.log(err)});
    res.send(produto);
}


module.exports = {
    getProdutos,
    postCadastarProduto
}
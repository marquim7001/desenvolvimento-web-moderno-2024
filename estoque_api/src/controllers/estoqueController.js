const Produto = require('../models/produto');

async function getProdutoById(req, res) {
    try {
        const produto = await Produto.findByPk(req.params.id);
        if (produto) {
            res.json(produto);
        } else {
            res.status(404).send('Produto não encontrado');
        }
    } catch (error) {
        res.status(500).send('Erro ao buscar produto');
    }
}

async function getProdutos(req, res){
    let produtos = await Produto.findAll();
    res.send(produtos);
}

function postCadastrarProduto(req, res){
    let produto = {
        nome: req.body.nome,
        quantidade: req.body.quantidade
    };
    Produto.create(produto).then(()=>{
        res.send(true);
    }).catch((err)=>{
        console.log(err);
        res.send(false);
    });
}

async function atualizarProduto(req, res) {
    try {
        const { id, quantidade } = req.body;
        const produto = await Produto.findByPk(id);
        if (produto) {
            produto.quantidade = quantidade;
            await produto.save();
            res.json(produto);
        } else {
            res.status(404).send('Produto não encontrado');
        }
    } catch (error) {
        res.status(500).send('Erro ao atualizar produto');
    }
}

// Excluir um produto
async function excluirProduto(req, res) {
    try {
        const { id } = req.body;
        const produto = await Produto.findByPk(id);
        if (produto) {
            await produto.destroy();
            res.send('Produto excluído com sucesso');
        } else {
            res.status(404).send('Produto não encontrado');
        }
    } catch (error) {
        res.status(500).send('Erro ao excluir produto');
    }
}

module.exports = {
    getProdutoById,
    getProdutos,
    cadastrarProduto,
    atualizarProduto,
    excluirProduto
};
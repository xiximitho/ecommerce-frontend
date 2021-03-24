import React from 'react'

const Categoria = ({ categorias }) => {
    return (
        <div>
            <center><h1>Lista de Produtos</h1></center>
            {categorias.map((categoria) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{categoria.nome}</h5>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Categoria

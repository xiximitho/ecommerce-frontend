import React from 'react'
import {Container} from "reactstrap";
import {format} from "date-fns"

const Produto = ({ produtos }) => {
    return (
        <div className="">
        <div className="container-sm">
        <div className="row">
            {produtos.map((produto) => (
            <div className="col-lg-4">
                <div className="card-deck mb-3 text-center">
                    <div className="card mb-4 box-shadow">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">{produto.nome}</h4>
                        </div>
                        <div className="card-body">
                            <img className="rounded-lg"
                                 src={produto.imagem}
                                 alt="Generic placeholder image" width="140" height="140"></img>
                            <p></p>
                            <h1 className="card-title pricing-card-title">
                                R${produto.preco} <small className="text-muted">/ un</small>
                            </h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>{produto.descricao}</li>
                                <li>{produto.disponivel? "Disponível" : "Fora de Estoque"}</li>
                                <li>{format(new Date(produto.criado) , 'dd/MM/yyyy')}</li>
                            </ul>

                            <button type="button" className="btn btn-lg btn-block btn-primary">
                                Comprar
                            </button>
                        </div>
                    </div>

                </div>

            </div>
            ))}
            </div>
        </div>
        </div>
    )
};

export default Produto


import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export interface Empresa {
    id: number;
    cnpj: string;
    nome: string;
    cargas: Carga[]
}

export interface Carga {
    id: number;
    nome: string;
    descricao:string;
    origem:string;
    destino:string;
    status: Status[]
}


export interface Status {
    nome: string;
    data: string;
    cargaId: number;
}


function Home () {

  
  const empresa: Empresa[] = [
    {
        id:0, 
        cnpj:"teste",
        nome:"teste", 
        cargas:
        [
            {
                id: 0,
                nome:"teste", 
                descricao:"teste", 
                origem:"teste", 
                destino:"teste", 
                status: [
                    {
                        nome: "teste", 
                        data:"21/08/2022", 
                        cargaId:1
                }
            ] }
        ]
    }];

    const blocoEmpresas = empresa.map(e=><div key={e.id} className="row">
        <div className="col-lg-6">
            <h2>{e.nome}</h2>
            <h3>Cargas</h3>
            {e.cargas.map(c=>            
            <div className="row" key={c.id}>
                <div className="col-lg-12">
                    <h4>{c.nome}</h4>
                    <label>{c.descricao}</label>
                    <label>{c.origem}</label>
                    <label>{c.destino}</label>
                    <div className="row">
                        {c.status.map(s=>
                        <div className="col-lg-12" key={s.data+s.nome+s.cargaId}>                            
                            <label>{s.data}</label>
                            <label>{s.nome}</label>                            
                        </div>)
                        }
                    </div>
                </div>                
            </div>
            )}
        </div>
    </div>);

  return (
    <div className="row">
      <div className="col-lg-12">
      <h2>Consultar</h2>
      <div className="row">
            <div className="col-lg-3">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Digite o CNPJ" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon1"><i className="fa fa-search"></i></button>
                </div>
            </div>
        </div>
      </div>
      <div className="row">
            {blocoEmpresas}
      </div>
    </div>
  );
}

export default Home

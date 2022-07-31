import React, {useEffect, useRef, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import './App.css';
import { srcLogo } from './logo';

/*Entidades*/
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

export interface Transportadora{
  id: number;
  nome: string;
  data: string;
}

function Home() {        

    /*lista de dados simulados [todo - obter em nossa api - the-bing-api.azuerewebsites.net]*/
    // const empresasBkp: Empresa[] = [
    // {
    //     id:0, 
    //     cnpj:"Santos Brasil",
    //     nome:"Santos Brasil", 
    //     cargas:
    //     [
    //         {
    //             id: 0,
    //             nome:"Container EverGreen", 
    //             descricao:"Carga de tênis da Nike - Modelo Air Jordan - Ano de fabricação: 2022.", 
    //             origem:"Miami - EUA", 
    //             destino:"Santos - SP", 
    //             status: [
    //                 {
    //                     nome: "Aguardando", 
    //                     data:"21/08/2022", 
    //                     cargaId:1
    //             }
    //         ] }
    //     ]
    // }];   
    
    const empresasBkp: Empresa[] = [
      {
        "id": 1,
        "cnpj": "01234567890123",
        "nome": "Bing Importações",
        "cargas": [
          {
            "id": 2,
            "nome": "Blueberry",
            "descricao": "O blueberry ou mirtilo (Vaccinium myrtillus L.) é uma fruta de cor azul",
            "origem": "Inglaterra",
            "destino": "Brasil",
            "status": [
              {
                "cargaId": 2,
                "nome": "Atracação",
                "data": "21/07/2022 às 10:34:09"
              },
              {
                "cargaId": 2,
                "nome": "Transporte do container até o recinto",
                "data": "23/07/2022 às 08:44:09"
              },
              {
                "cargaId": 2,
                "nome": "Presença de carga",
                "data": "25/07/2022 às 2022-07-21 10:47:09"
              },
              {
                "cargaId": 2,
                "nome": "Desunitização da carga",
                "data": "27/07/2022 às 09:34:09"
              },
              {
                "cargaId": 2,
                "nome": "Canal vermelho",
                "data": "29/07/2022 às  10:34:09"
              }
            ]
          },
          {
            "id": 1,
            "nome": "Televisão",
            "descricao": "Transmissão e recepção de imagens visuais, geradas ao vivo ou previamente gravadas",
            "origem": "China",
            "destino": "Brasil",
            "status": [
              {
                "cargaId": 1,
                "nome": "Atracação",
                "data": "01/06/2022 às 10:34:09"
              },
              {
                "cargaId": 2,
                "nome": "A partir daqui",
                "data": "02/06/2022 às 09:34:09"
              },
              {
                "cargaId": 3,
                "nome": "Transporte do container até o recinto",
                "data": "03/06/2022 às 11:34:09"
              },
              {
                "cargaId": 4,
                "nome": "Presença de carga",
                "data": "04/06/2022 às 11:45:09"
              },
              {
                "cargaId": 5,
                "nome": "Desunitização da carga",
                "data": "05/06/2022 às 10:35:09"
              },
              {
                "cargaId": 6,
                "nome": "Anuências e conferências necessárias",
                "data": "06/06/2022 às 10:20:09"
              },
              {
                "cargaId": 7,
                "nome": "Desembaraço aduaneiro ",
                "data": "07/06/2022 às 09:34:09"
              },
              {
                "cargaId": 8,
                "nome": "Anuências e conferências necessárias",
                "data": "08/06/2022 às 10:34:09"
              },
              {
                "cargaId": 9,
                "nome": "Armazenagem e agregar valor a carga",
                "data": "09/06/2022 às 09:32:09"
              },
              {
                "cargaId": 10,
                "nome": "Transporte para o destino final",
                "data": "10/06/2022 às 10:23:09"
              }
            ]
          }
        ]
      }
      
    ]

    const transportadoras: Transportadora[] = [
      {
        id: 1,
        nome: "Bandeirantes",
        data: "02/08/2022 às 11h"
      },
      {
        id: 2,
        nome: "GLOG",
        data: "02/08/2022 às 11h20"
      },
      {
        id: 3,
        nome: "BR TRANSLOG",
        data: "02/08/2022 às 14h"
      },
  ];

    const [cnpj,setCnpj] = useState("");
    const [empresas,setEmpresas] = useState([] as Empresa[]);

    const [hideConsultar,setHideConsultar] = useState(false);
    const [hideCargas,setHideCargas] = useState(true);
    const [hideCarga,setHideCarga] = useState(true);
    const [hideTransportadoras,setHideTransportadoras] = useState(true);

    const [hideButtonVoltarConsultar,setHideButtonVoltarConsultar] = useState(true);
    const [hideButtonVoltarCargas,setHideButtonVoltarCargas] = useState(true);
    const [hideButtonVoltarCarga,setHideButtonVoltarCarga] = useState(true);
    const [hideButtonVoltarTransportadora,setHideButtonVoltarTransportadora] = useState(true);

    useEffect(()=>{
      setEmpresas(empresasBkp);        
    });
    
    const voltarConsultar = () =>{
      setHideConsultar(false);
      setHideCarga(true);
      setHideCargas(true);
      setHideButtonVoltarConsultar(true);
      setHideButtonVoltarCargas(true);
      setHideButtonVoltarCarga(true);
      setHideButtonVoltarCarga(true);
      setHideTransportadoras(true);
      setHideButtonVoltarTransportadora(true);
    }

    const buscar = () =>{      
      setHideConsultar(true);
      setHideCarga(true);
      setHideCargas(false);
      setHideButtonVoltarConsultar(false);
      setHideButtonVoltarCargas(true);
      setHideButtonVoltarCarga(true);
      setHideButtonVoltarCarga(true);
      setHideTransportadoras(true);
      setHideButtonVoltarTransportadora(true);
    }

    const voltarParaConsulta = () =>{
      setHideConsultar(false);
      setHideCarga(true);
      setHideCargas(true);
      setHideButtonVoltarConsultar(true);
      setHideButtonVoltarCargas(true);
      setHideButtonVoltarCarga(true);
      setHideButtonVoltarCarga(true);
      setHideTransportadoras(true);
      setHideButtonVoltarTransportadora(true);
    }
   
    const buscarCargas = () =>{
      setHideConsultar(true);
      setHideCarga(false);
      setHideCargas(true);
      setHideButtonVoltarConsultar(true);
      setHideButtonVoltarCargas(false);
      setHideButtonVoltarCarga(true);
      setHideButtonVoltarCarga(true);
      setHideTransportadoras(true);
      setHideButtonVoltarTransportadora(true);
    }
  
    const buscarCarga = () =>{
      setHideConsultar(true);
      setHideCarga(false);
      setHideCargas(true);
      setHideButtonVoltarConsultar(true);
      setHideButtonVoltarCargas(true);
      setHideButtonVoltarCarga(false);
      setHideButtonVoltarCarga(true);
      setHideTransportadoras(true);
      setHideButtonVoltarTransportadora(true);
    }
  
    const voltarParaCargas = () =>{
      setHideConsultar(true);
      setHideCarga(true);
      setHideCargas(false);
      setHideButtonVoltarConsultar(false);
      setHideButtonVoltarCargas(true);
      setHideButtonVoltarCarga(true);
      setHideButtonVoltarCarga(true);
      setHideTransportadoras(true);
      setHideButtonVoltarTransportadora(true);
    }

    const showTransportadoras = () => {
      setHideConsultar(true);
      setHideCarga(true);
      setHideCargas(true);
      setHideButtonVoltarConsultar(true);
      setHideButtonVoltarCargas(true);
      setHideButtonVoltarCarga(false);
      setHideTransportadoras(false);
      setHideButtonVoltarTransportadora(true);
    }
    
    const voltarParaCarga = () =>{
      setHideConsultar(true);
      setHideCarga(false);
      setHideCargas(true);
      setHideButtonVoltarConsultar(true);
      setHideButtonVoltarCargas(true);
      setHideButtonVoltarCarga(true);
      setHideButtonVoltarTransportadora(true);
      setHideTransportadoras(true);
    }


    const blocoCargas = empresas.map(e=><div key={e.id} className="row">
    <div className="col-lg-12">
        <h2>{e.nome}</h2>
        <h3>Cargas</h3>
        {e.cargas.map(c=>            
        <div className="card" key={c.id} onClick={buscarCarga}>
            <div className="card-body">
                <h4>{c.nome}</h4>
                <label>{c.descricao}</label><br/>
                <label>{c.origem}</label><br/>
                <label>{c.destino}</label><br/>            
            </div>                
        </div>
        )}
    </div>
</div>);

    const blocoCarga = empresas.map(e=><div key={e.id+"d"}>   <div key={"k"+e.id} className="row">
        <div className="col-lg-12">
            <h2>{e.nome}</h2>
            {e.cargas.map(c=>            
            <div className="row" key={c.id}>
                <div className="col-lg-12">
                    <h3>{c.nome}</h3>
                    <b>Descrição: </b><label>{c.descricao}</label><br/>                    
                    <b>Origem: </b><label>{c.origem}</label><br/>
                    <b>Destino: </b><label>{c.destino}</label><br/>
                    <div className="card" onClick={buscarCarga}>
                        {c.status.map(s=>
                        <div className="card-body" style={{backgroundColor: (s.nome== "Carga liberada"? "lightgreen": s.nome == "Canal vermelho"? "lightcoral":"")}} key={s.data+s.nome}>                            
                            <label>{s.data}</label><br/>
                            <label>{s.nome}</label>                        
                        </div>)
                        }
                    </div>
                </div>                
            </div>
            )}
        </div>
    </div>
    <br/>
    <div className="row"><button className="btn btn-outline-info col-lg-2" onClick={showTransportadoras}>Opções de transporte</button></div>
</div>);

const blocoTransportadora = transportadoras.map(e=><div key={e.id} className="row">
<div className="col-lg-12">
        <div className="card" key={e.id}>
            <div className="card-body">
                <h4>{e.nome}</h4>
                <label>{e.data}</label>                
            </div>                
        </div>
</div>
</div>);

   return (
      <div className="flex-container">
        <div className="flex-left" id="div-logo">
          <div id="circle-white">
            <img src={srcLogo} title="THE BING" alt="Logotipo do sistema The Bing"/>
          </div>
        </div>
        <div className="flex-right">
          <div className="row">
            <div className="row">
              <button className="btn btn-outline-info col-lg-2" hidden={hideButtonVoltarConsultar} onClick={voltarConsultar}>Voltar</button>
            </div>
            <div className="col-lg-12" hidden={hideConsultar}>
            <h2>Consultar</h2>
            <div className="row">
            <div className="col-lg-6">
                <div className="input-group mb-6">
                    <input type="text" className="form-control" placeholder="Digite o CNPJ" required value={cnpj} onChange={e=> setCnpj(e.target.value)}/>
                    <button className="btn btn-outline-info" disabled={cnpj==""} type="button" id="button-addon1" onClick={buscar}>Buscar</button>
                </div>
                </div>
            </div>
          </div>
          {empresas.length>0?<>
          <div className="row">
            <button className="btn btn-outline-info col-lg-2" hidden={hideButtonVoltarCargas} onClick={voltarParaConsulta}>Voltar</button>
          </div>
          <div className="row" hidden={hideCargas}>
                {blocoCargas}
          </div>
          <div className="row">
            <button className="btn btn-outline-info col-lg-2" hidden={hideButtonVoltarCarga} onClick={voltarParaCargas}>Voltar</button>
          </div>
          <div className="row" hidden={hideCarga}>
                {blocoCarga}
          </div>
          <div className="row">
            <button className="btn btn-outline-info col-lg-2" hidden={hideButtonVoltarTransportadora} onClick={voltarParaCarga}>Voltar</button>
          </div>
          <div className="row" hidden={hideTransportadoras}>
          <h3>Transportadoras</h3>
                {blocoTransportadora}
          </div></>:<div></div>
          }
        </div>        
      </div>
    </div>  );
}

function App() {
  return (
    <Home />
  );
}

export default App;

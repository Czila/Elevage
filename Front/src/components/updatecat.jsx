import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios'
import Cats from '../components/cats';



function UpdateCat() {
    const [name, setName] = useState('')
    const [sex, setSex] = useState('')
    const [icad, setIcad] = useState(0)
    const [ddn, setDdn] = useState(Date)
    const [loof, setLoof] = useState('')
    const [testg, setTestg] = useState('')
    const [testm, setTestm] = useState('')
    const [dvac, setDvac] = useState(Date)
    const [dver, setDver] = useState(Date)
  
    const [cats, setCats] = useState([])
    const [id, setId] = useState(0)

    function handleChangeName(e){
        setName(e.target.value)
      }
      function handleChangeSex(e){
        setSex(e.target.value)
      }
    
      function handleChangeIcad(e){
        setIcad(e.target.value)
      }
      function handleChangeDdn(e){
        setDdn(e.target.value)
      }
      function handleChangeLoof(e){
        setLoof(e.target.value)
      }
    
      function handleChangeTestg(e){
        setTestg(e.target.value)
      }
      function handleChangeTestm(e){
        setTestm(e.target.value)
      }  
      function handleChangeDvac(e){
        setDvac(e.target.value)
      }
      function handleChangeDver(e){
        setDver(e.target.value)
      }
    
      async function handleSubmit(e){
        e.preventDefault() 
    
        const resultat = await axios.put("http://localhost:3003"+id,{
        id,
        name,
        sex,
    icad,
    ddn,
    loof,
    testg,
    testm,
    dvac,
    dver
        }) 
      }
    

useEffect( ()=>{
    
    console.log('after mounted into the dom')

  
  async function handleSubmit(e){
    e.preventDefault() 
    const resultat = await axios.post("http://localhost:3003",{
    name,
    sex,
    icad,
    ddn,
    loof,
    testg,
    testm,
    dvac,
    dver
    }) 
  }
  handleSubmit()

  async function getCats(){
    try{
      const result = await axios.get("http://localhost:3003") 
      setCats(result.data)
    }
    catch(err){
      console.error(err.message)
    }
  }

  getCats()
  }, [])
function handleChange(e) {
    setId(cats[e.target.value].id)
    setName(cats[e.target.value].name)
    setSex(cats[e.target.value].sex)
    setIcad(cats[e.target.value].icad)
    setDdn(cats[e.target.value].ddn)
    setLoof(cats[e.target.value].loof)
    setTestg(cats[e.target.value].testg)
    setTestm(cats[e.target.value].testm)
    setDvac(cats[e.target.value].dvac)
    setDver(cats[e.target.value].dver)
}
    return (  

        
        <div className="select">
  <select  onChange={(e) => handleChange(e)}>   { 
                 cats.map(
                    (cat, index)=> (
                        <option key={cat.id} value={index}>{cat.name}</option>))
                }

  </select>

{(id!==0)? 
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <div>
        <label>Nom du produit<input value={name} onChange={handleChangeName}/>
        </label>
        </div>
        <label>Sexe (M/F)<input value={sex} onChange={handleChangeSex}/>
          </label>
          </div>
          <div>
          <label>Icad<input value={icad} onChange={handleChangeIcad} type="number" />
          </label>
          </div>
          <div>
          <label>Date de naissance<input value={ddn} onChange={handleChangeDdn} type="date" />
          </label>
          </div>
          <div>
          <label>LOOF<input value={loof} onChange={handleChangeLoof}/>
          </label>
          </div>
          <div>
          <label>Tests génétiques<input value={testg} onChange={handleChangeTestg}/>
          </label>
          </div>
          <div>
          <label>Tests médicaux<input value={testm} onChange={handleChangeTestm}/>
          </label>
          </div>
          <div>
          <label>Date de dernière vaccination<input value={dvac} onChange={handleChangeDvac} type="date" />
          </label>
          </div>
          <div>
          <label>Vermifuge<input value={dver} onChange={handleChangeDver} type="date" />
          </label>
          </div>
      <button>Modifier les données du chat</button>
    </form>
    </div>


 : null}



</div>
)
}
export default UpdateCat;
import axios from 'axios'
import {useState, useEffect} from 'react'

import Cats from '../components/cats'




function Newcat() {
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


  useEffect( ()=>{
    console.log('after mounted into the dom')


  async function getCats(){
    try{
      const result = await axios.get("http://localhost:3003/")
      setCats(result.data)
    }
    catch(err){
      console.error(err.message)
    }
  }

  getCats()
  }, [])

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

  async function handleDelete(id){
    await axios.delete(`http://localhost:3003/${id}`)

    const filteredCats = cats.filter(cat => cat.id !== id)

    setCats(filteredCats)
  }


  async function handleSubmit(e){
    e.preventDefault() 

    const resultat = await axios.post("http://localhost:3003/",{
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


  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom<input value={name} onChange={handleChangeName}/>
          </label>
          </div>
        <div>
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
        <button>Créer mon produit</button>
      </form>
      <div> 
        {cats.length ? <ul>{<Cats cats={cats} onDelete={handleDelete}/>}</ul> : <p>Plus de chat</p>}
      </div>
    </div>
  );
}

export default Newcat
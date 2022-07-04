import Cat from "./cat"
import UpdateCat from "../components/updatecat"

function Cats({cats, onDelete}){
    return (
        <div>
            <h2>Mes chats</h2>
                { 
                 cats.map(
                    (cat)=> (
                        <Cat key={cat.id}
                            cat={cat}
                            onDelete={onDelete}
                        />))
                }
                
        </div>
    )
}       

export default Cats;
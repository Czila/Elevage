function Cat({cat, onDelete}){
    return (
            <div>
                <div className="cats">
                <li>{cat.name} - {cat.icad}</li> -
                <i 
                className="fa-solid fa-trash-can" 
                onClick={()=>onDelete(cat.id)}>
                </i>

                </div>
          </div>
    )
}

export default Cat;
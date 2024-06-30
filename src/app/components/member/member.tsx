
type MemberProps = {
  noms: string,
  age: number,
  ville: string,
  image: string,
  id: number,
  parent: number,
  childNodes: number
}

function Member({noms, age, ville, image}: MemberProps) {
  return (
    <div className='card border flex flex-col p-2 w-1/4'>
      <div className="image">
        <img src={image} alt="Profil de ..." />
      </div>
      <div className="description">
        <ul>
          <li>{noms}</li>
          <li>{ville}</li>
          <li>{age}</li>
          <li className="flex">
            <button>Voir</button>
            <button className="disabled" disabled>Editer</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Member
import { useState } from "react"
import Member from "../../../components/member/member";

const tab = [
  {
    noms: "Fotsing Justin",
    age: 64,
    ville: "Bafoussam",
    image: "",
    id: 1,
    parent: 1,
    childNodes: 2
  },
  {
    noms: "Talla Thomas",
    age: 54,
    ville: "Koutaba",
    image: "",
    id: 2,
    parent: 1,
    childNodes: 2
  },
  {
    noms: "Yonzo Mathieu",
    age: 44,
    ville: "Bameka",
    image: "",
    id: 3,
    parent: 1,
    childNodes: 2
  },
  {
    noms: "Waffeu Celestin",
    age: 34,
    ville: "Douala",
    image: "",
    id: 4,
    parent: 1,
    childNodes: 2
  },
  {
    noms: "wefwWaffeu Celestin",
    age: 34,
    ville: "Douala",
    image: "",
    id: 5,
    parent: 1,
    childNodes: 2
  },
  {
    noms: "ewWaffeu Celestin",
    age: 34,
    ville: "Douala",
    image: "",
    id: 6,
    parent: 1,
    childNodes: 2
  },
];

const AllMember = () => {

  const [allMembers, setAllMembers] = useState(tab)

  return (
    <div className="flex flex-col gap-12 mx-auto w-full bg-slate-600 p-2">
      {allMembers.map((member, key) => (
        <Member noms={member.noms} age={member.age}  ville={member.ville}  image={member.image} key={key} id={member.id} parent={member.parent} childNodes={member.childNodes} />
      ))}
    </div>
  )
}

export default AllMember
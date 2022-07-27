import {
  useRecoilState,
  selector,
} from 'recoil';
const  CharacterCounter =()=>(
  <div>
    <TextInput />
  </div>
)

 const TextInput = ()=>{
  
  return (
    <div>
      <input />
      <br />
      Echo:{}
    </div>
  )
 }

export default CharacterCounter
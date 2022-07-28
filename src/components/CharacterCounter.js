import {
  useRecoilState,
  useRecoilValue,
  selector,
  atom,
} from 'recoil';

// atom对象
const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

// selector pure function
const charCountState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  }
});

// mian
const CharacterCounter = () => (
  <div>
    <TextInput />
    <CharacterCount />
  </div>
)

// component 1
function CharacterCount() {
  const count = useRecoilValue(charCountState);
  return (<>Character Count is: {count}</>);
}

//
const TextInput = () => {
  // 获取atom数据
  const [text, setText] = useRecoilState(textState);
  const onChange = (e) => {
    setText(e.target.value);
  }
  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo is:{text}
    </div>
  )
}

export default CharacterCounter;
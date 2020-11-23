import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <p>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </p>
  );
};

const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const text = get(textState);

    return text.length;
  },
});

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <h4>Character Count: {count}</h4>;
};

function CharacterCounter() {
  return (
    <>
      <TextInput />
      <CharacterCount />
    </>
  );
}

export default CharacterCounter;

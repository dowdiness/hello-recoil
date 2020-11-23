import { RecoilRoot } from 'recoil';

import CharacterCounter from './CharacterCounter';

function App() {
  return (
    <RecoilRoot>
      <header>
        <h1>Recoil Tutorial</h1>
      </header>
      <h2>CharacterCounter</h2>
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;

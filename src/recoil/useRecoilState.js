import { useState } from 'react';

const useRecoilState = recoilState => {
  return [recoilState.get(), useSetRecoilState(recoilState)];
}

const useSetRecoilState = (recoilState) => {
  const [, forceUpdate] = useState(0);
  return (newValue) => {
    recoilState.set(newValue);
    forceUpdate(x => x + 1)
  }
}

export default useRecoilState;
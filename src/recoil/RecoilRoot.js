import React, { useRef } from 'react';
export const RecoilContext = React.createContext();

const RecoilRoot = ({children}) => {
  const state = {};
  const store = { getState: () => state };
  const storeRef = useRef(store);
  return (
    <RecoilContext.Provider value={storeRef}>
      {children}
    </RecoilContext.Provider>
  )
}

export default RecoilRoot;
import { createStateContext } from 'react-use';

const [useLoginState, LoginStateProvider] = createStateContext(!!localStorage.getItem("ykToken"));

export {useLoginState, LoginStateProvider};
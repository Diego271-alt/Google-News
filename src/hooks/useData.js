import { useReducer } from 'react';
const ACTIONS = {
  STORE_DATA: 'store_data',
  CHANGE_PAGE: 'change_page',
  LOAD_PAGE: 'load_page',

};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.STORE_DATA:
      return { ...state, articles: action.payload };
    case ACTIONS.CHANGE_PAGE:
      return { ...state, page: action.payload };
    case ACTIONS.LOAD_PAGE:
      return { ...state, load: action.payload };
    default:
      return state;
  }
};

export default function useData({
  initialpage,
  initalarticles,
  initialloadData,
}) {
  const [state, dispach] = useReducer(reducer, {
    articles: initalarticles,
    page: initialpage,
    load: initialloadData,

  });
  const {articles, page, load } = state;

  return {
    articles,
    page,
    load,

    storeData: (articles) => dispach({ type: ACTIONS.STORE_DATA, payload: articles }),
    loadData: (load) => dispach({ type: ACTIONS.LOAD_PAGE, payload: load }),
    changePage: (page) => dispach({ type: ACTIONS.CHANGE_PAGE, payload: page   }),
  };
}
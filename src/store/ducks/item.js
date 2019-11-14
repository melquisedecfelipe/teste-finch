const INITIAL_STATE = {
  items: [],
  title: ' - Carregando...',
  subtitle: 'Carregando...',
  search: '',
  detail: [],
  favoriteCount: true,
};
const storageItems = JSON.parse(localStorage.getItem('items'));

// TYPES
export const Types = {
  GET_ALL_ITEMS: 'items/GET_ALL_ITEMS',
  GET_ITEM_DETAIL: 'item/GET_ITEM_DETAIL',
  GET_ITEMS_EXCLUSIVE: 'items/GET_ITEMS_EXCLUSIVE',
  GET_ITEMS_FAVORITE: 'items/GET_ITEMS_FAVORITE',
  SET_STORAGE_ITEMS: 'items/SET_STORAGE_ITEMS',
  SET_ITEM_FAVORITE: 'items/SET_ITEM_FAVORITE',
  GET_ITEMS_PROMOTION: 'items/GET_ITEMS_PROMOTION',
  SET_SEARCH: 'items/SET_SEARCH',
};

function getLocalStorage(id) {
  const updateFavorites = JSON.parse(localStorage.getItem('items')).map(elem =>
    elem.id === id ? { ...elem, favorito: !elem.favorito } : elem,
  );

  localStorage.setItem('items', JSON.stringify(updateFavorites));
}

function setSearchHistory(search) {
  const storageHistory = JSON.parse(localStorage.getItem('history-search'));
  const searchTrim = search.trim();

  setTimeout(() => {
    if (storageHistory) {
      storageHistory.push(searchTrim);
      localStorage.setItem('history-search', JSON.stringify(storageHistory));
    } else {
      localStorage.setItem('history-search', JSON.stringify([searchTrim]));
    }
  }, 1500);

  return search;
}

// REDUCERS
export default function item(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_ALL_ITEMS:
      return {
        ...state,
        items: action.items,
        title: ' - Conheça todos os nossos produtos',
        subtitle: 'Listagem de produtos - clique no produto desejado para saber mais',
      };
    case Types.GET_ITEM_DETAIL:
      return {
        ...state,
        detail: storageItems.filter(elem => (elem.id === action.id ? elem : null)),
      };
    case Types.GET_ITEMS_EXCLUSIVE:
      return {
        ...state,
        items: action.items.filter(elem => elem.exclusivo === true),
        title: ' - Conheça nossos produtos exclusivos',
        subtitle: 'Listagem de produtos exclusivos - clique no produto desejado para saber mais',
      };
    case Types.GET_ITEMS_FAVORITE:
      return {
        ...state,
        items: action.items.filter(elem => elem.favorito === true),
        title: ' - Meus Favoritos',
        subtitle: `Listagem de produtos marcados como favoritos
                  - clique no produto desejado para saber mais`,
      };
    case Types.SET_STORAGE_ITEMS:
      localStorage.setItem('items', JSON.stringify(action.items));
      return {
        ...state,
        items: action.items,
      };
    case Types.SET_ITEM_FAVORITE:
      return {
        ...state,
        favorites: getLocalStorage(action.id),
        favoriteCount: !state.favoriteCount,
      };
    case Types.GET_ITEMS_PROMOTION:
      return {
        ...state,
        items: action.items.filter(elem => elem.promocao === true),
        title: ' - Conheça nossas promoções',
        subtitle: 'Listagem de produtos em promoção - clique no produto desejado para saber mais',
      };
    case Types.SET_SEARCH:
      return {
        ...state,
        search: setSearchHistory(action.search),
      };
    default:
      return state;
  }
}

// ACTIONS
export const Creators = {
  getAll: items => ({
    type: Types.GET_ALL_ITEMS,
    items,
  }),
  getItemDetail: id => ({
    type: Types.GET_ITEM_DETAIL,
    id,
  }),
  getExclusive: items => ({
    type: Types.GET_ITEMS_EXCLUSIVE,
    items,
  }),
  getFavorite: items => ({
    type: Types.GET_ITEMS_FAVORITE,
    items,
  }),
  setItems: items => ({
    type: Types.SET_STORAGE_ITEMS,
    items,
  }),
  setFavorite: id => ({
    type: Types.SET_ITEM_FAVORITE,
    id,
  }),
  getPromotion: items => ({
    type: Types.GET_ITEMS_PROMOTION,
    items,
  }),
  setSearch: search => ({
    type: Types.SET_SEARCH,
    search,
  }),
};

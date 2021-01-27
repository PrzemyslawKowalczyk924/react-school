import {connect} from 'react-redux';
import { getCardsForSearchResult } from '../../redux/cardsRedux';
import SearchResult from './SearchResult';

const mapStateToProps = (state, props) => {
  return {
    cards: getCardsForSearchResult(state, props.match.params.searchLink),      
  };
};

export default connect(mapStateToProps)(SearchResult);

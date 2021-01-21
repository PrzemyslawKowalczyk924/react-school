import { connect } from 'react-redux';
import Column from './Column.js';

export const getCardsForColumn = ({ cards }, columnId) => {
  console.log(cards, columnId);
  console.log(cards.filter(card => card.columnId == columnId));
  return cards.filter(card => card.columnId == columnId);
};

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

export default connect(mapStateToProps)(Column);
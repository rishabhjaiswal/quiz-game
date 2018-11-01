import { connect } from 'react-redux'
import { getQuiz } from '../actions/gameActions';
import GameScreen from '../components/GameScreen';

const mapStateToProps = (state) => ({
  gameRequest: state.gameRequest
})

const mapActionToProps = dispatch => ({
  getGame: () => getQuiz()(dispatch)
})

export default connect(mapStateToProps, mapActionToProps)(GameScreen);

import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import Round from 'components/game/Round'
import { newRound, endGame } from 'store/game/actions'
import { RootState } from 'store'

const mapStateToProps = (state: RootState) => ({
    players: state.game.setup.players,
    stats: state.game.stats,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onNewRound: () => dispatch(newRound()),
    onEndGame: () => dispatch(endGame()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Round)

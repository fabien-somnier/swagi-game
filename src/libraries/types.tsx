export interface Card {
    [key: string]: string,
}

export type Rule = 'bigger' | 'smaller'

export interface Rules {
    [key: string]: Rule,
}

/** Configuration of the game */
export interface Setup {
    resource: string,
    players: number,
}

/** Timestamps of the game */
export interface Times {
    start: number,
    end?: number,
}

/** One player details */
export interface Player {
    card: object, // card details
    loading: boolean, // is the card loading
    winner: boolean, // is the card winning
}

/** One round details */
export interface Round {
    player1: Player,
    player2: Player,
    player3?: Player,
    player4?: Player,
    [propName: string]: Player
}

/** One player stats */
export interface Stat {
    wins: number, // how many rounds did the player win
    deuces: number, // how many deuce rounds
    looses: number, // how many rounds did the player lost
    leader?: boolean, // is the player leading the game
}

/** One game stats */
export interface Stats {
    player1: Stat,
    player2: Stat,
    player3?: Stat,
    player4?: Stat,
    [propName: string]: Stat
}

export interface Game {
    id?: number,
    stats: Stats,
    rounds: Round[],
    times: Times,
}
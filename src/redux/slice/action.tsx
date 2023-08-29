export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

interface IncrementAction {
  type: typeof INCREMENT;
}

interface DecrementAction {
  type: typeof DECREMENT;
}

export type ActionTypes = IncrementAction | DecrementAction;

export const  increment = () : ActionTypes => ({
  type: INCREMENT
})

export const  decrement = () : ActionTypes => ({
  type: DECREMENT
})
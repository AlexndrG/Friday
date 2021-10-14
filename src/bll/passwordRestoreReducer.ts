const initialState = {}

type StateType = typeof initialState

type ActionType = any

export function passwordRestoreReducer(state: StateType = initialState, action: ActionType): StateType {
    switch (action.type) {


        default:
            return state
    }
}
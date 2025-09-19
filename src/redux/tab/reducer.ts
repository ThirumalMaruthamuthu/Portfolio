import { SET_TAB } from './action'

interface TabState {
  activeTab: number
}

interface SetTabAction {
  type: typeof SET_TAB
  payload: number
}

type TabActionTypes = SetTabAction

const initialState: TabState = {
  activeTab: 1,
}

export const tabReducer = (
  state = initialState,
  action: TabActionTypes
): TabState => {
  switch (action.type) {
    case SET_TAB:
      return {
        ...state,
        activeTab: action.payload,
      }
    default:
      return state
  }
}

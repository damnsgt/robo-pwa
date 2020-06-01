import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js'

import * as actions from './actions';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

describe('setSearchField', () => {
    it('should create an action to search robots', () => {
        const text = 'wooo';
        const expectedAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: text
        }

        expect(actions.setSearchField(text)).toEqual(expectedAction);
    })   
})

describe('requestRobots', () => {
    it('handle requesting robots API', () => {
        const store = mockStore();
        store.dispatch(actions.requestRobots());
        const action = store.getActions();

        const expectedActionPending = {
            type: REQUEST_ROBOTS_PENDING
        }
        expect(action[0]).toEqual(expectedActionPending);    
    })   
})
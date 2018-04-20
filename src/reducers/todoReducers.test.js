import * as todoActions from '../actions/TodoActions';
import todoReducer from './todoReducers';

describe('Todo reducer', () => {
    it('should add todos after a get', () => {
        const initialState = [
            {id: 1, title: 'test1', status: true}
        ];
        const newTodo = {id: 2, title: 'test2', status: false};
        const action = todoActions.getTodoSuccess(newTodo);
        const newState = todoReducer(initialState, action);

        expect(newState.length).toEqual(2);
    });

    it('should add todos after add', () => {
        const initialState = [
            {id: 1, title: 'test1', status: true}
        ];
        const newTodo = {id: 2, title: 'test2', status: false};
        const action = todoActions.addTodoSuccess(newTodo);
        const newState = todoReducer(initialState, action);

        expect(newState.length).toEqual(2);
    });
});
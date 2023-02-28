export interface Todo {
    id: number;
    todo: string;
    isDone: boolean;
}


/*type Actions = { type: "ADD_TODO", payload: string } | { type: "REMOVE_TODO", payload: number } | { type: "DONE_TODO", payload: number };

const TodoReducer = (state: Todo[], action:Actions) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, { id: Date.now(), todo: action.payload, isDone: false }];
        case "REMOVE_TODO":
            return state.filter((todo) => todo.id !== action.payload);
        case "DONE_TODO":
            return state.map((todo) => todo.id !== action.payload ? {...todo, isDone: !todo.isDone} : todo);
        default:
            return state;
    }

}

import { useReducer} from "react";

const RedudcerExample = () => {
    const [state, dispatch] = useReducer(TodoReducer, []);

    return (
     </div>
    )
}*/

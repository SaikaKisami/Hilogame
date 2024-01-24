import { createStore } from "vuex";
import type { State } from "./types/types";

export default createStore<State>({
    state: {
        flag: false, canvasStatus: "WEB"
    },
    mutations: {
        changeFlag(state: State) {
            state.flag = !state.flag
        },
        changeCanvasStatus(state: State, payload: { value: string }) {
            state.canvasStatus = payload.value;
        }
    }
})
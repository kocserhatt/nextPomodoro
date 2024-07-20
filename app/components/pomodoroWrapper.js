"use client"

import { useGlobalState } from "@/store/context";

export default function PomodoroWrapper () {
const { state, dispatch } = useGlobalState();
console.log(state);
    return (
        <>
        PomodoroWrapper
        <input onChange={(e) => dispatch({type: "changeCounter", payload: e.target.value})} ></input>
        </>
    )
}

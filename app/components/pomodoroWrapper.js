"use client"

import { useGlobalState } from "@/store/context";

export default function PomodoroWrapper () {
    console.log(useGlobalState());

    return (
        <>PomodoroWrapper</>
    )
}

"use client"

import { useGlobalState } from "@/store/context";
import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton, Typography } from "@mui/material";
import { useState } from 'react';
import { SettingsDialog } from './settingsDialog';

export default function PomodoroWrapper () {
    const {state, dispatch} = useGlobalState();
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

    return (
        <>
            <Typography variant="h4" component="h2">Pomodoro</Typography>
            <input onChange={(e) =>
                dispatch({type: "changeTime", payload: { key: "pomodoro", value: e.target.value }})}>
            </input>
            <IconButton
                sx={{color: 'white'}}
                onClick={() => setIsSettingsModalOpen(true)}
            >
                <SettingsIcon />
            </IconButton>
            <SettingsDialog
                isOpen={isSettingsModalOpen}
                setIsOpen={setIsSettingsModalOpen}
            />
        </>
    )
}

      
      
      
      // <>
        // <Typography variant="h4" component="h2">Pomodoro</Typography>
        // <Typography variant="h6" component="h3">
        //     {state.time.pomodoro} minutes
        // </Typography>
        // <Typography variant="h6" component="h3">
        //     {state.time.shortBreak} minutes
        // </Typography>
        // <Typography variant="h6" component="h3">
        //     {state.time.longBreak} minutes
        // </Typography>
        // <input onChange={(e) => dispatch({type: "changeTime", payload:{key: "pomodoro", value: e.target.value}})} ></input>
        // <input onChange={(e) => dispatch({type: "changeTime", payload:{key: "shortBreak", value: e.target.value}})} ></input>
        // <input onChange={(e) => dispatch({type: "changeTime", payload:{key: "longBreak", value: e.target.value}})} ></input>
        // <AccessTimeIcon/>
        // </>

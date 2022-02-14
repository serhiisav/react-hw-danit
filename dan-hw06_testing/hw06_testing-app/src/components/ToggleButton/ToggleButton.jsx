import React, { useContext } from "react";
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ViewContext } from './../../App';

const ToggleBtn = () => {
    const { view, handleChangeView } = useContext(ViewContext);

    return (
        <ToggleButtonGroup
            orientation="horizontal"
            value={view}
            exclusive
            onChange={handleChangeView}
        >
            <ToggleButton value="module" aria-label="module">
                <ViewModuleIcon />
            </ToggleButton>

            <ToggleButton value="list" aria-label="list">
                <ViewListIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

export default ToggleBtn;
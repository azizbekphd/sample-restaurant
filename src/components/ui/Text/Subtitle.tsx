import React from "react";
import { Label } from "."
import { useMyTheme } from "../../../themes";
import { TextViewProps } from "./_base";

const Subtitle = (props: TextViewProps)=>{
    const theme = useMyTheme();

    return <Label.Small color={theme.colors.icon.semidark} {...props} />
}

export default Subtitle;
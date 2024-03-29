import { useState } from "react";
import s from "./style.module.css" 


export const MenuListItem = (props)=>{
    const [isHovered, setIsHovered] = useState(false);

    const activate = ()=>{
        setIsHovered(true);
    };

    const deactivate = ()=>{
        setIsHovered(false);
    };

    const getBackgroundColor = ()=>{
        if(isHovered){
            return "#a5e9ff";
        }else{ 
            return "#eff0eff";
        }
    };
    return (
        <div 
        className={s.container}
        onMouseEnter={activate} 
        onMouseLeave={deactivate} 
        style={{ backgroundColor: getBackgroundColor()}}
        >
            Set to : {props.difficulty}
        </div>
    );

}
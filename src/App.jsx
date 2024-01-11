import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import MenuList from "./components/MenuList/MenuList";
import { MenuListItem } from "./components/MenuListItem/MenuListItem";
import s from "./style.module.css"

export function App(){
    
    return (
        <div>
            <h1>Select your difficulty</h1>
            <div className={s.workspace}>
            <MenuList/>
            <DisplayDifficulty difficulty="Low" />
            </div>
        </div>
    );
}
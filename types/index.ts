import { manufacturers } from './../constants/index';

import { MouseEventHandler } from "react"

export interface customButtonProps{
    title:String,
    btnType?: "button" | "submit"
    containerStyles?:String
    handleClick?:MouseEventHandler<HTMLButtonElement>
}

export interface SearchManufacturerProps{
    manufacturer:string,
    setManufacturer:(manufacturers:string)=>void

}
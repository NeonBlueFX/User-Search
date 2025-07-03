
import { userDataInterface } from "../Interfaces/interfaces";

export const UserInterface = ({props,selectuser}:{props:userDataInterface,selectuser(id:number)}) => {

    return(
        <div className=" w-[60%] m-auto shadow-lg font-bold bg-white h-[30px] rounded-md hover:scale-105 hover:bg-lime-300 transition-all" onClick={()=>selectuser(props.id)}>
            <div className="m-auto text-center">
            {props.username}
            </div>
        </div>
    )
}
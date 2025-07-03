
import { userDataInterface } from "../Interfaces/interfaces";

export const UserInterface = ({props,selectuser}:{props:userDataInterface,selectuser(id:number)}) => {

    return(
        <div className="border-2 w-[60%] m-auto h-[30px]" onClick={()=>selectuser(props.id)}>
            <div className="m-auto text-center">
            {props.username}
            </div>
        </div>
    )
}
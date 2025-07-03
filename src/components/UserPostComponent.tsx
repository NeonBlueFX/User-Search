
import {PostI, Posts, userDataInterface } from "../Interfaces/interfaces";

export const UserPostsInterface = ({props, author}:{props:PostI, author:string}) => {

    return(
        <div className="border-2 w-[90%] m-auto  h-[100px] rounded-2xl " >
            <div className="m-auto text-center">
            {props.id}
            </div>
               <div className="m-auto text-center p-3">
            {props.title}
            </div>
              <div className="m-auto text-center">
            <span className="text-center font-bold">Author: </span>{author}
            </div>
        </div>
    )
}
import React from "react";

const UserPostsModal = (props) => {

    return (
        <div className="flex  justify-center top-0 left-0 items-center fixed w-full h-[100vh] bg-[rgba(0,0,0,0.2)]">
            <div className="relative shadow-inner p-[32px] h-[700px] w-full max-w-[1000px] rounded-2xl bg-white text-black overflow-y-scroll">
                {props.children}
            </div>
        </div>
    )
}

export default UserPostsModal;
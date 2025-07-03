import React from "react";

const SelectedUserModal = (props) => {

    return (
        <div className="flex  justify-center xl:top-0 left-0 items-center fixed w-full h-[100vh] bg-[rgba(0,0,0,0.2)]">
            <div className="relative shadow-inner p-[32px] w-full max-w-[800px] rounded-2xl bg-white text-black">
                {props.children}
            </div>
        </div>
    )
}

export default SelectedUserModal;
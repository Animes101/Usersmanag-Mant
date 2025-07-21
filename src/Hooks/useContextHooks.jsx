import React, { useContext } from "react";
import { usersContext } from "../Context/Users";

export const useUserContext=()=>{

    return useContext(usersContext)

}

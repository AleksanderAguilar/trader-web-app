import {useDispatch} from "react-redux";
import { createAsyncThunk } from "@reduxjs/toolkit";

import {useEffect} from "react";
const profile = async () => api.post(`${SECURITY_API}/profile`).then((response) => response.data);

const CurrentUser = ({children}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(
            createAsyncThunk("profile", async () => await service.profile())
        )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return(children)
}
export default CurrentUser;
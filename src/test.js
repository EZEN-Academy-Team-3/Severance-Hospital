import React,{memo,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {getCode,getCode2,getPayHos} from './slices/UnsupportedSlice';


const Test = memo(() => {
    const dispatch = useDispatch();
    const {data,loading,error} = useSelector((state) => state.UnsupportedSlice);

    useEffect(() => {
        dispatch(getPayHos());
    },[dispatch]);
    console.log(data);
    //console.log(typeof data);

    return (
        loading ? 'loading...' : (
            error ? JSON.stringify(error) : (
                <p>
                    {data.response.body.items.item.map((v, i) => JSON.stringify(v))}
                </p>
            )
        )
    );
});

export default Test;
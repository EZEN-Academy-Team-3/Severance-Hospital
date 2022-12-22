import React,{memo,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {getCode} from './slices/UnsupportedSlice';

const Test = memo(() => {
    const dispatch = useDispatch();
    const {data,loading,error} = useSelector((state) => state.UnsupportedSlice);

    useEffect(() => {
        dispatch(getCode());
    },[]);
    
    return (
        loading ? 'loading...' : (
            error ? JSON.stringify(error) : (
                <>
                    {JSON.stringify(data)}
                </>
            )
        )
    );
});

export default Test;
import React, { useEffect, useRef, useState } from 'react'
import axios from '../utils/fakeAxios';

const InfiniteScroll = props => {
    const ref = useRef(null);
    const [data, setData] = useState([]);

    const callApi = async () => {
        const listData = await axios.get();
        setData(listData);
    }

    useEffect(() => {
        callApi(); 
    }, [])

    return (
        <div className="infiniteScroll">
            {data.map(({id, name}) => (
                <div className="infiniteScroll-item" key={id}>
                    <span>{name}</span>
                </div>
            ))}
            <div ref={ref}></div>
        </div>
    )
}

export default InfiniteScroll


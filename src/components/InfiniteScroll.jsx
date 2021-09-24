import React, { useEffect, useRef, useState } from 'react'
import axios from '../utils/fakeAxios';

const VISIBLE_COUNT = 10;
const ITEM_HEIGHT = 100;

const InfiniteScroll = props => {
    const [data, setData] = useState([]);

    const callApi = async () => {
        const listData = await axios.get();
        setData(listData);
        setViewData(listData.slice(0, VISIBLE_COUNT));
    }

    useEffect(() => {
        callApi();
    }, [])

    const [viewData, setViewData] = useState([]);
    const [paddingTop, setPaddingTop] = useState(0);

    const viewportHeight = VISIBLE_COUNT * ITEM_HEIGHT;
    const totalHeight = data.length * ITEM_HEIGHT


    const handleScroll = ({ target: { scrollTop } }) => {
        console.log('scroll', scrollTop);

        const startIdx = Math.floor(scrollTop / ITEM_HEIGHT);
        const endIdx = Math.min(startIdx + VISIBLE_COUNT, data.length - 1)
        const newViewData = data.slice(startIdx, endIdx);
        const newPaddingTop = Math.max(startIdx * ITEM_HEIGHT, 0);
        console.log(startIdx, endIdx, newPaddingTop);
        setPaddingTop(newPaddingTop)
        setViewData(newViewData);
    }
    console.log('data',data, viewData);
    return (
        <div className="infiniteScroll" style={{ height: totalHeight }}>
            <div className="viewPort" onScroll={handleScroll} style={{ height: viewportHeight - 100, overflowY: 'auto' }}>
                <div className="buffer" style={{ paddingTop }}>
                {viewData.map(({id, name}) => (
                    <div className="infiniteScroll-item" key={id} style={{ height: ITEM_HEIGHT }}>
                        <span>{name}</span>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default InfiniteScroll


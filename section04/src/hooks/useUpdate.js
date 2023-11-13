import {useRef, useEffect} from 'react';
export default function useUpdate(cb){
    const isMountRef = useRef(false);

    // 업데이트 (변화, 리렌더)
    useEffect(()=> {
        // 처음엔 실행 안되게 제어
        if(!isMountRef.current){
        isMountRef.current = true;
        return;
        }
        console.log("업데이트");
    });

    cb();
}
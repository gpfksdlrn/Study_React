import './Header.css';
import { memo } from "react";

function Header(){
    return(
        <div className="Header">
            <h1>
                {new Date().toDateString()}
            </h1>
        </div>
    )
}

// memo를 통해 최적화된 Header 컴포넌트가 된다.
// 제공받는 props가 변경되지 않으면 부모가 리렌더 되더라도 다시 리렌더 되지 않도록 최적화 된다.
export default memo(Header);
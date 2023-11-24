import { fetchCountry } from "@/api";
import SubLayout from "@/components/SubLayout";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Country({country}){
    const router = useRouter();
    const {code} = router.query;
    
    if(router.isFallback){
        return <div>Loading...</div>;
    }

    if(!country){
        return <div>존재하지 않는 국가입니다</div>;
    }

    return (
        <div>
            {country.commonName} {country.officialName}
        </div>
    );
}

Country.Layout = SubLayout;

export const getStaticPaths = async() => {
    return {
        paths : [
            {params: {code: 'ABW'}},
            {params: {code: 'KOR'}},
        ],
        // fallback : 생성되지 않은 페이지를 요청할 경우
        // 옵션 
        // false(404페이지), 
        // "blocking"(실시간으로 새로 만들어서 페이지 저장),
        // true(props 없는 버전의 페이지 생성 후 반환, 백그라운드로 props 계산 후 다시 반환)
        fallback: true,
    };
};

export const getStaticProps = async (context) => {
    const {code} = context.params;

    let country = null;

    if(code){
        country = await fetchCountry(code);
    }

    return {
        props: {
            country
        }
    };
};
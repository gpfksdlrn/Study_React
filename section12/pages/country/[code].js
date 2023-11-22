import { fetchCountry } from "@/api";
import SubLayout from "@/components/SubLayout";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Country({country}){
    const router = useRouter();
    const {code} = router.query;
    console.log("2");
    useEffect(()=>{
        console.log("3");
    },[]);
    
    return (
        <div>
            {country.commonName} {country.officialName}
        </div>
    );
}

Country.Layout = SubLayout;

export const getServerSideProps = async (context) => {
    const {code} = context.params;
    console.log("1");
    let country = null;

    if(code){
        country = await fetchCountry(code);
    }

    return {
        props: {
            country
        }
    }
}
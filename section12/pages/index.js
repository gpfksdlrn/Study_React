import { fetchCountries } from "@/api";
import { useEffect } from "react";

export default function Home({countries}) {
  //console.log("Home");
  
  useEffect(()=>{
    //console.log("Home Mount");
  }, []);

  return (
    <div>
      {countries.map((country)=>(
        <div key={country.code}>{country.commonName}</div>
      ))}
    </div>
  );
};

// getServerSideProps => 이 파일이 담당하는 페이지는 SSR방식으로 동작
//export const getServerSideProps = async() => {
export const getStaticProps = async() => {
  // SSR을 위해 서버측에서 페이지 컴포넌트(Home)에게 전달할 데이터를 설정하는 함수

  const countries = await fetchCountries();

  console.log("getServerSideProps Called");
  return{
    props: {
      countries
    },
  };
};
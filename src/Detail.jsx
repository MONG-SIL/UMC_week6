import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { useState , useEffect} from "react";
import Credits from "./Credits"

const Container = styled.div `
    top :100px;
    height: 70%;
    display: flex;
    justify-content: center;
    background-color:none;
    `;
const MovieImg = styled.img`
    position: relative;
    width: 80%;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
`
const Movie_detail = styled.div`
    top: 50px;
    height: 80%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
`
const Detail_h1 = styled.h1 `
    position: relative;
    margin: 0;
    font-weight: 700;
    text-decoration: none;
    color: azure;
    `

const Creditcontainer = styled.div `
    display: grid;
    grid-template-columns: repeat(4, minmax(400px, 1fr));
    grid-gap: 30px;
    padding: 50px;
    width: 80%;
    padding-top: 70px;
    justify-content: center;
  `
function Detail () {
    const {state} = useLocation();
    const [credit, setCredit] = useState("");
 
    const x = useParams(); //id값 받아오기
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWEyZjBhODgyN2IzNmE0NWJiZDQ1YjI3NDExNzg0YiIsInN1YiI6IjY2MWRkYjNkNmQ5ZmU4MDE2MzVmYzE1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BCGVvOvJf0LcX3u13h_BpX3vdUn67gmsScVeWhXCr38'
        }
      };
      
      
    async function getmovie() {//받아온 id 값으로 fetch credit
        fetch(`https://api.themoviedb.org/3/movie/${x.title}/credits?language=en-US`, options)
        .then(response => response.json())
        .then(response => setCredit(response.cast))
        .catch(err => console.error(err));;
  }
  useEffect(()=> {
    getmovie()
  },[]) 
  //setCredit(24);
  

    return(
    
        <Container>
            <MovieImg className="movie__img" src={`https://image.tmdb.org/t/p/w500${state.img}`} />
            <Movie_detail>
                <Detail_h1>{state.title}</Detail_h1>
                <Detail_h1>{state.rate ? "⭐".repeat(state.rate):" 이 영화에 대한 평점이 없습니다!"}</Detail_h1>
                {state.review ? <Detail_h1>{state.review}</Detail_h1> : <Detail_h1> 해당 영화에 대한 리뷰가 없습니다! </Detail_h1> }
                {credit ? <Creditcontainer>{credit.map((item) =>  <Credits key={item.name} name={item.name} profile={item.profile_path} /> )} </Creditcontainer>: null } 
            </Movie_detail>
        </Container>
        
    )
}//(item) => <div> name={item.name} profile={item.profile_path} </div>

export default Detail; //
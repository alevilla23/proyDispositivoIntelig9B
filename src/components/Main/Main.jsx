import Jumbotron from "../../Jumbotron"
function Main({x1}){
    return (
        <>
            <Jumbotron texto={x1}/>
            {/* <h3>UTLD</h3>
            <p>Sergio Alejandro Villa Reyna</p>
            <p>Sistemas y Desarrollo de Software</p> */}
            <h1>Compartiendo: {x1}</h1>

            {/* <button onClick={()=> {
                setx1("Nuevo Valor")
            }}>Actualizar</button> */}
        </>
    )
}
export default Main
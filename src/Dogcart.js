import Image from "./Image";
function DogCard(props){
    return (
     <>

        <h3>{props.name}</h3>
        <Image src ={props.image} />

    </>
    );
}

export default DogCard;
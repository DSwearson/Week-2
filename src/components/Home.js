import Book from './Book';
import {useState} from "react";
//import img from  "./sddssd"

//Read component data from a local JSON file or API
//t least one image, video or multimedia component 

export default function Home () {

    //state
    const [show, setShow] = useState(false)

    //At least one Event Handling, Lists And keys
    const bookList = [
        {
            title: "Algebra",
            desc: "some math",
            author:"Dr. smith"
        },
        {
            title: "Calculus",
            desc: "some math",
            author: "Mrs. Gray"
        },
        {
            title: "History",
            desc: "some math",
            author:"Mr Green"
        }
    ]
    const buttonHandler = function (e) {
            console.log("click", e.target)
            setShow(!show)

    }

    //<img src={img} />

    return <div>
        
        <h1>CSP Book Store</h1>
        <button onClick={buttonHandler}>Click me</button>
        {
            bookList.map((b)=>{
                //Passing property from a parent component to a child component
                return <Book key={b.title} title={b.title}
                buttonHandler={buttonHandler}
                author={b.author}
                show={show}
                >{b.desc}</Book>
            })
        }

        {
            show ? <div>secret</div>:""
        }
       
    </div>



}
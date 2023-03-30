import Title from "./Title"

export default function Book ({title, author, children,show, buttonHandler}){


    return <div style={{border:"solid 1px black", padding: "10px"}}>
       
            <Title>{title}</Title>
            <p>{children}</p>
            {/* Passing property from a child component to parent component (use a callback */}
            <button onClick={buttonHandler}>Inside Button</button>
            {
                show ? <div>{author}</div>: ""
            }


    </div>
}
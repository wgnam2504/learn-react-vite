import './style.css'

const MyComponent = () => {

    const name = "quang nam";
    return (
        <>
            <div>
                {name} &  Quang Nam
            </div>
            <div>{console.log("NAM")}</div>
            <div className="child"
                style={{borderRadius: "10px"}}
            >child</div>
        </>
    );
}

export default MyComponent;
import React from "react";

const ExampleState2 = () => {
    const [show, setShow] = React.useState(true);

    const updateShowHide = () => {
        // if(show) {
        //     setShow(false)
        // } else {
        //     setShow(true)
        // }
        setShow(!show)
    }

    console.log(show)

    return (
        <>
            <button onClick={updateShowHide}>Show/Hide</button>
            <p
                className={show ? "xyz" : "hide"}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus saepe cumque blanditiis necessitatibus excepturi consectetur natus nam? Qui nostrum harum neque. Dignissimos harum provident voluptate quis at voluptatem eveniet ipsa? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, nisi? Accusamus vero aliquid, at dignissimos nostrum dolor numquam ad dolore, molestias quidem iure aperiam culpa officia. Quaerat impedit est velit!
            </p>
        </>
    )
};

export default ExampleState2;

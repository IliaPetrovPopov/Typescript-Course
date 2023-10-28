import ChildAsFC from "./Child";

const Parent = () => {
    return <ChildAsFC color="string" onClick={() => console.log("Hello")}>
        Udri bai filipe
    </ChildAsFC>
}

export default Parent;
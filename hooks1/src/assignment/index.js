import { useState } from "react"

const Assignment = () => {
    const [data, setData] = useState([])

    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    const addRow = (name, age) => {
        const copy = [...data]
        const obj = {
            name: name,
            age: age
        }
        copy.push(obj)
        setData(copy)
    }
    console.log(data)
    return <div>
        <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
        />
        <input 
            type="number" 
            value={age} 
            onChange={(e) => setAge(e.target.value)} 
        />
        <button onClick={() => addRow(name, age)}>Add</button>

        {data.map((obj, i) => {
             return <p key={i}>
                <span>
                    {obj.name}
                </span>
                <span>
                    {obj.age}
                </span>
            </p>
        })}
    </div>
}

export default Assignment
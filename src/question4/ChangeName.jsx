export default function ChangeName({handleInput}) {
    return (
        <div>
            {/* <select onChange={e => handleColor(e.target.value)} name="selectedColor" defaultValue="orange">
                <option value="purle">Purple</option>
                <option value="yellow">Yellow</option>
                <option value="black">Black</option>
            </select> */}
            <input type="text" onChange={e => handleInput(e.target.value)} />
        </div>
    )
}
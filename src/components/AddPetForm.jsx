

const AddPetForm = () => {


    return (
        <form className="pet" onSubmit={this.createPet}>
            <button type="button" onClick={this.props.addPet}/>
            <label htmlFor="petName">Name: {petName}</label>
            <input className="petInput" ref={this.nameRef} name="petName"></input>
            <label htmlFor="gender">Gender: {gender}</label>
            <input className="petInput" name="gender"></input>
            <label htmlFor="dob">Date Of birth: {dob}</label>
            <input className="petInput" name="dob"></input>
            <button className="petInput" type="submit">Submit</button>
            <button className="petInput" type="reset" onClick={Event.target.reset}>Cancel Update</button> 
        </form>
    )
}

return default AddPetForm;
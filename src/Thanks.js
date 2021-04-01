function Thanks(props){
    return (
        <section>
            <h2>Thanks so much {props.fname} {props.lname} {props.address} {props.city} {props.phone} {props.province} {props.email}!</h2>
            <p>You are awesome</p>
        </section>
    )
}
export default Thanks;
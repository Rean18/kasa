import '../../styles/Tags/Tags.css'


function Tags({array}) {

   

    return (
        <div className='tags-container'>
            {array.map((tag, id) => (
                <p key={id}>{tag}</p>
            ))}
            
        </div>
    )
}

export default Tags
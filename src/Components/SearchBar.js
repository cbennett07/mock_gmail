

function SearchBar({searchPhrase, onChange, composeClick}){
    return (<div><input type='text' value={searchPhrase}
                  placeholder={'Search'}
                  onChange={(e)=> onChange(e.target.value)}/>

    <button onClick={composeClick}>
    Compose New Email
    </button></div>)
}

export default SearchBar
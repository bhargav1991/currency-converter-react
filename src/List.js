export default function List(props){
    const data = props.list;
    return(
        <div className="row">
            
            <div className="col-sm-12 col-md-6 offset-md-3 col-lg-6 offset-lg-3 ">
                <a target="__blank" href="https://www2.1010data.com/documentationcenter/beta/1010dataReferenceManual/DataTypesAndFormats/currencyUnitCodes.html">For ISO Codes</a>
                <ul className="list-group">
                {
                    Object.keys(data).map(function(val,i){
                    return <li key={i} className="list-group-item">{val} : {data[val]}</li>
                    })
                }
                </ul>
            </div>
        </div>
    )
}
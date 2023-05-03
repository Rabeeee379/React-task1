import {React , useState} from 'react' ;
import {FaUikit , FaReact , FaWrench} from 'react-icons/fa'


function Services(){
    const [ x , setx] = useState(0)
    const [ y , sety] = useState(30)
    
    const [ z , setz] = useState(0)
    const [ q , setq] = useState(50)

    const [ o , seto] = useState(0)
    const [ m , setm] = useState(100)

    return(
        <section className="serv-sec">
            <h2 className="section-name">Services</h2>
            <div className="container">
                <div className="service-box">
                    <div className="service-name">Website Design</div>
                    <FaUikit />
                    <div className="service-info">the latest website design methodolgies and look</div>
                    <button onClick={()=> setx (x+1)}> +   </button>
                    <button onClick={()=> {if(x > 1){setx (x-1)} }}> -   </button>
                    <button onClick={()=> setx (x * 0)}> Reset   </button>
                    <div> Number of services : {x} </div>
                    <div> Price : {y * x}$</div>
                </div>
                <div className="service-box">
                    <div className="service-name">Website Development</div>
                    <FaReact />
                    <div className="service-info">the latest website development methodolgies and look</div>
                    <button onClick={()=> setz (z+1)}> +   </button>
                    <button onClick={()=> {if(z > 1){setz (z-1)} }}> -   </button>
                    <button onClick={()=> setz (z * 0)}> Reset   </button>
                    <div> Number of services : {z} </div>
                    <div> Price : { ( z * q  )}$</div>
                </div>
                <div className="service-box">
                    <div className="service-name">Website Adjustment</div>
                    <FaWrench />
                    <div className="service-info">fix websites bugs and errors, make some enhancement</div>
                    <button onClick={()=> seto (o+1)}> +   </button>
                    <button onClick={()=> {if(o > 1){seto (o-1)} }}> -   </button>
                    <button onClick={()=> seto (o * 0)}> Reset   </button>
                    <div> Number of services : {o} </div>
                    <div> Price : { ( o * m )}$</div>
                </div>
            </div>
        </section>
        
    );
}

export default Services;
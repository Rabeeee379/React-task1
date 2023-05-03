import {React , Component } from 'react';
import image from '../team/team1.webp'  

class T extends Component {
    
    render(){
        
         this.team = 
            [{name: "Jhon Doom" , image : "../team/team1.webp" , job : "Web Designer"},
             {name: "Will Smith" , image : "../team/team2.webp" , job : "Web Developer"},
             {name: "Sam Tom" , image : "../team/team3.webp" , job : "Software Engineer"}
            ]  
        

        return(
            <section>
                <h2 className="section-name">Team</h2>
                <div className='container'>
                 {
                    this.team.map((member)=>{
                    return <div className='memb-box'>
                              <h2>{member.name}</h2>
                              <img src={image   } alt="" />
                              <div>{member.job}</div>
                            </div>
                    })
                 }
                </div>
            </section>
            
        )    
    }
}

export default T ;
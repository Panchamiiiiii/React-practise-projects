import { useState } from "react";
function Actors(){
    let [actor, setActor]=useState(['Shraddha','Ranbir','Ahsaas']);
    const [each,setEach]=useState(
        [
            {
                id:1,
                name: 'Shraddha Kapoor',
                qual: 'Movie Actress',
                pic: 'https://www.thestatesman.com/wp-content/uploads/2024/02/shraddha-kapoor-time-travel.jpg',
                exp:'15 years of acting experience and acted in blockbuster bollywood films',
                desc:'Shraddha Kapoor is an Indian actress and singer known for her work in Hindi films. She gained major fame with the romantic film Aashiqui 2 (2013). She is praised for her versatility in romance, action, and dance films. Shraddha is the daughter of actor Shakti Kapoor.'
            },
            {
                id:2,
                name:'Ranbir Kapoor',
                qual: 'Movie Actor',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeaiUPlRLguTr_DnEXsYxpiugR9FxdFph34g&s',
                exp:'20 years acting experience starred in super hit bollywood movies',
                desc:'Ranbir Kapoor is a leading Bollywood actor known for his intense performances. He earned critical acclaim for films like Rockstar and Barfi!. He belongs to the famous Kapoor film family of India. Ranbir is married to actress Alia Bhatt.'
            },
            {
                id:3,
                name: 'Ahsaas Channa',
                qual: 'Telivision Actress',
                pic: 'https://www.thestatesman.com/wp-content/uploads/2024/10/ahsaas-channa-ahsaas-channa-films-mental-health-bollywood-jpg.webp',
                exp:'5 years of experience as a web series actress and also was a child-artist',
                desc:'Ahsaas Channa is an Indian actress known for films and web series. She began her career as a child artist in Bollywood movies. She gained popularity through web shows like Kota Factory. Ahsaas is appreciated for her natural acting style and youth-centric roles.'
            },
        ]
    )
    const rateActor = (act) => {
        actor = [act, ...actor.filter((e) => e !== act)];
        setActor(actor);
    }
return(
<>
<h1>My favourite bollywood Actors!!</h1>

{
each.map((item) =>(
<div class="container">
<div class="card">
  <img src={item.pic} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <h6 class="para-color">{item.qual}</h6>
    <p class="card-text"> {item.desc}</p>
    <a href="#" class="btn btn-primary" >Know more</a>
  </div>
</div>
</div>
))

}
<h2>Rate these actors</h2>
<table>
    <thead>
        <th>Sl.No</th>
        <th>Actor Name</th>
        <th>Rate</th>
    </thead>
    <tbody>
        {
            actor.map((act, index)=> (
                <tr>
                <td>{index+1}</td>
                <td> <b>{act}</b></td>
                <td>
                    <button className="btn btn-success" onClick={() => rateActor(act)}>Rate</button></td>
                </tr>
            ))
        }
    </tbody>
</table>
<section>
<button class="btn btn-dark">Submit your response</button>
</section>

</>
);
}
export default Actors;


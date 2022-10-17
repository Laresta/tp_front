const {createApp} = Vue

const navbar=`
<div class="">
  <a href="index.html">
  <img src="https://via.placeholder.com/150" alt="">
  </a>
</div>
<nav>
  <ul class="navbar">
    <li v-for="tab in tabs"><a :href="tab.path">{{tab.name}}</a></li>
  </ul>
</nav>
`
const app = Vue.createApp({
  data(){
    return{
    }
  }
}).component('navbar',{
  template:navbar,
  data(){
    return{
      tabs:[
        {name:'Accueil',path:'index.html'},
        {name:'Formation',path:'formation.html'},
        {name:'Equipe',path:'equipe.html'},
        {name:'Contacter-nous',path:'contact.html'},
        {name:'Connexion',path:'connect.html'},
      ]
    }
  }
}).component('cours',{
    template:`
    <div>
      <div>
        <fieldset>
          <div>
            <button :id="cour.id" :key="cour.id" v-for="cour in cours">{{cour.name}}</button>
          </div>
        </fieldset>
      </div>
      <div>
        <fieldset>
          <p v-for="cour in cours">{{cour.name}}:{{cour.desc}}</p>
        </fieldset>
      </div>
    </div>`,
    data(){
      return{
        cours:[
          {id:"1",name:"Math",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
          {id:"2",name:"Physique-chimie",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
          {id:"3",name:"Anglais",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
          {id:"4",name:"Musique",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        ]
      }
    },
    methods:{},

}).component('equipe',{
  template: `
    <div>
      <p :id="prof.id" v-for='prof in profs'>
        {{prof.name}}:{{prof.mat}}
      </p>
    </div>
  `,
  data(){
    return{
      profs:[
        {id:"1",name:"LL",mat:"Math"},
        {id:"2",name:"Cool",mat:"Physique-chimie"},
        {id:"3",name:"J",mat:"Anglais"},
        {id:"4",name:"Eminem",mat:"Musique"},
      ]
    }
  }
}).mount('body')

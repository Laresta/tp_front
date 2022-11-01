const {createApp} = Vue

const navbar=`
<nav>
  <div class="">
    <a href="index.html">
      <img src="https://via.placeholder.com/150" alt="">
    </a>
  <ul class="navbar">
  <li v-for="tab in tabs"><a :id='tab.id' class="btn" :href="tab.path">{{tab.name}}</a></li>
  </ul>
  </div>
    <div class=" burger">
      <button id="hamb"><img src="../dist/imgs/Hamburger.png" /></button>
      <div class='menu '>
      <ul>
      <li v-for="tab in tabs"><a :id='tab.id' class="btn" :href="tab.path">{{tab.name}}</a></li>
      </ul>
      </div>

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
        {id:'1',name:'Accueil',path:'index.html'},
        {id:'2',name:'Formation',path:'formation.html'},
        {id:'3',name:'Equipe',path:'equipe.html'},
        {id:'4',name:'Contacter-nous',path:'contact.html'},
        {id:'5',name:'Connexion',path:'connect.html'},
      ]
    }
  }
}).component('cours',{
    template:`
    <div>
      <div>
        <div class="border border-info">
          <div class="matieres" v-for="cour in cours">
            <button class="btn btn-danger" :id="cour.id" :key="cour.id" >{{cour.name}}</button>
          </div>
        </div>
      </div>
      <div class="desc">
        <div class="border border-info">
          <p class="descs" :key="cour.id" :id="cour.id" v-for="cour in cours">
          <h3>{{cour.name}}:</h3>{{cour.desc}}</p>
        </div>
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
    <div class="profs">
      <p :id="prof.id" v-for='prof in profs'>
        <img class="imgProfs" :src="prof.img">
        <h3>{{prof.name}}:</h3>
        <a class='btn clique btn-danger' href="formation.html">{{prof.mat}}</a>
      </p>
    </div>
  `,
  data(){
    return{
      profs:[
        {id:"1",name:"Logic",mat:"Math",img:"../dist/imgs/logic.jpg"},
        {id:"2",name:"Asap Rocky",mat:"Physique-chimie",img:"../dist/imgs/asap-rocky.jpg"},
        {id:"3",name:"J Cole",mat:"Anglais",img:"../dist/imgs/j-cole.jpg"},
        {id:"4",name:"Eminem",mat:"Musique",img:"../dist/imgs/eminem.jpg"},
      ]
    }
  }
}).component('foot',{
  template:`
    <footer class='bg-info mt-auto d-flex justify-content-around'>
      <p>Pozdnyakov, Duarte 2022</p>
      <div>
        <a v-for="a in as" :href="a.path"><img :src="a.src"></a>
      </div>
    </footer>
  `,
  data(){
    return{
      as:[
        {path:'#',src:'../dist/imgs/facebook.svg'},
        {path:'#',src:'../dist/imgs/instagram.svg'},
        {path:'#',src:'../dist/imgs/twitter.svg'},
        {path:'#',src:'../dist/imgs/youtube.svg'},
      ],
    }
  }
}).mount('body')

function showMatProf(){
  let id
  $('.clique').each(function(){
    $('.clique').click(function(){
      event.preventDefault();
      console.log()
    })
    $(document).ready(function(){
      console.log(id);
    })
  }
  )

}

function showMat() {
  $('.matieres button').click(function(){
    $('.descs').removeClass('activeMat')
    let id = $(this).attr('id')
    $('.desc').show()
    $('.descs').eq(id-1).toggleClass('activeMat')
  })
}
function hamb(){
  $('#hamb').click(function(){
    $('.menu').toggleClass('menuActive')
  })
}
$(document).ready(function(){
  showMat()
  hamb()
  showMatProf()
  $('.navbar li').last().children().addClass('btn bg-warning')
  $('.burger li').last().children().addClass('btn bg-warning')
})

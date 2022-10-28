const CategoriaComponentHijo = {
    name:"CategoriaComponentHijo",
    props:{
        titulo:{type: String},
        imagen:{type: String},
        altimagen:{type: String},
        sonido:{type:String}
    },
    template:
    `
    <div class="cell">
        <b>{{titulo}}</b><br>
        <p><img class="headerimg" :src="imagen" :alt="altimagen" @click="showControls"><br></p>
        <audio :controls="controls" class="player">
            <source :src="sonido">
        Tu navegador no puede reproducir este archivo
        </audio>
    </div>
    `,
    data(){
        return{
            controls: false
        }
    },
    methods:{
        showControls(){
            this.controls = !this.controls;
        }
    }
}


const CategoriaComponent = {
    name:'CategoriaComponent',
    components:{
        CategoriaComponentHijo
    },
    props:{
        datosCategoria:{
            type: Object
        }
    },
    template:
    `
    <div class="item" :class="datosCategoria.claseCategoria">
        <b>{{datosCategoria.tituloCategoria}}</b>
        <p><img class="headerimg" :src="datosCategoria.imagenCategoria"></p>
        <CategoriaComponentHijo v-for="componenteHijo in datosCategoria.hijos" :titulo="componenteHijo.titulo" :imagen="componenteHijo.imagen" :altimagen="componenteHijo.altimagen" :sonido="componenteHijo.sonido"></CategoriaComponentHijo>
    </div>
    `
}



//Instancia de aplicacion
const app = Vue.createApp({
    data(){
        return{
            categorias:[
                {
                    tituloCategoria:"Bass",
                    imagenCategoria:"image/bass.png",
                    claseCategoria: "bass",
                    hijos:[
                        {
                            titulo:"Dusty Bass",
                            imagen:"image/DustyBass.jpg",
                            altimagen:"Dusty Bass"},
                        {
                            titulo:"Kiss Bass",
                            imagen:"image/KissBass.jpg",
                            altimagen:"Kiss Bass"},
                        {
                            titulo:"Power Bass",
                            imagen:"image/powerBass.jpg",
                            altimagen:"Power Bass"},
                        {
                            titulo:"Sub Bass",
                            imagen:"image/SubBass.jpg",
                            altimagen:"Sub Bass"
                        }
                    ]
                },
                {
                    tituloCategoria:"Brass",
                    imagenCategoria:"image/brass.png",
                    claseCategoria: "brass",
                    hijos:[
                        {
                            titulo:"Guitar & Brass",
                            imagen:"image/guitar_brass.jpg",
                            altimagen:"guitar and brass"},
                        {
                            titulo:"Hor Trumpet Sax",
                            imagen:"image/Vivid.jpg",
                            altimagen:"Vivid"},
                        {
                            titulo:"Sax",
                            imagen:"image/SaxUrban.jpg",
                            altimagen:"Image of a sax"},
                        {
                            titulo:"Better Brass",
                            imagen:"image/BetterBrass.jpg",
                            altimagen:"Better Brass"
                        }
                    ]
                }
                ,
                {
                    tituloCategoria:"Strings",
                    imagenCategoria:"image/strings.png",
                    claseCategoria: "strings",
                    hijos:[
                        {
                            titulo:"Voodoo Strings",
                            imagen:"image/voodoo.jpg",
                            altimagen:"Voodoo",
                            sonido: "sounds/HardRock.wav"
                        },
                        {
                            titulo:"Cello Moods",
                            imagen:"image/CelloMoods.jpg",
                            altimagen:"Cello image"
                        },
                        {
                            titulo:"Drill Strings",
                            imagen:"image/Drill.jpg",
                            altimagen:"Drill Strings"},
                        {
                            titulo:"Hall Violins",
                            imagen:"image/HallViolins.jpg",
                            altimagen:"Violins"
                        }
                    ]
                },
                {
                    tituloCategoria:"Guitar",
                    imagenCategoria:"image/guitar.png",
                    claseCategoria: "guitar",
                    hijos:[
                        {
                            titulo:"Guitar Got Soul 2",
                            imagen:"image/guitargotsoul.jpg",
                            altimagen:"guitar got soul 2"
                        },
                        {
                            titulo:"Guitar Vibes",
                            imagen:"image/guitarVibes.jpg",
                            altimagen:"Guitar Vibes"
                        },
                        {
                            titulo:"Smooth Guitar",
                            imagen:"image/SmoothGuitar.jpg",
                            altimagen:"Smooth Guitar"
                        },
                        {
                            titulo:"Grammy Guitarz",
                            imagen:"image/grammyguitarz.jpg",
                            altimagen:"Grammy Guitarz"
                        }
                    ]
                },
                {
                    tituloCategoria:"Piano",
                    imagenCategoria:"image/piano.png",
                    claseCategoria: "piano",
                    hijos:[
                    ]
                },
                {
                    tituloCategoria:"Sounds FX",
                    imagenCategoria:"image/sound_fx.png",
                    claseCategoria: "sound_fx",
                    hijos:[
                    ]
                }

            ]
        }
    },
    components:{
        CategoriaComponent,
    }
    // },
    // template:
    // `
    // <CategoriaComponent v-for="categoria in categorias" :datosCategoria="categoria"></CategoriaComponent>
    // `
})
app.mount('#appSounds')
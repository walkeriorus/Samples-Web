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
        <p><img class="headerimg" :src="datosCategoria.imagenCategoria" ></p>
        <CategoriaComponentHijo v-for="componenteHijo in datosCategoria.hijos" :titulo="componenteHijo.titulo" :imagen="componenteHijo.imagen" :altimagen="componenteHijo.altimagen" :title="componenteHijo.title" : sonido="componenteHijo.sonido"></CategoriaComponentHijo>
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
                            altimagen:"Dusty Bass",
                            title:"If you're looking for that worn out, vintage vinyl sound, look no further. Dusty Bass Elements comes packed with expertly recorded and processed bass sounds drawing influence from the golden era, east-coast scene, underground hip-hop."},
                        {
                            titulo:"Kiss Bass",
                            imagen:"image/KissBass.jpg",
                            altimagen:"Kiss Bass",
                            title:"This release features funky bass inspired by Doja Cat's 'Kiss Me More'. These licks fit the chord progression Bbm Eb7 Ab Db at 112BPM. You can also transpose or change the tempo of these samples in your daw! Check out my Instagram @cjrhenmusic and my website cjrhenmusic.com for collabs. Also catch my livestreams at twitch.tv/cjrhenmusic to learn my process, hear great music, and talk about writing and production!"},
                        {
                            titulo:"Power Bass",
                            imagen:"image/powerBass.jpg",
                            altimagen:"Power Bass",
                            title:"BFractal Music present ¨Power Bass¨. 34 Bass loops focused on bass, but made for a multitude of genres, ranging from Synthwave, Future Bass, Future Pop, Bass House to Complextro, to Funk, to Dubstep and everything in between! Carefully crafted by our team, this will give you top-quality subs and get some of the biggest and baddest bass lines around! Don’t forget that all sounds are 100% royalty free and you can use these in your own tracks and release on labels, use for commercials, youtube, TV, radio and more!"},
                            
                        {
                            titulo:"Sub Bass",
                            imagen:"image/SubBass.jpg",
                            altimagen:"Sub Bass",
                            title:"BFractal Music brings you a massive collection of 808 Subsonic sounds ready to drag and drop in your next banger. Expertly created, recorded, Eq'd and processed by professionals. Our team has sampled a massive amount of sound sources like the iconic Roland TR-808 drum machine and few great analog & digital hardware synths, tuned and mixed it to perfection. We have created the ultimate 808 library with 30 x 808 one hits in each of the 12 keys across the keyboard, that means 360 one shots samples. So whatever key your track is just browse the folder and find the perfect 808 for your track. All loops and one shots come bpm and key-labelled where necessary and are recorded as 24bit Hi-quality WAV. Don’t forget that all samples are 100% royalty free and you can use these in your own tracks and release on labels, use for commercials, youtube, TV, radio and more!"
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
                            altimagen:"guitar and brass",
                            title:"BigEDM is stripping down and giving you 5 construction kits full of all the nuts and bolts you need to create Guitar & Brass House your listeners will swear you hired a full orchestra. Whether you are a beginner, intermediate, or seasoned pro this is the must-have resource for seeing all the elements at work. BigEDM is unstoppable when it comes to creating the best of best and these professional sound designers aren’t afraid to unlock the secrets behind their success. Big EDM is giving you the clean and crisp guitar tone that guitarist’s dream of, alongside tight orchestral stabs as precise as the Philharmonic, and horns so unbelievably realistic you'd swear you were conducting them right in front of you. No need to search through endless libraries to find that perfect drum or percussive sound to accompany your polished instrument sound, you will find all you need inside. Professional quality audio, structure, innovation, and experience."},
                        {
                            titulo:"Hor Trumpet Sax",
                            imagen:"image/Vivid.jpg",
                            altimagen:"Vivid",
                            title:"This release features trumpet, tenor sax, and horn section stabs. All licks fit over the chord progression Em D C and B7. Check out my Instagram @cjrhenmusic and my website cjrhenmusic.com for collabs."},
                        {
                            titulo:"Sax",
                            imagen:"image/SaxUrban.jpg",
                            altimagen:"Image of a sax",
                            title:"Sax Urban Vibes 4' from BIG CITI LOOPS is here with its fourth installment of this incredible Sax motivated sample pack. The styles include Urban, Hip Hop, RnB & Jazz. This Kit includes four Construction Kits are one of the most incredible saxophone vibes you will ever hear from Big Citi Loops."},

                        {
                            titulo:"Better Brass",
                            imagen:"image/BetterBrass.jpg",
                            altimagen:"Better Brass",
                            title:"This release features a tight brass section suited for hip hop, beats, and pop music. In the pack you will find laid back grooves and screaming trumpet performed professionally. All the samples are based in C minor at 120BPM or as one shots."
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
                            sonido: "sounds/HardRock.wav",
                            title:"It's time to add a little bit of spice, lo-fi saturation and a touch of evil to your Cinematic x Hip Hop x Trap beats: This is Voodoo Strings! This is the start of a new series we are bringing to the producer community to enhance their projects as well as their beats! This collection of string loops was heavily processed using lo-fi saturation, pitch shifting manipulation, ambient reverb halls and delay's, distortion enhancements, eq, compression and a touch of sweet voodoo love from the underworld to give each individual string loop a touch of depth, character and a whole lotta darkness! All samples come recorded in 24-bit 44 khz and all samples come Royalty Free for all your Commercial Use Needs! Here's What You Get Inside: 50 Total Files / 147 MB of Content 50 String Loops Perfect for Cinematic x Hip Hop x Trap x Future Bass 24-bit 44 khz Audio Quality Royalty Free Samples Instant Download After Purchase"
                        },
                        {
                            titulo:"Cello Moods",
                            imagen:"image/CelloMoods.jpg",
                            altimagen:"Cello image",
                            title:"A selection of cello ensemble loops with an orchestral, world music vibe."
                        },
                        {
                            titulo:"Drill Strings",
                            imagen:"image/Drill.jpg",
                            altimagen:"Drill Strings",
                            title:"Samples Choice presents Drill Strings The pack contains 159 samples with 21melodies kits. Inside the pack, you’ll find amazing drill melodies with strings, legato, staccato, pizzicato, cellos, harp, sad and dark piano, plucks, and many more. As usual, you have the whole melody layered and the single instruments for full control to build more and more melodies. Then, we have added some new 808 basses and from our collections. A great collection inspired by Po Smoke, Migos, Dutchvelli, Hargo, Unknow T, Bandokay & Double Lz, AXL Beats, TeeZandos, and many more. Pack details: 159 x wav 44.1 khz 24-bit All files are royalty-free and ready to work on all major music software. Please Note: the drum Loops are not inside the pack Other genres that this package may be useful in: Lo-fi Hip Hop Bass Music"},
                        {
                            titulo:"Hall Violins",
                            imagen:"image/HallViolins.jpg",
                            altimagen:"Violins",
                            title:"'Hall Violins' brings you 17 Violin Sounds that are filled with inspiring melodies."
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
                            altimagen:"guitar got soul 2",
                            title:"'Guitar Got Sou 2' Legendary Music brings you 10 Construction Kits with Live Guitar Soul Instrumentals!"
                        },
                        {
                            titulo:"Guitar Vibes",
                            imagen:"image/guitarVibes.jpg",
                            altimagen:"Guitar Vibes",
                            title:"Ready to get inspired? With Guitar vibez, you'll have all the inspiration you need to create killer tracks. This 40-pack of guitar progressions is perfect for giving your music that vibe it needs to stand out from the crowd. With both wet & dry variants, we give you all the flavor you need to get inspired in seconds. Plus, our loops have been perfectly recorded so you can focus on what's really important - creating some serious vibes. Contents 40x Wet Guitar Loops 40x Dry Guitar Loops"
                        },
                        {
                            titulo:"Smooth Guitar",
                            imagen:"image/SmoothGuitar.jpg",
                            altimagen:"Smooth Guitar",
                            title:"Ready to get inspired? With Guitar vibez, you'll have all the inspiration you need to create killer tracks. This 40-pack of guitar progressions is perfect for giving your music that vibe it needs to stand out from the crowd. With both wet & dry variants, we give you all the flavor you need to get inspired in seconds. Plus, our loops have been perfectly recorded so you can focus on what's really important - creating some serious vibes. Contents 40x Wet Guitar Loops 40x Dry Guitar Loops"
                        },
                        {
                            titulo:"Grammy Guitarz",
                            imagen:"image/grammyguitarz.jpg",
                            altimagen:"Grammy Guitarz",
                            title:"'Grammy Guitarz' Includes 41 Samples, Five Construction kits with live Guitar Chords and live guitar instrumentation."
                        }
                    ]
                },
                {
                    tituloCategoria:"Piano",
                    imagenCategoria:"image/piano.png",
                    claseCategoria: "piano",
                    hijos:[
                        {
                            titulo:"Journey To The Center Of The Earth",
                            imagen:"image/journey.jpg",
                            altimagen:"Wakeman1",
                            title:"The concert was recorded on 16 track tape and basically there was spillage onto all the tracks from everything. The Battle suffered the most as some terrible wrong notes, bad playing and a horrendous buzz made quite a substantial section completely unusable. It was not possible to re-record either and match sounds and so a chunk of the piece was copied and used twice, hence for the astute listener, there is a verse section of completely wrong lyrics."
                        },
                        {
                            titulo:"The Private Collection",
                            imagen:"image/privat.jpg",
                            altimagen:"Wakeman2",
                            title:"This is a strange collection of oddball stuff that I found in my studio and just didn't have the heart to throw away. There is nothing great on there but on the other hand it makes for interesting listening if you're an anorak for this kind of thing."
                        },
                        {
                            titulo:"Ese amigo del alma",
                            imagen:"image/ese_amigo.jpg",
                            altimagen:"Vitale1",
                            title:"Ese Amigo Del Alma song from the album Desde Casa is released on Feb 2006. The duration of song is 03:50. This song is sung by Lito Vitale."
                        },
                        {
                            titulo:"Klaviersonaten",
                            imagen:"image/Schubert.jpg",
                            altimagen:"Schubert1",
                            title:"u tuvo por maestro al pianista alemán Martin Krause —a la vez alumno de Franz Liszt—, quien dijo: «Este niño ha de ser mi obra maestra».4​5​ De este modo, la estirpe pianística de Arrau es, por demás, ilustre: Beethoven, Czerny, Liszt, Krause, Arrau. También proviene de la estirpe de Mozart, quien fue el profesor de Johann Nepomuk Hummel, que a su vez fue otro de los profesores de Czerny junto a Muzio Clementi."
                        }
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
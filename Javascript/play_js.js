const music = new Audio('Songs/1.mp3');
// music.play();


const songs = [
    {
        id: '1',
        songName: ` Night Changes <br>
        <div class="subtitle">One Direction</div>`,
        poster: "i/1.jfif"
    },
    {
        id: '2',
        songName: ` Qaafirana <br>
        <div class="subtitle"> Arijit Singh & Nikhita Gandhi</div>`,
        poster: "i/2.jfif"
    },

    {
        id: "3",
        songName: `Pasoori<br><div class="subtitle"> Shae Gill</div>`,
        poster: "i/3.jfif",
    },
    {
        id: "4",
        songName: `As It Was <br><div class="subtitle">Harry Sytles</div>`,
        poster: "i/4.jfif",
    },
    {
        id: "5",
        songName: ` Memories <br><div class="subtitle">Maroon 5</div>`,
        poster: "i/5.jfif",
    },
    {
        id: "6",
        songName: `Dandelions <br><div class="subtitle">Ruth B</div>`,
        poster: "i/6.jfif",
    },
    {
        id: "7",
        songName: ` Sooraj dooba hai <br><div class="subtitle">Arijit Singh</div>`,
        poster: "i/7.jfif",
    },
    {
        id: "8",
        songName: ` Lovely <br><div class="subtitle">Billy Ellish</div>`,
        poster: "i/8.jfif",
    },
    {
        id: "9",
        songName: ` Worlds Smallest Violin <br><div class="subtitle">AJR</div>`,
        poster: "i/9.jfif",
    },
    {
        id: "10",
        songName: `Tu Chahiye <br><div class="subtitle">Atif Aslam</div>`,
        poster: "i/10.jfif",
    },
    {
        id: "11",
        songName: `Chaar Kadam <br><div class="subtitle"> Shaan and Shreya Ghosha</div>`,
        poster: "i/11.jfif",
    },
    {
        id: "12",
        songName: `Aahatein <br><div class="subtitle">Amit Trivedi</div>`,
        poster: "i/12.jfif",
    },
    {
        id: "13",
        songName: `London Thumakda<br><div class="subtitle">Labh Janjua & Neha Kakkar</div>`,
        poster: "i/13.jfif",
    },
    {
        id: "14",
        songName: `I will miss you<br><div class="subtitle">Kushal Chokshi</div>`,
        poster: "i/14.jfif",
    },
    {
        id: "15",
        songName: `Nachdi Phira <br><div class="subtitle">Meghna Mishra </div>`,
        poster: "i/15.jfif",
    },
    {
        id: "16",
        songName: `Sunn Raha Hai <br><div class="subtitle">Ankit Tiwari </div>`,
        poster: "i/16.jfif",
    },
    {
        id: "17",
        songName: `Kare Gaye Chull <br><div class="subtitle">Badshah & Amit Trivedi </div>`,
        poster: "i/17.jfif",
    },
    {
        id: "18",
        songName: `Aa Jao Na <br><div class="subtitle">Arjit Singh </div>`,
        poster: "i/18.jfif",
    },
    {
        id: "19",
        songName: `Chogada <br><div class="subtitle">Darshan Raval </div>`,
        poster: "i/19.jfif",
    },
    {
        id: "20",
        songName: `Faded<br><div class="subtitle">Alan Walker </div>`,
        poster: "i/20.jfif",
    },
    {
        id: "21",
        songName: `Tum Hi Ho Bandhu<br><div class="subtitle">Pritam </div>`,
        poster: "i/21.jfif",
    },
    {
        id: "22",
        songName: `Naina <br><div class="subtitle">Amaal Malik </div>`,
        poster: "i/22.jfif",
    },
    {
        id: "23",
        songName: `The Nights <br><div class="subtitle">Avicii </div>`,
        poster: "i/23.jfif",
    },
    {
        id: "24",
        songName: `Love You Zindagi <br><div class="subtitle">Amit Trivedi & Jasleen Royal</div>`,
        poster: "i/24.jfif",
    },
    {
        id: "25",
        songName: `Kho Gaye Hum Kaha <br><div class="subtitle">Jasleen Royal & Prateek Khuda </div>`,
        poster: "i/25.jfif",
    },
    {
        id: "26",
        songName: `Agar Tum Saath Ho <br><div class="subtitle">Arjit Singh </div>`,
        poster: "i/26.jfif",
    },
    {
        id: "27",
        songName: `Runaway <br><div class="subtitle">Aurora </div>`,
        poster: "i/27.jfif",
    },
    {
        id: "28",
        songName: `Zinda Hu Yaar<br><div class="subtitle">Amit Trivedi </div>`,
        poster: "i/28.jfif",
    },
    {
        id: "29",
        songName: `Humsafar <br><div class="subtitle">Akhil Sachdeva </div>`,
        poster: "i/29.jfif",
    },
    {
        id: "30",
        songName: `On My Way <br><div class="subtitle">Alan Walker </div>`,
        poster: "i/30.jfif",
    },
    {
        id: "31",
        songName: `Give Me Some Sunshine <br><div class="subtitle">Suraj Jagan & Sharman Joshi </div>`,
        poster: "i/31.jfif",
    },
]

Array.from(document.getElementsByClassName('gridtry')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src= songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML= songs[i].songName;
})


// variable for storing the songs that were played 
var songHistory=""

var count = 0;

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
       
            document.getElementById("title").innerHTML = `${songs[index - 1].songName}<br>
                <div class="subtitle" id="songDescription"></div>`
            document.getElementById("Image").innerHTML = `<img  src="i/${index}.jfif" alt="TRY">`
       
            songHistory+=`
            <div class="playtry">
            <div class="img_play">
                <img src="i/${index}.jfif" alt="Img">
                <i class="bi playListPlay bi-play-circle-fill" id="${index}"></i>
            </div>
            <div class="songdetails">
                <h5>${songs[index - 1].songName}</h5>
            </div>
            </div>`
            document.getElementById("history").innerHTML=songHistory;

    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
})


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
        element.classList.add('bi-play-circle-fill');
        element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () => {
    Array.from(document.getElementsByClassName('playtry')).forEach((element) => {
        element.style.background = "rgb(105, 105, 170, .0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `Songs/${index}.mp3`;
        poster_master_play.src = `i/${index}.jfif`;
        music.play();
        let song_title = songs.filter((ele) => {
            return ele.id == index;
        })

        song_title.forEach(ele => {
            let { songName } = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended', () => {
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('playtry'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur / 60);
    let sec = Math.floor(music_dur % 60);
    if (sec < 10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr / 60);
    let sec1 = Math.floor(music_curr % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime / music.duration) * 100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
})

music.addEventListener('ended', () => {
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

// Function for playing the song next and previous song
back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('playtry')).length;
    }
    music.src = `Songs/${index}.mp3`;
    poster_master_play.src = `i/${index}.jfif`;
    music.play();
    let song_title = songs.filter((ele) => {
        return ele.id == index;
    })

    song_title.forEach(ele => {
        let { songName } = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('playtry'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)";

})
next.addEventListener('click', () => {
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('playtry')).length) {
        index = 1;
    }
    music.src = `Songs/${index}.mp3`;
    poster_master_play.src = `i/${index}.jfif`;
    music.play();
    let song_title = songs.filter((ele) => {
        return ele.id == index;
    })

    song_title.forEach(ele => {
        let { songName } = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('playtry'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)";

})
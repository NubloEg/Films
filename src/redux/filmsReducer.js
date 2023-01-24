const PLUS_CURRENT_FILM="PLUS_CURRENT_FILM";
const SET_CURRENT_PAGE="SET_CURRENT_PAGE";


let initialState={
    films:[
        {id:1,image:'https://fast-anime.ru/storage/uploads/products/27344/2021/08/04/rRyUoychSmIVvrNeIbsTVllQnXaDVGM4A6puTgzD.jpeg',title:'Naruto',description:'Все начинается с того, что наставник из академии синобы, Хатакэ отправляет Наруто, Саскэ и Сакуру в кино на фильм о Принцессе Фуун, с участием одной юной и прекрасной актрисы, Фудзиказе Юки. Наруто, в силу того, что он молодой и свободный парень, сразу очаровывается этой юной красоткой. Но прекрасная Юки оказывается полной противоположностью своему персонажу, к великому разочарованию Наруто. Но оказывается, наставник не просто так отправил учеников на уикенд.',
            actors:[{name:"Наруто",icon:"https://upload.wikimedia.org/wikipedia/ru/e/e2/Naruto_Sage_mode.jpg"},{name:"Саске",icon:"https://wiki.jcdn.ru/w/images/thumb/a/af/SasukeManga.jpg/250px-SasukeManga.jpg"},{name:"Сакура",icon:"https://pbs.twimg.com/media/Et2B2BNXcAEQ5oP.jpg"}],
            gallery:[{img:"https://i.pinimg.com/564x/db/ef/9c/dbef9c1c9679d8dba599a21ffdf6fdaa.jpg"},
            {img:"https://i.pinimg.com/736x/e5/34/5e/e5345e4a46e914a77cdc3c77ff32f79d.jpg"},
            {img:"https://i.pinimg.com/564x/6a/58/49/6a5849f7e42dcb4f29f1f41f6c5657fb.jpg"}],
            info:"Озвучка и субтитры от: SHIZA Project, AniDUB, Lebaka, Люб. Многоголосый, Люб. Одноголосый, Inari Studio Жанр: ДрамаИсторическийКомедияПриключенияСверхъестественное",backgroundColor:"#FAF232"
        },
        {id:2,image:'https://i.pinimg.com/originals/2f/c1/d6/2fc1d635f935d0b003a4df98e59438f5.jpg',title:'Deadpool',description:'Единственный и неповторимый болтливый наемник — вернулся! Ещё более масштабный, ещё более разрушительный и даже ещё более голозадый, чем прежде! Когда в его жизнь врывается суперсолдат с убийственной миссией, Дэдпул вынужден задуматься о дружбе, семье и о том, что на самом деле значит быть героем, попутно надирая 50 оттенков задниц. Потому что иногда чтобы делать хорошие вещи, нужно использовать грязные приёмчики.',
        actors:[{name:"Райан",icon:"https://s5.vcdn.biz/static/f/2312200661/image.jpg"},
            {name:"Джош",icon:"https://resizer.mail.ru/p/a9430fe2-ff99-5941-be56-17f48bb8c4d3/AAACapb0LOew-fY_TIo4OUC4tJUpw1eiYQ9LkcjxdlTMVglqHoTwoMhQ_BJMvpxGsH14mFFLS-X0MvAyRAktRYJ4p6Q.jpg"},
            {name:"Зази",icon:"https://img.kupigolos.ru/hero/5d9666cc6e76a.jpg?p=bh&s=e1b42ab4b604b00cd90350bc65af9c60"}],
            gallery:[{img:"https://i.pinimg.com/564x/a1/f6/e6/a1f6e6db33904fc67f3267c68830b504.jpg"}
            ,{img:"https://i.pinimg.com/736x/7a/0f/f1/7a0ff1a9e3609eb94122cc2f68d098de.jpg"},
            {img:"https://i.pinimg.com/564x/bc/c1/57/bcc157a2231b1277ebe51392e7130aba.jpg"}],
            info:"Дата премьеры: 17 мая 2018 г.Россия Режиссер: Дэвид Литч Бюджет: 110 миллионов USD Кассовый сбор: 785,8 миллиона USD Сценарий: Райан Рейнольдс, Дэвид Литч, Ретт Риз, Пол Верник Автор сценария: Ретт Риз; Пол Верник; Райан Рейнольдс",
            backgroundColor:"#BC1212"
        },
        {id:3,image:'https://img.championat.com/s/1350x900/news/big/t/u/vse-spojlery-matrica-4-voskreshenie_1639657653255165739.jpg',title:'Matrix',description:'Жизнь Томаса Андерсона разделена на две части: днём он — самый обычный офисный работник, получающий нагоняи от начальства, а ночью превращается в хакера по имени Нео, и нет места в сети, куда он бы не смог проникнуть. Но однажды всё меняется. Томас узнаёт ужасающую правду о реальности.',
        actors:[{name:"Киану",icon:"https://i.pinimg.com/564x/47/7c/25/477c253cff97c86df28e745f6034949b.jpg"},
        {name:"Лоренс",icon:"https://i.pinimg.com/564x/3d/6c/b6/3d6cb6c65ea8acec86244ae8ccece885.jpg"},
        {name:"Кэрри",icon:"https://i.pinimg.com/564x/ab/36/46/ab36468c28a9a835c592f7b1c8465e23.jpg"}],
            gallery:[{img:"https://i.pinimg.com/564x/bb/4b/82/bb4b827d44777e62ca2210a585992fd2.jpg"},
            {img:"https://i.pinimg.com/564x/0f/61/ca/0f61cad9da7071c963afd42ed4035b5d.jpg"},
            {img:"https://i.pinimg.com/564x/57/81/b8/5781b84a679b3a8babc367ccf57e506c.jpg"}],
            info:"Дата премьеры: 17 мая 2018 г.Россия Режиссер: Дэвид Литч Бюджет: 110 миллионов USD Кассовый сбор: 785,8 миллиона USD Сценарий: Райан Рейнольдс, Дэвид Литч, Ретт Риз, Пол Верник Автор сценария: Ретт Риз; Пол Верник; Райан Рейнольдс",
            backgroundColor:"#00B060"
        },
        {id:4,image:'https://culturedvultures.com/wp-content/uploads/2022/11/image_2022-11-01_112512251-785x482.jpg',title:'Solo level',description:'10 лет назад, после того как распахнулись Врата, связавшие наш мир с миром монстров, некоторые люди приобрели способности, позволяющие им охотиться на монстров внутри Врат. Их стали именовать Охотниками. Однако не все Охотники были сильны. Моё имя — Сун Джин-У, я охотник ранга Е.Мне приходится рисковать своей жизнью в самых низкоуровневых подземельях. Не имея необходимых навыков, я едва мог зарабатывать деньги, сражаясь со слабейшими монстрами...',
        actors:[{name:"Сун Джин-У",icon:"https://i.pinimg.com/564x/93/0b/0b/930b0b234c04428df66616dd2bc2a2d8.jpg"},
        {name:"Чиа",icon:"https://i.pinimg.com/564x/ac/a1/db/aca1db8aa184d06f8eea39a7e285f85e.jpg"},
        {name:"Жук",icon:"https://i.pinimg.com/564x/69/9c/02/699c027a1f07944372aa67163ada055c.jpg"}],
        gallery:[{img:"https://i.pinimg.com/originals/48/cd/41/48cd412fb296f35ebe9d45f0177161f7.jpg"},
        {img:"https://i.pinimg.com/originals/7b/66/88/7b6688b506657bf54abe653e94fd7316.jpg"},
        {img:"https://i.pinimg.com/originals/99/0d/0a/990d0ac856b0b910fef831c9f8539e72.jpg"}],
        info:"Дата премьеры: 17 мая 2018 г.Россия Режиссер: Дэвид Литч Бюджет: 110 миллионов USD Кассовый сбор: 785,8 миллиона USD Сценарий: Райан Рейнольдс, Дэвид Литч, Ретт Риз, Пол Верник Автор сценария: Ретт Риз; Пол Верник; Райан Рейнольдс",
        backgroundColor:"#06266F"
    }
    ],

    currentPage:1,
    currentFilmsId:0,
    
}


const filmsReducer = (state=initialState,action)=>{

    switch (action.type) {

        case SET_CURRENT_PAGE:{

            return {   ...state,
                currentPage:action.currentPage

            }

        }
        case PLUS_CURRENT_FILM:{
            console.log(1)
            return {   ...state,
                currentFilmsId:action.currentFilm

            }

        }
        default:
            return state;

    }
}


export const setCurrentPage=(currentPage)=>({type: SET_CURRENT_PAGE,currentPage})
export const plusCurrentFilm=(currentFilm)=>({type: PLUS_CURRENT_FILM,currentFilm})

export default filmsReducer;
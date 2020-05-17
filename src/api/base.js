/**
 * 接口域名的管理
 */
// const baseUrl ="http://localhost:8090";
const base = {
    music:{
        getSongList: 'https://api.mlwei.com/music/api/wy/?key=523077333&cache=0&type=songlist&id=2520942859',
        // getLyric :'/Comment/getLyric'
        getLyric :'https://api.imjad.cn/cloudmusic/?type=lyric'
    },
    comments:{
        getComments:"/comments/getComments"
    }


};

export default base;


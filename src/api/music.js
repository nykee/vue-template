/**
 * music模块接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from '../http/http'; // 导入http中创建的axios实例

const music = {
    // 歌曲列表
    getSongList () {
        return axios.get(`${base.music.getSongList}`);
    },

};

export default music;
/**
 * comments模块接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from '../http/http'; // 导入http中创建的axios实例

const comments = {
    // 获取评论
    getComments () {
        return axios.get(`${base.comments.getComments}`);
    },

};

export default comments;
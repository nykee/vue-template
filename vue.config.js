
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');//加速打包插件

const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
module.exports= {

    //关闭生成map文件
    productionSourceMap: false,
    configureWebpack: (config) => {
        /*生产环境去掉console.log*/
        if(IS_PROD){
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
        }

        config.plugins.push(
            new HardSourceWebpackPlugin()
        );
    },
    devServer : {
        port: 8081, // 端口
        open: true, // 自动开启浏览器
        compress: false, // 开启压缩
        overlay: {
            warnings: true,
            errors: true
        },
        proxy:"http://localhost:8090"

    }

};


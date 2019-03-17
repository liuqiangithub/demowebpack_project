//webpack核心配置文件webpack.config.js, 服务器端文件, 运行时依赖
module.exports={
    // mode:'development',              //开发模式
    mode:'production',                  //产品模式
    entry:'./src/js/index.js',          //入口
    output:{                            //输出,官网首页有个例子格式
        path: __dirname+'/build/',      //当前目录下绝对路径
        filename: 'app.js'
    },
    
    module:{                             //指定非js文件模块的打包规则(css/img)
        rules:[
            {                            //测试是否满足规则, 如果满足使用指定加载器
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(jpg|png|gis)$/,
                use:['url-loader']
            }
        ]
    }
}
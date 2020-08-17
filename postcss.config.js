module.exports = {
    // postCss更新后，这种写法编译时会报警告
    // plugins: {
    //     autoprefixer: {
    //         browsers: ['Android >= 4.0', 'iOS >= 8'],
    //     },
    //     'postcss-pxtorem': {
    //         rootValue: 75,
    //         propList: ['*'],
    //     },
    // },
    plugins: [
        require('postcss-pxtorem')({
            rootValue: 37.5, // 换算的基数
            propList: ['*'],
        }),
        require('autoprefixer')({overrideBrowserslist: ['Android >= 4.0', 'iOS >= 8']}) // 自动添加css前缀
    ]
};
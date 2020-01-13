export default function ({ $axios, redirect }) {

    // 请求前需要做的一些事情
    $axios.onRequest(config => {
    })

    // 请求返回时处理
    $axios.onResponse(res => {
        // console.log(res)
    })

    // 返回后的一些错误信息处理
    $axios.onError(error => {
        // console.log(error)
    })
}
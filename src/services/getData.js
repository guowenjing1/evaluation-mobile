import { get, post } from "@/services/ajax";

// //获取程序配置
// export function getConfig() {
//     return get("static/config.json", null, { baseURL: "./" });
// }
//
// // 查找货物已占用位置
// export function queryGoodsLabel(params) {
//     return get("/goods/queryGoodsLabel", params);
// }
//
// // 更换货物已占用位置
// export function switchLabel(params) {
//     return post("/goods/switchLabel", params);
// }
// }
// 继续测评
export function continueEvaluation(params){
    return post("/evaluation_system/evaluation/continueEvaluation",params)
}
// 获取测评状态
export function evaluationStatus(params){
    return get("/evaluation_system/evaluation/evaluationStatus",params)
}
// 获取所有测评试卷信息
export function queryAllPapers(params){
    return get("/evaluation_system/evaluation/queryAllPapers",params)
}
// 题目查询
export function queryQuestion(params){
    return get("/evaluation_system/evaluation/queryQuestion",params)
}
// 获取测评回答详情
export function questionAnswerDetail(params){
    return get("/evaluation_system/evaluation/questionAnswerDetail",params)
}
// 重新开始测评
export function restartEvaluation(params){
    return post("/evaluation_system/evaluation/restartEvaluation",params)
}
// 保存答案
export function saveAnswer(params){
    return post("/evaluation_system/evaluation/saveAnswer",params)
}
// 开始测评
export function startEvaluation(params){
    return post("/evaluation_system/evaluation/startEvaluation",params)
}

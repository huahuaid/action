import axios from "axios";
import router from "@/router";

// 创建 axios 实例
const request = axios.create({
  baseURL: "http://localhost:9090", // 后端接口地址
  timeout: 30000, // 请求超时时间
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 设置请求头 Content-Type
    config.headers["Content-Type"] = "application/json;charset=utf-8";
    // 获取 localStorage 中的 token
    let token = localStorage.getItem("token");
    if (token) {
      // 如果存在 token，则将 token 设置到请求头中
      config.headers["token"] = token;
    }

    return config;
  },
  (error) => {
    // 请求错误处理
    console.error("request error: " + error);
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    let res = response.data;
    // 如果响应数据是字符串，直接返回，不做 JSON 解析
    if (typeof res === "string") {
      return res;
    }
    // 兼容处理服务端返回的字符串数据
    if (
      typeof res === "object" &&
      res !== null &&
      res.hasOwnProperty("code") &&
      res.code === "401"
    ) {
      // 如果响应中包含 code 为 401，跳转到登录页面
      router.push("/login");
    }
    return res;
  },
  (error) => {
    // 响应错误处理
    console.error("response error: " + error);
    return Promise.reject(error);
  }
);

export default request;

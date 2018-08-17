import { message } from "antd";

const moment = require("moment");

const collectData = [
  {
    articleId: "1",
    title: "2016/1/1 ",
    collectTime: "2016/1/1 00:00:00",
    content:
      "1.1-1.1-我是文章内容1我是文章内容1我是文章内容1我是文章内容1我是文章内容1我是文章内容1容1我是文章内容1我我是文章内容1我是"
  },
  {
    articleId: "1",
    title: "2016/1/1 ",
    collectTime: "2016/1/1 00:00:01",
    content: "1.2"
  },
  {
    articleId: "2",
    title: "2018-2-2",
    collectTime: "2018-2-2 00:00:00",
    content: "2"
  },
  {
    articleId: "3",
    title: "2017-1-1",
    collectTime: "2017-1-1 00:00:00",
    content: "3"
  },
  {
    articleId: "4",
    title: "2019/1/1 ",
    collectTime: "2019/1/1 01:00:00",
    content: "4.1"
  },
  {
    articleId: "4",
    title: "2019/1/1 ",
    collectTime: "2019/1/1 02:00:00",
    content: "4.2"
  },
  {
    articleId: "5",
    title: "2017-5-1",
    collectTime: "2017-5-1 10:00:00",
    content: "5.2"
  },
  {
    articleId: "5",
    title: "2017-5-1",
    collectTime: "2017-5-1 00:00:01",
    content: "5.1"
  }
];

const collectDataNew = [
  {
    articles: [
      {
        title: "2016/1/1 ",
        content:
          "1.1-我是文章内容1我是文章内容1我是文章内容1我是文章内容1我是文章内容1我是文章内容1容1我是文章内容1我我是文章内容1我是文",
        collectTime: "2016/1/1 00:00:00"
      },
      { title: "2016/1/1 ", content: "1.2", collectTime: "2016/1/1 00:00:01" }
    ],
    date: "2016-01-01"
  },
  {
    date: "2017-01-01",
    articles: [
      { title: "2017-1-1", content: "3", collectTime: "2017-1-1 00:00:00" }
    ]
  },
  {
    date: "2017-05-01",
    articles: [
      { title: "2017-5-1", content: "5.1", collectTime: "2017-5-1 00:00:01" },
      { title: "2017-5-1", content: "5.2", collectTime: "2017-5-1 10:00:00" }
    ]
  },
  {
    date: "2018-02-02",
    articles: [
      { title: "2018-2-2", content: "2", collectTime: "2018-2-2 00:00:00" }
    ]
  },
  {
    date: "2019-01-01",
    articles: [
      { title: "2019/1/1 ", content: "4.1", collectTime: "2019/1/1 01:00:00" },
      { title: "2019/1/1 ", content: "4.2", collectTime: "2019/1/1 02:00:00" }
    ]
  }
];

const collectDataSort = () => {
  const compare = (a, b) =>
    Date.parse(a.collectTime) - Date.parse(b.collectTime);
  collectData.sort(compare);
  return collectData;
};

let apartment = "";

const f = {
  collectDataNew: () => {
    const data = collectDataSort();
    const temp = d => moment(d.collectTime).format("YYYY-MM-DD");
    const result = [];
    let articles = [];
    let node = {};
    node.articles = articles;
    for (let i = 0; i < data.length - 1; i += 1) {
      const article = [];
      article.title = data[i].title;
      article.collectTime = moment(data[i].collectTime).format(
        "YYYY-MM-DD HH:mm:ss"
      );
      article.content = data[i].content;
      articles.push(article);
      if (temp(data[i]) !== temp(data[i + 1])) {
        node.date = temp(data[i]);
        node.articles = articles;
        result.push(node);
        articles = [];
        node = {};
      }
    }
    if (articles !== []) {
      node.date = temp(data[data.length - 2]);
      node.articles = articles;
      result.push(node);
      node = {};
    }
    const article = {};
    article.title = data[data.length - 1].title;
    article.collectTime = moment(data[data.length - 1].collectTime).format(
      "YYYY-MM-DD HH:mm:ss"
    );
    article.content = data[data.length - 1].content;
    node.articles = [];
    if (temp(data[data.length - 1]) !== temp(data[data.length - 2])) {
      node.date = temp(data[data.length - 1]);
      node.articles.push(article);
      result.push(node);
    } else {
      result[result.length - 1].articles.push(article);
    }
    return result;
  },

  handleChange: value => {
    apartment = value;
  },

  submitInfo: () => {
    const username = document.getElementById("username");
    const headImg = document.getElementById("headImg");
    const mail = document.getElementById("mail");
    const mailReg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
    if (mail.value !== "" && !mailReg.test(mail.value)) {
      message.error("邮件地址格式错误！", 1.5);
    } else {
      /**
       * 修改用户信息  to do code
       * */
      message.success("修改成功！", 1.5);
      username.value = "";
      headImg.value = "";
      mail.value = "";
    }
  },
  submitPassword: () => {
    const p1 = document.getElementById("password1");
    const p2 = document.getElementById("password2");
    if (p1.value === "" || p1.value === null) {
      message.error("输入的内容不允许为空！", 1.5);
    } else if (p2.value === null || p2.value === "") {
      message.error("输入的内容不允许为空！", 1.5);
    } else if (p1.value !== p2.value) {
      message.error("两次输入的内容不一致！", 1.5);
    } else {
      /**
       * 修改密码  to do code
       * */
      message.success("修改成功！", 1.5);
      p1.value = "";
      p2.value = "";
    }
  }
};

export default f;

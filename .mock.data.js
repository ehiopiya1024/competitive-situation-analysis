const articles = [
  {
    id: "0",
    title: "Vision",
    content:
      "Our vision is a Networked Society where every person and every industry is empowered to reach their full potential. Realization of this vision means progress in everyday life of billions of people, millions of businesses and a development towards a more inclusive, equitable and sustainable society. Our mission At Ericsson, we embrace this future development and have set out our mission to lead transformation through mobility, where we as a leading innovator drive transformation of industries an more what ever",
    tags: ["Ericsson", "about us"],
    time: "2017-08-09",
    liked: false
  },
  {
    id: "1",
    title: "Executive Team",
    content:
      "The Board of Directors appoints the President and CEO and the Executive Vice Presidents. The President and CEO is responsible for the management of day-to-day operations and is supported by the Executive Team. Members of the Executive Team Börje Ekholm President and CEO (since January 16, 2017) Born 1963. Master of Science in Electrical Engineering, KTH Royal Institute of Technology, Stockholm, Sweden. Master of Business Administration, INSEAD, France. Board Member: Telefonaktiebolaget LM Erics balabalabalabalba",
    tags: ["Ericsson", "organization"],
    time: "2017-08-09",
    liked: true
  }
];

const content = `　李逵和宋江<br />黑旋风李逵，虽然勇武，一双板斧，无人可挡，但李逵的本事还是逊色武松，李逵也称不得梁山顶尖高手。<br />李逵本是沂州沂水县百丈村人，后流落江州，成为江州牢城营的小牢子，给江州两院押牢节级戴宗做小弟，但李逵这个人，为人粗暴，蛮横贪赌，戴宗对于李逵也不是很重视，甚至于有些厌烦李逵这个人。`;

const associatedTags = ["tag1", "tag1", "tag1", "tag1", "tag1"];

const collectData = [
  {
    articleId: "1",
    title: "2016/1/1 ",
    collectTime: "2016/1/1 00:00:00",
    content:
      "1.1。moke假数据-我是文章内容1我是文章内容1我是文章内容1我是文章内容1我是文章内容1我是文章内容1容1我是文章内容1我我是文章内容1我是"
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

const user1 = {
  userId: "1",
  email: "1@1.cn",
  username: "1-Alexander Pierce",
  headImg:
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534556865&di=4e32109595745e1b26b8306a745dc505&imgtype=jpg&er=1&src=http%3A%2F%2Ftx.haiqq.com%2Fuploads%2Fallimg%2F150401%2F1954212091-9.jpg",
  apartment: "开发部",
  password: "1",
  skinsId: "1",
  fixed: true
};

const user2 = {
  userId: "2",
  email: "2@22.cn",
  username: "2-Alexander Pierce",
  headImg:
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534556865&di=4e32109595745e1b26b8306a745dc505&imgtype=jpg&er=1&src=http%3A%2F%2Ftx.haiqq.com%2Fuploads%2Fallimg%2F150401%2F1954212091-9.jpg",
  apartment: "市场部",
  password: "2",
  skinsId: "1",
  fixed: false
};
const user3 = {
  userId: "3",
  email: "3@22.cn",
  username: "3-Alexander Pierce",
  headImg:
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534556865&di=4e32109595745e1b26b8306a745dc505&imgtype=jpg&er=1&src=http%3A%2F%2Ftx.haiqq.com%2Fuploads%2Fallimg%2F150401%2F1954212091-9.jpg",
  apartment: "市场部",
  password: "3",
  skinsId: "2",
  fixed: true
};
const user4 = {
  userId: "4",
  email: "4@22.cn",
  username: "4-Alexander Pierce",
  headImg:
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534556865&di=4e32109595745e1b26b8306a745dc505&imgtype=jpg&er=1&src=http%3A%2F%2Ftx.haiqq.com%2Fuploads%2Fallimg%2F150401%2F1954212091-9.jpg",
  apartment: "市场部",
  password: "4",
  skinsId: "2",
  fixed: false
};
const user5 = {
  userId: "5",
  email: "5@22.cn",
  username: "5-Alexander Pierce",
  headImg:
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534556865&di=4e32109595745e1b26b8306a745dc505&imgtype=jpg&er=1&src=http%3A%2F%2Ftx.haiqq.com%2Fuploads%2Fallimg%2F150401%2F1954212091-9.jpg",
  apartment: "市场部",
  password: "5",
  skinsId: "3",
  fixed: true
};
const user6 = {
  userId: "6",
  email: "6@22.cn",
  username: "6-Alexander Pierce",
  headImg:
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534556865&di=4e32109595745e1b26b8306a745dc505&imgtype=jpg&er=1&src=http%3A%2F%2Ftx.haiqq.com%2Fuploads%2Fallimg%2F150401%2F1954212091-9.jpg",
  apartment: "市场部",
  password: "2",
  skinsId: "3",
  fixed: false
};
const user7 = {
  userId: "7",
  email: "7@22.cn",
  username: "7-Alexander Pierce",
  headImg:
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534556865&di=4e32109595745e1b26b8306a745dc505&imgtype=jpg&er=1&src=http%3A%2F%2Ftx.haiqq.com%2Fuploads%2Fallimg%2F150401%2F1954212091-9.jpg",
  apartment: "市场部",
  password: "2",
  skinsId: "4",
  fixed: true
};
const user8 = {
  userId: "8",
  email: "8@22.cn",
  username: "8-Alexander Pierce",
  headImg:
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534556865&di=4e32109595745e1b26b8306a745dc505&imgtype=jpg&er=1&src=http%3A%2F%2Ftx.haiqq.com%2Fuploads%2Fallimg%2F150401%2F1954212091-9.jpg",
  apartment: "市场部",
  password: "2",
  skinsId: "4",
  fixed: false
};
const user9 = {
  userId: "9",
  email: "9@22.cn",
  username: "9-Alexander Pierce",
  headImg:
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534556865&di=4e32109595745e1b26b8306a745dc505&imgtype=jpg&er=1&src=http%3A%2F%2Ftx.haiqq.com%2Fuploads%2Fallimg%2F150401%2F1954212091-9.jpg",
  apartment: "市场部",
  password: "2",
  skinsId: "5",
  fixed: true
};
const user10 = {
  userId: "10",
  email: "10@22.cn",
  username: "10-Alexander Pierce",
  headImg:
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534556865&di=4e32109595745e1b26b8306a745dc505&imgtype=jpg&er=1&src=http%3A%2F%2Ftx.haiqq.com%2Fuploads%2Fallimg%2F150401%2F1954212091-9.jpg",
  apartment: "市场部",
  password: "2",
  skinsId: "5",
  fixed: false
};
const user11 = {
  userId: "11",
  email: "11@22.cn",
  username: "11-Alexander Pierce",
  headImg:
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534556865&di=4e32109595745e1b26b8306a745dc505&imgtype=jpg&er=1&src=http%3A%2F%2Ftx.haiqq.com%2Fuploads%2Fallimg%2F150401%2F1954212091-9.jpg",
  apartment: "市场部",
  password: "2",
  skinsId: "6",
  fixed: true
};
const user12 = {
  userId: "12",
  email: "12@22.cn",
  username: "12-Alexander Pierce",
  headImg:
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534556865&di=4e32109595745e1b26b8306a745dc505&imgtype=jpg&er=1&src=http%3A%2F%2Ftx.haiqq.com%2Fuploads%2Fallimg%2F150401%2F1954212091-9.jpg",
  apartment: "市场部",
  password: "2",
  skinsId: "6",
  fixed: false
};

const mock = {
  "GET /api/fetch": (req, res) => {
    console.log(req.query);
    // const type = req.body.type;
    setTimeout(() => {
      if (req.query.type === "error") {
        res.status(200).json({
          errCode: "-1",
          errMsg: "连接数据库错误啦",
          data: ""
        });
      } else {
        res.status(200).json({
          errCode: "0",
          data: "hello 我是后端，注意，这里是mock数据，不是真实数据"
        });
      }
    }, 2000);
  },

  /**
   * @Author: TH
   * @Date: 2018-08-21 09:54:05
   *
   * 获取文章
   *
   * 如果不写errCode就会报未知错误
   *
   */
  "Get /api/getArticle": (req, res) => {
    console.log(req.query);
    setTimeout(() => {
      res.status(200).json({
        errCode: "0",
        errorCode: 0,
        showNumber: 15,
        total: 1000,
        data: articles
      });
    }, 300);
  },

  /**
   * @Author: TH
   * @Date: 2018-08-21 10:44:24
   *
   * 收藏文章
   */
  "Get /api/like": (req, res) => {
    console.log(req.query);
    setTimeout(() => {
      res.status(200).json({
        errCode: "0",
        errorCode: 0
      });
    }, 200);
  },

  /**
   * @Author: TH
   * @Date: 2018-08-21 14:02:18
   *
   * 标签搜索
   */
  "Get /api/getTagData": (req, res) => {
    console.log(req.query);
    setTimeout(() => {
      res.status(200).json({
        errCode: "0",
        errorCode: 0,
        data: articles,
        associatedTags
      });
    }, 400);
  },

  /**
   * @Author: TH
   * @Date: 2018-08-21 22:36:30
   *
   * 条件检索
   */
  "Get /api/search": (req, res) => {
    console.log(req.query);
    setTimeout(() => {
      res.status(200).json({
        errCode: "0",
        errorCode: 0,
        showNumber: 0,
        total: 200,
        data: articles
      });
    }, 500);
  },

  /**
   * @Author: TH
   * @Date: 2018-08-21 10:27:02
   *
   * 获取文章内容
   */
  "Get /api/articleCotent": (req, res) => {
    console.log(req.query);
    setTimeout(() => {
      res.status(200).json({
        errCode: "0",
        errorCode: 0,
        content
      });
    }, 500);
  },

  "Get /api/searchPullData": (req, res) => {
    console.log(req.query);
    setTimeout(() => {
      res.status(200).json({
        errCode: "0",
        data: articles
      });
    }, 500);
  },

  "Get /api/getUserInfo": (req, res) => {
    console.log("getUserInfo:---" + JSON.stringify(req.query));
    let user = {};
    let collect = [];
    switch (req.query.userId) {
      case "1":
        user = user1;
        collect = collectData;
        console.log("user1");
        break;
      case "2":
        user = user2;
        console.log("user2");
        break;
      case "3":
        user = user3;
        collect = collectData;
        console.log("user3");
        break;
      case "4":
        user = user4;
        console.log("user4");
        break;
      case "5":
        user = user5;
        collect = collectData;
        console.log("user5");
        break;
      case "6":
        user = user6;
        console.log("user6");
        break;
      case "7":
        user = user7;
        collect = collectData;
        console.log("user7");
        break;
      case "8":
        user = user8;
        console.log("user8");
        break;
      case "9":
        user = user9;
        collect = collectData;
        console.log("user9");
        break;
      case "10":
        user = user10;
        console.log("user10");
        break;
      case "11":
        user = user11;
        collect = collectData;
        console.log("user11");
        break;
      case "12":
        user = user12;
        console.log("user12");
        break;
    }
    res.status(200).json({
      errCode: "0",
      data: collect,
      userObj: user
    });
  },

  "Get /api/userLogin": (req, res) => {
    console.log("userLogin:---" + JSON.stringify(req.query));
    res.status(200).json({
      errCode: "0",
      data: user1
    });
  },

  "Get /api/modifyUser": (req, res) => {
    console.log("modifyUser:---" + JSON.stringify(req.query));
    let user = {};
    switch (req.query.skinsId) {
      case "1":
        if (req.query.fixed === "true") {
          user = user1;
          console.log("user1");
        } else {
          user = user2;
          console.log("user2");
        }
        break;
      case "2":
        if (req.query.fixed === "true") {
          user = user3;
          console.log("user3");
        } else {
          user = user4;
          console.log("user4");
        }
        break;
      case "3":
        if (req.query.fixed === "true") {
          user = user4;
          console.log("user5");
        } else {
          user = user6;
          console.log("user6");
        }
        break;
      case "4":
        if (req.query.fixed === "true") {
          user = user7;
          console.log("user7");
        } else {
          user = user8;
          console.log("user8");
        }
        break;
      case "5":
        if (req.query.fixed === "true") {
          user = user9;
          console.log("user9");
        } else {
          user = user10;
          console.log("user10");
        }
        break;
      case "6":
        if (req.query.fixed === "true") {
          user = user11;
          console.log("user11");
        } else {
          user = user12;
          console.log("user12");
        }
        break;
      default:
        user = user1;
        console.log("default");
        break;
      // case "7":
      //   user = user7;
      //   console.log("user7");
      //   break;
      // case "8":
      //   user = user8;
      //   console.log("user8");
      //   break;
      // case "9":
      //   user = user9;
      //   console.log("user9");
      //   break;
      // case "10":
      //   user = user10;
      //   console.log("user10");
      //   break;
      // case "11":
      //   user = user11;
      //   console.log("user11");
      //   break;
      // case "12":
      //   user = user12;
      //   console.log("user12");
      //   break;
    }
    res.status(200).json({
      errCode: "0",
      data: user
    });

    // console.log("modifyUser:---" + JSON.stringify(req.query));
    // res.status(200).json({
    //   errCode: "0",
    //   data: user2
    // });
  }
};
module.exports = mock;

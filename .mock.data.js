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

const content = {
  title: "Vision",
  content:
    `　李逵和宋江<br />黑旋风李逵，虽然勇武，一双板斧，无人可挡，但李逵的本事还是逊色武松，李逵也称不得梁山顶尖高手。<br />李逵本是沂州沂水县百丈村人，后流落江州，成为江州牢城营的小牢子，给江州两院押牢节级戴宗做小弟，但李逵这个人，为人粗暴，蛮横贪赌，戴宗对于李逵也不是很重视，甚至于有些厌烦李逵这个人。`
};

const associatedTags = ["tag1", "tag1", "tag1", "tag1", "tag1"];

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

  "Get /api/getArticle": (req, res) => {
    console.log(req.query);
    setTimeout(() => {
      res.status(200).json({
        errCode: "0",
        data: articles
      });
    }, 300);
  },

  "Get /api/like": (req, res) => {
    console.log(req.query);
    setTimeout(() => {
      res.status(200).json({
        errCode: "0",
        data: true
      });
    }, 200);
  },

  "Get /api/getTagData": (req, res) => {
    console.log(req.query);
    setTimeout(() => {
      res.status(200).json({
        errCode: "0",
        data: articles,
        associatedTags
      });
    }, 400);
  },

  "Get /api/search": (req, res) => {
    console.log(req.query);
    setTimeout(() => {
      res.status(200).json({
        errCode: "0",
        data: articles
      });
    }, 500);
  },

  "Get /api/articleCotent": (req, res) => {
    console.log(req.query);
    setTimeout(() => {
      res.status(200).json({
        errCode: "0",
        data: content
      });
    }, 500);
  }
};
module.exports = mock;

const containerHeadlines = document.getElementById("headlines");
const containerCovid = document.getElementById("covid");
const containerSports = document.getElementById("sports");
const containerEnt = document.getElementById("Entertainment");
const API_KEY = "e044387b3d0a3b981745f1d68b9af826";

axios
  .all([
    axios.get(`https://gnews.io/api/v3/top-news?token=${API_KEY}`),
    axios.get(`https://gnews.io/api/v3/topics/health?token=${API_KEY}`),
    axios.get(`	https://gnews.io/api/v3/topics/sports?token=${API_KEY}`),
    axios.get(`https://gnews.io/api/v3/topics/entertainment?token=${API_KEY}`),
  ])
  .then((resp) => {
    console.log(resp);
    const dataTop = resp[0].data.articles.slice(0, 6);
    const dataHealth = resp[1].data.articles.slice(0, 6);
    const dataSports = resp[2].data.articles.slice(0, 6);
    const dataEnt = resp[3].data.articles.slice(0, 6);

    const topNews = dataTop.map((news) => {
      return `<div class="each-container" data-aos="fade-up">
      <a href=${news.url}>
        <div class="agency">${news.source.name}</div>
        <div class="title">${news.title}</div>
        </a>
      </div>`;
    });
    const topHealth = dataHealth.map((news) => {
      return `<div class="each-container " data-aos="fade-up">
      <a href=${news.url}>
        <div class="agency">${news.source.name}</div>
        <div class="title">${news.title}</div>
        </a>
      </div>`;
    });
    const topSports = dataSports.map((news) => {
      return `<div class="each-container" data-aos="fade-up">
      <a href=${news.url}>
        <div class="agency">${news.source.name}</div>
        <div class="title">${news.title}</div>
        </a>
      </div>`;
    });
    const topEnt = dataEnt.map((news) => {
      return `<div class="each-container" data-aos="fade-up">
      <a href=${news.url}>
        <div class="agency">${news.source.name}</div>
        <div class="title">${news.title}</div>
        </a>
      </div>`;
    });

    topNews.forEach((newschild) => {
      containerHeadlines.innerHTML += newschild;
    });
    topHealth.forEach((newschild) => {
      containerCovid.innerHTML += newschild;
    });
    topSports.forEach((newschild) => {
      containerSports.innerHTML += newschild;
    });
    topEnt.forEach((newschild) => {
      containerEnt.innerHTML += newschild;
    });
  })
  .catch((error) => {
    console.log(error);
    containerHeadlines.innerHTML = "404 can't be fetched";
    containerCovid.innerHTML = "404 can't be fetched";
    containerSports.innerHTML = "404 can't be fetched";
    containerEnt.innerHTML = "404 can't be fetched";
  });

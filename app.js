// お題の配列
const themes = [
  "空を見上げて",
  "秋の空",
  "枯れた草原",
  "朝日に照らされた山",
  "夜空に浮かぶ月",
  "春の風",
  "涙を拭う手",
  "雨が降る街",
  "歩く人々",
  "子供たちの笑顔",
  "星空を眺める二人",
  "雪の空",
  "秋晴れの山々",
  "水たまり",
  "空を飛ぶ鳥",
  "風に揺れる木々",
  "満月の夜",
  "深い森",
  "花畑",
  "川を流れる水",
  "砂浜",
  "海岸",
  "山道",
  "山の麓",
  "山頂",
  "自然の美しさ",
  "僕たちの心",
];

// お題を表示する要素を取得する
const themeElement = document.getElementById("theme");

// 入力欄を取得する
const inputElement = document.getElementById("input");

// タイマーを表示する要素を取得する
const timerElement = document.getElementById("timer");

// スタートボタンを取得する
const startButton = document.getElementById("start");

// Twitterへの共有ボタンを取得する
const shareButton = document.getElementById("share");

// 川柳を表示する要素を取得する
const haikuElement = document.getElementById("haiku");

// 「もう一度遊ぶ」ボタンを取得する
const playAgainButton = document.getElementById("play-again");

// スタートボタンがクリックされたときの処理
startButton.addEventListener("click", () => {
  // スタートボタンを非表示にする
  startButton.style.display = "none";

  // 入力欄を表示する
  inputElement.style.display = "block";

  // お題をランダムに選択する
  const theme = themes[Math.floor(Math.random() * themes.length)];

  // お題を表示する
  themeElement.textContent = `お題: ${theme}`;

  // 30秒のカウントダウンを開始する
  let remainingSeconds = 30;
  timerElement.textContent = `残り${remainingSeconds}秒`;

  // 1秒ごとにカウントダウンを行う
  const intervalId = setInterval(() => {
    // 残り秒数を更新する
    remainingSeconds -= 1;
    timerElement.textContent = `残り${remainingSeconds}秒`;

    // もし残り秒数が0なら
    if (remainingSeconds === 0) {
      // カウントダウンを停止する
      clearInterval(intervalId);

      // 入力欄を非表示にする
      inputElement.style.display = "none";

      // タイマーを非表示にする
      timerElement.textContent = "";

      // 入力された川柳を取得します
      const haiku = inputElement.value;

      // 入力された川柳を改行文字でHTMLでも改行されるように表示する
      // \nを<br>に変換するために、replace()メソッドを使います
      haikuElement.innerHTML = haiku.replace(/\n/g, "<br>");

      // Twitterへの共有ボタンを表示する
      shareButton.style.display = "inline-block";

      // 「もう一度遊ぶ」ボタンを表示する
      playAgainButton.style.display = "inline-block";
    }
  }, 1000);
});

// Twitterへの共有ボタンがクリックされたときの処理
shareButton.addEventListener("click", () => {
  // 現在のURLを取得する
  const url = window.location.href;

  // Twitterへ共有する内容を作成する
  const theme = themeElement.textContent.replace("お題: ", "");
  const haiku = inputElement.value;
  const text = `お題: ${theme}\n\n${haiku}\n\n#30秒川柳\n\n${url}`;

  // Twitterへの共有URLを作成する
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    text
  )}`;

  // Twitterへの共有URLに遷移する
  window.open(shareUrl);
});

// 「もう一度遊ぶ」ボタンがクリックされたときの処理
playAgainButton.addEventListener("click", () => {
  // スタートボタンを表示する
  startButton.style.display = "inline-block";

  // お題を非表示にする
  themeElement.textContent = "";

  // 入力欄を初期化する
  inputElement.value = "";

  // タイマーを非表示にする
  timerElement.textContent = "";

  // Twitterへの共有ボタンを非表示にする
  shareButton.style.display = "none";

  // 川柳を非表示にする
  haikuElement.textContent = "";

  // 「もう一度遊ぶ」ボタンを非表示にする
  playAgainButton.style.display = "none";
});

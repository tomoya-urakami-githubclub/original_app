const clock = () => {
    // 現在の日時・時刻の情報を取得
    const d = new Date();
  
    // 年を取得
    let year = d.getFullYear();
    // 月を取得
    let month = d.getMonth() + 1;
    // 日を取得
    let date = d.getDate();
    // 曜日を取得
    let dayNum = d.getDay();
    const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let day = weekday[dayNum];
    // 時を取得
    let hour = d.getHours();
    // 分を取得
    let min = d.getMinutes();
    // 秒を取得
    let sec = d.getSeconds();
  
    // 1桁の場合は0を足して2桁に
    month = month < 10 ? "0" + month : month;
    date = date < 10 ? "0" + date : date;
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    // 日付・時刻の文字列を作成
    let today = `${year}.${month}.${date} ${day}`;
    let time = `${hour}:${min}:${sec}`;
  
    // 文字列を出力
    document.querySelector(".clock-date").innerText = today;
    //時間、分、秒をそれぞれのdivに反映
    document.querySelector("#hour").innerText = hour;
    document.querySelector("#min").innerText = min;
    document.querySelector("#sec").innerText = sec;
  };
  
  // 1秒ごとにclock関数を呼び出す
  setInterval(clock, 1000);

// 以下を追加
//DOM読み込み後に各ボタン要素にイベントを追加
window.addEventListener('DOMContentLoaded', function() {
 
  // 実行したい処理を書く
  //出勤ボタンクリック時
  document.querySelector('#start_button').addEventListener('click', function(){
    //クラスを追加: add
    document.querySelector('#clock').classList.add('recording');
  })
  //退勤ボタン
  document.querySelector('#finish_button').addEventListener('click', function(){
    //クラスを除去:remove
    document.querySelector('#clock').classList.remove('recording');
  })
})
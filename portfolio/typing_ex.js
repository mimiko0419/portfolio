const data = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",1,2,3,4,5,6,7,8,9,0];
let Q_s = [];//問題文
let Q = [];//問題文(ローマ字)
let score = 0;
let life = 5;
for(let i=0; i<30; i++){
    let random = Math.floor(Math.random() * 35);
    Q_s[i] = data[random];
}
Q_s[0] = Q_s.join('');
Q = Q_s;
let Q_No = 0;
let Q_l = Q[Q_No].length;//問題文の長さ
let sec = 31;//カウントダウン
let decision = 0;
let Q_i = 0;//回答初期値・現在単語がどこまであっているか判定している文字番号



window.addEventListener('keydown', countdown_decision);
window.addEventListener('keydown', push_Keydown);

function push_Keydown(event){
    let keyCode = event.key;
    if(sec !== 0 && decision !== 0){
        if(Q_l === Q_l-Q_i){
            document.getElementById("sentence").innerHTML = Q[Q_No].substring(Q_i, Q_l);//新しい問題の書き出し
            document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l);//問題書き出し
        }
        if(Q[Q_No].charAt(Q_i) === keyCode){//押したキーが合っていたら
            Q_i++;//判定する文章に1足す
            score++;
            document.getElementById("scoreA").innerHTML = score;
            document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l);//問題書き出し
            
            if(Q_l-Q_i === 0){//全部正解したら
                for(let i=0; i<30; i++){
                    let random = Math.floor(Math.random() * 35);
                    Q_s[i] = data[random];
                }
                Q_s[0] = Q_s.join('');
                Q = Q_s;
                Q_No = 0;
                Q_i = 0;//回答初期値・現在どこまであっているか判定している文字番号
                let Q_l = Q[Q_No].length;
                
                document.getElementById("sentence").innerHTML = Q[Q_No].substring(Q_i, Q_l);//新しい問題の書き出し
                document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l);//新しい問題の書き出し
            }
            document.getElementById("already").innerHTML = Q[Q_No].substring(0, Q_i);//既に押した問題書き出し
        }else{
            if(keyCode !== " "){
                life--;
                document.getElementById("life").innerHTML = life;
            }
            if(life === 0){
                sec = 0;
            }
        }
    }
}

function countdown_decision(event){
    if(event.key === " " && score === 0 && decision === 0){
        countdown();
        decision++;
        document.getElementById("scoreA").innerHTML = score;
        document.getElementById("life").innerHTML = life;
    }
}

function countdown(){
    sec--;
    document.getElementById("sec").innerHTML = sec;
    if(sec > 0){
        setTimeout(countdown, 1000);
    }else{
        let del = document.getElementById("content");
        del.innerHTML = "";
        del = document.getElementById("elapsed");
        del.innerHTML = "";
        document.getElementById("scoreB").innerHTML = "score：" + score;
        if(score <= 30) document.getElementById("message").innerHTML = "GOOD";
        else if(score <= 70) document.getElementById("message").innerHTML = "GREAT";
        else if(score <= 110) document.getElementById("message").innerHTML = "EXCELLENT";
        else document.getElementById("message").innerHTML = "GOD";
    }
}
let Q_s = ["秋の田の仮庵(かりほ)の庵(いほ)の苫(とま)を荒みわが衣手(ころもで)は露に濡れつつ", "春すぎて夏来にけらし白妙(しろたへ)の衣ほすて天(あま)の香具山", "あしびきの山鳥の尾のしだり尾の長々し夜をひとりかも寝む", "田子(たご)の浦にうち出(い)でて見れば白妙(しろたへ)の富士の高嶺に雪は降りつつ", "奥(おく)山にもみじ踏み分け鳴く鹿の声聞く時ぞ秋は悲しき", "かささぎの渡せる橋に置く霜の白きを見れば夜ぞふけにける", "天の原ふりさけ見れば春日なる三笠の山に出でし月かも", " わが庵(いほ)は都のたつみしかぞ住む世を宇治山と人はいふなり", "花の色はうつりにけりないたづらにわが身世にふるながめせしまに", "これやこの行(ゆ)くも帰(かへ)るも別れては知るも知らぬも逢坂(あふさか)の関"];//問題文(本文)
let Q = ["akinotanokarihonoihonotomawoaramiwagakoromodehatuyuninuretutu", "harusugitenatukinikerasisirotahenokoromohosuteamanokaguyama", "asibikinoyamadorinoonosidariononaganagasiyowohitorikamonemu", "tagonouraniutiidetemirebasirotahenohujinotakaneniyukihahuritutu", "okuyamanimomijihumiwakenakusikanokoekikutokizoakihakanasiki", "kasasaginowataseruhasiniokusimonosirokiwomirebayozohukenikeru","amanoharahurisakemirebakasuganarumikasanoyamaniidesitukikamo","wagaihohamiyakonotatumisikazosumuyowoujiyamatohitohaihunari", "hananoirohauturinikerinaitaduraniwagamiyonihurunagamesesimani", "koreyakonoyukumokaherumowakaretehasirumosiranumoahusakanoseki"];//問題文(ローマ字)
let score = 0;
let life = 10;
let sec = 31;//カウントダウン
let decision = 0;
let Q_No = Math.floor( Math.random() * Q.length);//問題をランダム出題
let Q_i = 0;//回答初期値・現在単語がどこまであっているか判定している文字番号
let Q_l = Q[Q_No].length;//計算用の文字の長さ


window.addEventListener('keydown', countdown_decision);
window.addEventListener('keydown', push_Keydown);

function push_Keydown(event){
    if(sec !== 0 && decision !== 0){
        let keyCode = event.key;
        if(Q_l === Q_l-Q_i){
            document.getElementById("text_array").innerHTML = Q_s[Q_No].substring(Q_i, Q_l);//新しい問題の書き出し
            document.getElementById("sentence").innerHTML = Q[Q_No].substring(Q_i, Q_l);//新しい問題の書き出し
            document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l);//問題書き出し
        }
        if(Q[Q_No].charAt(Q_i) === keyCode){//押したキーが合っていたら
            Q_i++;//判定する文章に1足す
            score++;
            document.getElementById("scoreA").innerHTML = "score：" + score;
            document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l);//問題書き出し
    
            if(Q_l-Q_i === 0){//全部正解したら
                Q_No = Math.floor( Math.random() * Q.length);
                Q_i = 0;//回答初期値・現在どこまであっているか判定している文字番号
                Q_l = Q[Q_No].length;
    
                document.getElementById("text_array").innerHTML = Q_s[Q_No].substring(Q_i, Q_l);//新しい問題の書き出し
                document.getElementById("sentence").innerHTML = Q[Q_No].substring(Q_i, Q_l);//新しい問題の書き出し
                document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l);//新しい問題の書き出し
            }
            document.getElementById("already").innerHTML = Q[Q_No].substring(0, Q_i);//既に押した問題書き出し
        }else{
            if(keyCode !== " "){
                life--;
                document.getElementById("life").innerHTML = "life：" + life;
            }
            if(life === 0){
                sec = 0;
            }
        }
    }
}

function countdown_decision(event){
    if(event.key === " " && score === 0 && decision === 0){
        decision++;
        document.getElementById("scoreA").innerHTML = "score：" + score;
        document.getElementById("life").innerHTML = "life：" + life;
        countdown();
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
        if(score <= 75) document.getElementById("message").innerHTML = "GOOD";
        else if(score <= 150) document.getElementById("message").innerHTML = "GREAT";
        else document.getElementById("message").innerHTML = "EXCELLENT";
    }
}
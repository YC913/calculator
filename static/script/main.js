// 計算式を受け取って計算結果を返す関数
function clc(formula){
    return new Function("return " + formula.value)()
}

// 置き換え
var count = 0;
function rep_comb(text){
    var pattern = /\d{1,}C\d{1,}/;  // コンビネーションの正規表現（例：15C2）
    var comb = text.match(pattern); // 配列を作成
    if (comb){
        var [m,n] = comb[0].split("C").map(str => parseInt(str, 10));
        text = text.replace(comb[0],conbination(m,n));
        return rep_comb(text);
    }
    else{
        return text
    }
}

// nCkのコンビネーションの計算をする関数
function conbination(m, n){
    if(m < n){
        return 0;
    }
    else if(m===n){
        return 1;
    }
    else{
        // コンビネーションの特性を活かして計算量を減らす
        if((m - n) < n){
            n = m - n;
        }
        let numerator = 1;  // 分子
        let denominator = 1; //分母
        for(let i=n; i > 0; i--){
            numerator *= (m - i + 1);
            denominator *= i;
        }
        
        return numerator / denominator;
    }
}

// ボタンが押されたときに呼び出される関数
$("button").click(function (){
    // 初期化
    $("#clc-result").empty();

    // 計算式をhtmlに追加
    $("#clc-result").append(formula.value+" = ");

    // 計算式を結果に追加
    formula.value = rep_comb(formula.value);
    $("#clc-result").append(clc(formula));
    
    // フォーム内を初期化
    formula.value = "";
});

document.getElementById("formula").onkeypress = (e) => {
    // form1に入力されたキーを取得
    const key = e.keyCode || e.charCode || 0;
    // 13はEnterキーのキーコード
    if (key == 13) {
      // アクションを行わない
      e.preventDefault();
    }
  }
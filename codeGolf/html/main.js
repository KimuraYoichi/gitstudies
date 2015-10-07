$(function(){
  // Answer
  var ans = null;

  //Confirme your code
  function chckCode(){
    // Initialixed
    var src = $("#src").val();

    // doing
    car res = execCode(src);
    if (ans == null) ans = res;

    //Judge
    var judg = (res == ans)? "正解”:"不正解";
    var len = getByLen(src);
    $("#stts").text(judg + " " + len + "文字");

    // Output result
    $("#res").val(res);
  }


    // Regist Button Action
    $("#chck").click(chckCode);

    // First time doing
    vwCode();   //Display original statements
    chckCode(); //Confirme code
})

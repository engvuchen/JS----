//效果：调整颜色，字号
//不传入参数有默认值
(function($){
    $.fn.extend({
      changeStyle:function(option){
        //设置默认值
        var defaultSetting={colorStr:"green", fontSize:20};
        //有参数传入就用传入参数替代默认值 
        var setting=$.extend(defaultSetting, option);
        this.css("color", setting.colorStr)
        .css("fontSize", setting.fontSize+"px");
       return this;
      }
    })
  })(jQuery);


(function($){
  $.fn.extend({
    changeSomthing:function(){
      return this;
    }
  });

})(jQuery);

$.add = function(a,b){
  return a+b;
}

/* 
  $.fn.extend({
    xxx:function(){
      //....
    }
  })
  
  $.fn.xxx=function(){
    //...
  }

*/
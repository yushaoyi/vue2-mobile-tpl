import Vue from 'vue'

Date.prototype.Format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1,                 // 月份
    "d+": this.getDate(),                    // 日
    "h+": this.getHours(),                   // 小时
    "m+": this.getMinutes(),                 // 分
    "s+": this.getSeconds(),                 // 秒
    "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
    "S": this.getMilliseconds()             // 毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
};

export default function Filter() {

  Vue.filter('f_date', function (value, format) {

    if (!value) {
      return 0;
    }

    switch (format) {
      case 's_to_i':
        return parseInt(value / 60);
        break;
      case 'yy-mm-dd':
        return getMyDate(value, 'y') + '-' + getMyDate(value, 'm') + '-' + getMyDate(value, 'd');
        break;
      case 'yy-mm-dd h:i':
        return getMyDate(value, 'y') + '-' + getMyDate(value, 'm') + '-' + getMyDate(value, 'd') + ' ' + getMyDate(value, 'h') + ':' + getMyDate(value, 'i');
        break;
      case 'yy.mm.dd h:i':
        return getMyDate(value, 'y') + '.' + getMyDate(value, 'm') + '.' + getMyDate(value, 'd') + ' ' + getMyDate(value, 'h') + ':' + getMyDate(value, 'i');
        break;
      case 'yy-mm-dd h:i:s':
        return getMyDate(value, 'y') + '-' + getMyDate(value, 'm') + '-' + getMyDate(value, 'd') + ' ' + getMyDate(value, 'h') + ':' + getMyDate(value, 'i') + ':' + getMyDate(value, 's');
        break;
      case 'h:i':
        return getMyDate(value, 'h') + ':' + getMyDate(value, 'i');
        break;
      case 'h:i:s':
        return getMyDate(value, 'h') + ':' + getMyDate(value, 'i') + ':' + getMyDate(value, 's');
        break;
    }

    function getMyDate(str, format) {
      var oDate = new Date(str),
        oYear = oDate.getFullYear(),
        oMonth = oDate.getMonth() + 1,
        oDay = oDate.getDate(),
        oHour = oDate.getHours(),
        oMin = oDate.getMinutes(),
        oSen = oDate.getSeconds(),
        oTime = '';
      switch (format) {
        case 'y':
          oTime = oYear;
          break;
        case 'm':
          oTime = addZero(oMonth);
          break;
        case 'd':
          oTime = addZero(oDay);
          break;
        case 'h':
          oTime = addZero(oHour);
          break;
        case 'i':
          oTime = addZero(oMin);
          break;
        case 's':
          oTime = addZero(oSen);
          break;
      }
      return oTime;
    };

    function addZero(num) {
      if (parseInt(num) < 10) {
        num = '0' + num;
      }
      return num;
    }

  })
}


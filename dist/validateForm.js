!function(){function e(e){var t,i,a,s,r=e.attr("data-args"),l=e.val(),d=0;if(/^{.+?}$|^\[.+?\]$/g.test(r))try{r=JSON.parse(r)}catch(f){throw new SyntaxError("Badly formed JSON string: "+r)}else r=[];for($.isArray(r)||(r=[r]),i=r.length;i>d;d++)return t=r[d],s=t.rule,a=t.pattern?Function("return "+t.pattern)():n[s],a=a||/.*?/g,s&&(n[s]=a),a.test(l)?!0:(loadingTip.show({content:t.msg}),!1);return!0}var t=null,i="",a={isBankNumber:function(e){return 16==e.length||19==e.length?!0:!1},isChinese:function(e,t){var i=/^[\u4e00-\u9fa5]+$/i,a=$.trim(e);return i.test(a)?!0:!1}},s=function(e){if(e=$(this),!this.nodeName)return!0;var t=null,s=$(this).parent(),n=s.children(".tip"),r=$(this).data("validate"),l=$(this).is(":visible"),d=!0;if(!r||!l)return!1;var f=r.split(":"),h=f[0],u=f[1],o=$(this)[0].nodeName,c=0,m="",v="",p=!0,O=!1;if(n.length<1&&(n=$("<p class='tip'><span></span></p>"),s.append(n)),r){m=$.trim($(this).prop("value")),m||(m=$(this).val()),"SELECT"==this.nodeName&&(t=$(this).children("option:selected")[0],m=t.hasAttribute("value")&&-1!=t.value?1:"");for(var g=u.split(","),x=0;x<g.length;x++){var N=g[x],b=0,C=0,k=(N.substr(0,1),N.substr(1,N.length)),E=0,T="",w="",L="";if("required"==N){if(!$.trim(m))return O=!0,v="SELECT"==o?"请选择"+h:"请输入"+h,d=!1,p=!1,!1}else if(!m)break;if(0==N.indexOf("n")&&(L="数字",isNaN(m))){p=!1,d=!1;break}if(k.indexOf("-")>-1&&(E=k.indexOf("-"),T=k.split("-")[0],w=k.split("-")[1],"*"!=T&&T>m)){v="请输入>"+T,L&&(v+="的数字"),p=!1,d=!1;break}if("passwordOther"==N)a.isPasswordOther(m)||(p=!1);else if(N.indexOf("password")>-1)a.isPassword(m)||(p=!1);else if(N.indexOf("phone")>-1)a.checkCellPhone(m)||(p=!1);else if("inviteNum"==N)m=m.toString(),8!=m.length&&11!=m.length?p=!1:11==m.length&&(a.checkCellPhone(m)||(p=!1));else if(N.indexOf("telarea")>-1)a.checkTelarea(m)||(p=!1,isTelarea=!1);else if(N.indexOf("telnum")>-1)a.checkTelnum(m)||(p=!1),isTelarea||(p=!1);else if(N.indexOf("number")>-1)isNaN(m)&&(p=!1);else if(N.indexOf("qq")>-1)a.checkQQ(m)||(p=!1);else if(N.indexOf("cardId")>-1)1!=a.checkcardId(m)&&(p=!1);else if(N.indexOf("chinese")>-1||N.indexOf("zh")>-1)a.isChinese(m)||(p=!1);else if(N.indexOf("email")>-1)a.isEmail(m)||(p=!1);else if(N.indexOf("bankNumber")>-1)try{a.isBankNumber(m)||(p=!1)}catch(P){}N.indexOf("interger")>-1&&(/^\d+$/.test(this.value)||(p=!1)),N.indexOf("company")>-1?a.isCompanyName(m)||(p=!1):N.indexOf("trueName")>-1&&(a.isUserName(m)||(p=!1)),N.indexOf("range")>-1&&(isNaN(m)?p=!1:(m=Number(m),(m<Number(e.attr("data-start"))||m>Number(e.attr("data-end")))&&(p=!1))),v="请输入正确的"+h,N.toLowerCase().indexOf("length")>-1&&(N.indexOf("minLength")>-1?(c=N.substr(N.indexOf("h")+1),a.strLen(m)<c&&(p=!1)):N.indexOf("maxLength")>-1?(C=N.substr(N.indexOf("h")+1),a.strLen(m)>C&&(p=!1)):(b=N.substr(N.indexOf("h")+1),m.length!=b&&(p=!1)),v="请输入正确的"+h)}p||(d=!1)}return p?(n.hide(),$(this).removeClass("validateNoPass")):($(this).addClass("validateNoPass"),i&&(v=h+i),console.log(v)),d};$(document).on("blur","[data-validate]",function(t){if(!e($(this)))return!1;var i=$(this).val(),a=t.target,n=t.relatedTarget;if(i){if(n){if($(n).hasClass("submit"))return;if($(n).hasClass("clearBtn")&&$(n).parent()==$(this).parent())return}"SELECT"==a.nodeName&&this.firstElementChild?this.firstElementChild.value!=this.value&&s.call(this):s.call(this)}}),$.fn.validateForm=function(i){t=$.extend(t,i);var a=!0;$(this).addClass("validateForm");var n=(document.forms.registerStepOne,$(this).find("[data-validate]"));return n.removeClass("validateNoPass"),$(this).find("[data-validate]").each(function(t,i){if($(i).removeClass("validateNoPass"),!e($(i)))return!1;var n=s.call(i);return n?void 0:(a=!1,!1)}),a};var n={phone:/^1[358](\d+){9}$/g,test:/\s+/g}}();
// ==UserScript==
// @id             twitter.com-03860938-5f93-4530-94f1-1000d4c5fab8@scriptish
// @name           block twitter promote tweet
// @version        1.0
// @namespace      http://www.zfanw.com/blog/
// @author         陈三
// @description    去除 twitter 推广广告
// @include        https://twitter.com/*
// @run-at         document-end
// ==/UserScript==
(function () {
  
  // 创建样式元素
  var styleEL = document.createElement('style'),
  styleSheet;
  
  // 将样式元素插入头部
  document.head.appendChild(styleEL);
  
  // 取得样式表
  styleSheet = styleEL.sheet;
  
  // 添加样式
  styleSheet.insertRule('[data-promoted="true"], [data-component-contex="suggest_who_to_follow"].tweet, .promoted-trend, .promoted-account {display: none !important;}', 0);
}) ();

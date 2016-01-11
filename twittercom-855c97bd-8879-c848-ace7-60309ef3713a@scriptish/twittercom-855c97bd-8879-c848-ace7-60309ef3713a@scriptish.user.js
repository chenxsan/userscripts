// ==UserScript==
// @id             twitter.com-855c97bd-8879-c848-ace7-60309ef3713a@scriptish
// @name           Remove-moments
// @version        1.0
// @namespace      https://www.zfanw.com/blog/
// @author         Sam Chen
// @description    Remove moments tab from twitter
// @include        https://twitter.com/
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
  styleSheet.insertRule('li.moments.js-moments-tab {display: none !important;}', 0);
}) ();
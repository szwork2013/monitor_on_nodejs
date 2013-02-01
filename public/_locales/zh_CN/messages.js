﻿var language = {
  "name": {
    "message": "Page Monitor",
    "description": "The name of the extension."
  },
  "description": {
    "message": "驻留后台并监控网页变化。",
    "description": "The global description of the extension."
  },
  "page_updated_single": {
    "message": "页面已更新",
    "description": "通知标题：单页面已被更新。"
  },
  "page_updated_multi": {
    "message": "$1 张页面已更新",
    "description": "通知标题：多页面已被更新。"
  },
  "diff_title": {
    "message": "Page Monitor: 查看变更",
    "description": "差异页面的标题。"
  },
  "diff_error": {
    "message": "比较差异时出错。请报告错误。",
    "description": "差异页面比较差异失败时的出错信息。"
  },
  "diff_show_deletions": {
    "message": "显示删除部分",
    "description": "差异页面中用于显示删除部分的链接。"
  },
  "diff_hide_deletions": {
    "message": "隐藏删除部分",
    "description": "差异页面中用于隐藏删除部分的链接。"
  },
  "diff_textize": {
    "message": "文本模式",
    "description": "Link to switch the diff page to text-only mode."
  },
  "diff_untextize": {
    "message": "普通模式",
    "description": "Link to switch the diff page from text-only mode to normal."
  },
  "diff_original": {
    "message": "查看原始页面",
    "description": "差异页面中指向原始页面的链接的文字。"
  },
  "diff_original_title": {
    "message": "查看原始页面",
    "description": "差异页面中指向原始页面的链接的工具提示。"
  },
  "diff_corruption": {
    "message": "侦测到缓存出错，已修复。上次的快照已被丢弃。变更高亮功能将在下次更新时可用。",
    "description": "差异页面中缓存出错的错误信息。"
  },
  "diff_progress": {
    "message": "正在比较差异。",
    "description": "加载要比较差异的页面时显示该消息。"
  },
  "options_header": {
    "message": "正被监控的页面",
    "description": "选项页面中列表标题文本。"
  },
  "untitled": {
    "message": "无标题 ($1)",
    "description": "名称为空的网页的默认名称，占位符为网页 URL。"
  },
  "check_in_progress": {
    "message": "正在检查",
    "description": "检查过程中要显示的信息。"
  },
  "stop_monitoring": {
    "message": "停止监控",
    "description": "用于停止监控某页面的按钮文字。"
  },
  "mark_visited": {
    "message": "标记为已访问",
    "description": "用于标记已更新页面为已被访问的按钮文字。"
  },
  "view_diff": {
    "message": "查看变更",
    "description": "用于打开差异页面的按钮文字。"
  },
  "no_changes": {
    "message": "没有发现变更。",
    "description": "没有发现变更时的弹出文本。"
  },
  "feedback": {
    "message": "反馈",
    "description": "反馈链接的文本。"
  },
  "options": {
    "message": "选项",
    "description": "选项链接文本。"
  },
  "view_all": {
    "message": "查看所有更新",
    "description": "用于在新标签打开所有已更新页面的按钮文字。"
  },
  "check_all": {
    "message": "立即检查全部",
    "description": "用于开始检查所有页面的按钮文字。"
  },
  "monitor": {
    "message": "监控此页",
    "description": "将页面标记为正被监控的按钮文字。"
  },
  "page_monitored": {
    "message": "页面已被监控",
    "description": "当前页面已被监控时弹出窗口中显示的文字。"
  },
  "options_title": {
    "message": "Page Monitor 选项",
    "description": "选项页的标题。"
  },
  "new_sound_prompt": {
    "message": "请输入新声音的名称和 URL。",
    "description": "当用户尝试添加新声音时的提示。"
  },
  "new_sound_failed": {
    "message": "浏览器无法播放指定 URL 所指向的文件。",
    "description": "指定的新声音 URL 无法播放时显示的错误信息。"
  },
  "import_error": {
    "message": "遇到错误。导入可能不完整。",
    "description": "页面导入失败"
  },
  "import_empty": {
    "message": "输入文件中未发现可导入的页面。",
    "description": "导入过程中未发现页面"
  },
  "import_success_single": {
    "message": "成功导入一张页面。",
    "description": "成功导入一张页面时显示的错误信息。"
  },
  "import_success_multi": {
    "message": "成功导入 $1 张页面。",
    "description": "成功导入多张页面时显示的错误信息。"
  },
  "test_button": {
    "message": "测试",
    "description": "高级模式中用给定的正则表达式或选择器测试某页的按钮文字。"
  },
  "pick_button": {
    "message": "挑选",
    "description": "启动选择器 GUI 的按钮文字。"
  },
  "test_progress": {
    "message": "正在测试...",
    "description": "测试正则表达式或选择器时出现的信息。"
  },
  "test_matches": {
    "message": "已匹配:",
    "description": "正则表达式或选择器匹配成功时出现的信息。"
  },
  "test_no_matches": {
    "message": "无匹配。",
    "description": "正则表达式或选择器未能匹配时出现的信息。"
  },
  "test_fail": {
    "message": "无法检索所选页面。",
    "description": "正则表达式或选择器无法检索页面时出现的信息。"
  },
  "advanced": {
    "message": "高级",
    "description": "切换高级设置的按钮文字。"
  },
  "rename_page": {
    "message": "重命名",
    "description": "重命名页面的按钮文字。"
  },
  "remove_page": {
    "message": "移除",
    "description": "停止监控某页面的按钮文字。"
  },
  "last_check": {
    "message": "上次检查",
    "description": "说明页面上次检查时间的标签文字。"
  },
  "unknown": {
    "message": "未知",
    "description": "未知数据的占位符。"
  },
  "never": {
    "message": "从未",
    "description": "从未检查过的页面的“上次检查”标签。"
  },
  "second": {
    "message": "1 秒",
    "description": "A single second, as a number suffix (e.g. '1 second')."
  },
  "seconds": {
    "message": "$1 秒",
    "description": "A plural number of seconds, as a number suffix (e.g. '7 seconds')."
  },
  "minute": {
    "message": "1 分钟",
    "description": "A single minute, as a number suffix (e.g. '1 minute')."
  },
  "minutes": {
    "message": "$1 分钟",
    "description": "A plural number of minutes, as a number suffix (e.g. '7 minutes')."
  },
  "hour": {
    "message": "1 小时",
    "description": "A single hour, as a number suffix (e.g. '1 hour')."
  },
  "hours": {
    "message": "$1 小时",
    "description": "A plural number of hours, as a number suffix (e.g. '7 hours')."
  },
  "day": {
    "message": "1 天",
    "description": "A single day, as a number suffix (e.g. '1 day')."
  },
  "days": {
    "message": "$1 天",
    "description": "A plural number of days, as a number suffix (e.g. '7 days')."
  },
  "ago": {
    "message": "$1 前",
    "description": "A setence that describes that something happened {placeholder} time ago, e.g. '{20 minutes} ago'."
  },
  "check_every": {
    "message": "检查间隔",
    "description": "检查间隔文本框的标签。"
  },
  "custom_mode": {
    "message": "自定义模式",
    "description": "对自定义检查模式（选择器或正则表达式）的标签。"
  },
  "regex": {
    "message": "正则表达式",
    "description": "正则表达式模式的标签。"
  },
  "selector": {
    "message": "选择器",
    "description": "选择器模式的标签。"
  },
  "no_pages_monitored": {
    "message": "暂无被监控页面。",
    "description": "无监控页面时在选项页面替代页面列表的文字。"
  },
  "notifications": {
    "message": "桌面通知",
    "description": "桌面通知复选框的标签。"
  },
  "disabled": {
    "message": "禁用",
    "description": "禁用项的通用标签。"
  },
  "enabled": {
    "message": "启用",
    "description": "启用项的通用标签。"
  },
  "notifications_timeout": {
    "message": "通知停留",
    "description": "桌面通知超时文本框的标签。"
  },
  "badge_color": {
    "message": "标记颜色",
    "description": "标记颜色选择器的标签。"
  },
  "sound_alert": {
    "message": "声音提示",
    "description": "声音提示下拉菜单的标签。"
  },
  "sound_none": {
    "message": "无",
    "description": "声音提示下拉菜单中“无声”项的值。"
  },
  "sort": {
    "message": "页面排序方式",
    "description": "排序顺序下拉菜单的标签。"
  },
  "sort_date": {
    "message": "添加日期",
    "description": "声音提示下拉菜单中的“添加日期”选项。"
  },
  "sort_name": {
    "message": "名称",
    "description": "声音提示下拉菜单中的“名称”选项。"
  },
  "sort_url": {
    "message": "URL",
    "description": "声音提示下拉菜单中的“URL”选项。"
  },
  "sort_interval": {
    "message": "检查间隔",
    "description": "声音提示下拉菜单中的“检查间隔”选项。"
  },
  "sort_last_check": {
    "message": "上次检查",
    "description": "声音提示下拉菜单中的“上次检查”选项。"
  },
  "sort_last_change": {
    "message": "上次变更",
    "description": "声音提示下拉菜单中的“上次变更”选项。"
  },
  "animations": {
    "message": "动画",
    "description": "禁用/启用动画的复选框标签。"
  },
  "import": {
    "message": "导入页面",
    "description": "从一个 bookmarks.html 导入页面的按钮文字。"
  },
  "export": {
    "message": "导出页面",
    "description": "将页面导出到一个 bookmarks.html 的按钮文字。"
  },
  "export_prompt": {
    "message": "将此文本复制到一个文件中并将其保存为 bookmarks.html:",
    "description": "已导出页面文本框出现之前出现的提示。"
  },
  "import_prompt": {
    "message": "在这里贴入您 bookmarks.html 文件的内容:",
    "description": "导入时 bookmarks.html 文本框之前出现的提示。"
  },
  "import_button": {
    "message": "导入",
    "description": "导入表单中“导入”按钮的文本。"
  },
  "ok": {
    "message": "确定",
    "description": "通用的“确定”按钮文本。"
  },
  "cancel": {
    "message": "取消",
    "description": "通用的“取消”按钮文本。"
  },
  "close": {
    "message": "关闭",
    "description": "通用的“关闭表单”按钮文本。"
  },
  "sound_name": {
    "message": "名称",
    "description": "“新建声音”表单中声音名称的标签。"
  },
  "sound_url": {
    "message": "URL (MP3 或 OGG 文件)",
    "description": "“新建声音”表单中声音 URL 的标签。"
  },
  "sound_create": {
    "message": "创建",
    "description": "“新建声音”表单中“创建”按钮的文字。"
  },
  "sound_new": {
    "message": "新建",
    "description": "打开“新建声音”表单的按钮文字。"
  },
  "sound_delete": {
    "message": "删除",
    "description": "The text of the button that deletes the selected sound."
  },
  "sound_play": {
    "message": "播放",
    "description": "播放所选声音的按钮文字。"
  },
  "sound_chime": {
    "message": "钟鸣",
    "description": "默认钟鸣声的标签。"
  },
  "sound_cuckoo": {
    "message": "布谷鸟",
    "description": "默认布谷鸟声的标签。"
  },
  "selector_gui_pick": {
    "message": "选取元素",
    "description": "视觉选择器构建 GUI 中的“提取元素”按钮。"
  },
  "selector_gui_parent": {
    "message": "成长选择",
    "description": "视觉选择器构建 GUI 中从所选元素切换到其父级元素的按钮。"
  },
  "selector_gui_done": {
    "message": "完成",
    "description": "该按钮接受选择并在视觉选择器构建 GUI 中关闭页面。"
  },
  "selector_gui_help": {
    "message": "帮助",
    "description": "视觉选择器构建 GUI 中帮助按钮的标题。"
  },
  "selector_gui_help_text": {
    "message": "这些控件可以让您直观地选择您想要监控的页面元素。\n\n首先移动您的鼠标并注意所经过的被标记了蓝色外框的元素。一旦该外框与您想要监控的元素（或其中的某部分）相匹配，请单击选择之。\n\n如果你对选择满意，仅需点击“完成”返回选项页面。\n\n如果您所选的元素只是您想监控的元素的一部分，您可以点击“成长选择”扩大选区到该元素所属的元素。您可以重复该操作，直到您对结果满意或达到页面的顶层部分。\n\n如果你打算从头开始选择一个新的元素，请点击“选取元素”。",
    "description": "视觉选择器构建 GUI 中的帮助信息。"
  },
  "view_all_function": {
    "message": "“查看全部”功能",
    "description": "设置弹窗中“查看全部”按钮行为的下拉菜单的标题。"
  },
  "view_original": {
    "message": "查看原始页面",
    "description": "“查看全部”功能下拉菜单中可能的选择之一。意即将打开原始页面，而非差异页面。"
  },
  "until_closed": {
    "message": "直到关闭",
    "description": "The option describing the notifications remaining active until closed."
  }
}
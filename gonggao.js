/**
 * ============================================
 * 悬浮公告弹窗 - 配置与功能
 * ============================================
 */

;(function() {
    'use strict';

    // ============ 配置区域（在此修改）============
    const CONFIG = {
        // 是否启用弹窗：yes 启用 | no 禁用
        enable: 'yes',

        // 窗口标题
        title: '友情提示',

        // 窗口内容（支持HTML）
        content: '本站永久免费看全网视频',

        // 自动关闭时间（秒）
        autoCloseTime: 8,

        // 底部跳转按钮文字
        jumpBtnText: '前往百度',

        // 跳转链接
        jumpUrl: 'https://www.baidu.com',

        // 关闭按钮文字
        closeBtnText: '关闭',

        // 弹窗宽度（移动端自动适配）
        width: '380px',

        // 主题色
        primaryColor: '#FF2121',
        bgColor: '#ffffff',
        textColor: '#333333',
        borderColor: '#e63946'
    };
    // ============ 配置区域结束 ============


    // 检查是否启用
    if (CONFIG.enable.toLowerCase() !== 'yes') {
        return;
    }


    // ============ 样式注入 ============
    const styles = `
        /* 弹窗遮罩 */
        .notice-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 99999;
            display: flex;
            justify-content: center;
            align-items: center;
            animation: fadeIn 0.3s ease;
            padding: 15px;
            box-sizing: border-box;
        }

        /* 弹窗主体 */
        .notice-modal {
            background: ${CONFIG.bgColor};
            border-radius: 12px;
            width: 100%;
            max-width: ${CONFIG.width};
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
            overflow: hidden;
            animation: slideUp 0.4s ease;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        /* 标题栏 */
        .notice-header {
            background: ${CONFIG.primaryColor};
            color: #fff;
            padding: 14px 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .notice-title {
            font-size: 16px;
            font-weight: 600;
            margin: 0;
        }

        .notice-countdown {
            font-size: 13px;
            background: rgba(255,255,255,0.2);
            padding: 4px 10px;
            border-radius: 20px;
        }

        /* 内容区 */
        .notice-body {
            padding: 24px 20px;
            color: ${CONFIG.textColor};
            font-size: 15px;
            line-height: 1.7;
            text-align: center;
        }

        /* 底部按钮区 */
        .notice-footer {
            padding: 0 16px 16px;
            display: flex;
            gap: 12px;
        }

        .notice-btn {
            flex: 1;
            padding: 12px 20px;
            border: none;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .notice-btn:hover {
            transform: translateY(-2px);
        }

        .notice-btn:active {
            transform: translateY(0);
        }

        .notice-btn-jump {
            background: ${CONFIG.primaryColor};
            color: #fff;
        }

        .notice-btn-jump:hover {
            background: #c1121f;
        }

        .notice-btn-close {
            background: #f1f1f1;
            color: #666;
        }

        .notice-btn-close:hover {
            background: #e0e0e0;
        }

        /* 动画 */
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(30px) scale(0.95);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }

        /* 移动端适配 */
        @media (max-width: 480px) {
            .notice-modal {
                max-width: 100%;
                margin: 10px;
            }
            .notice-body {
                padding: 20px 16px;
            }
            .notice-footer {
                flex-direction: column;
            }
            .notice-btn {
                width: 100%;
            }
        }

        /* 隐藏状态 */
        .notice-hidden {
            display: none !important;
        }
    `;

    // 创建style标签
    const styleTag = document.createElement('style');
    styleTag.id = 'notice-popup-styles';
    styleTag.textContent = styles;
    document.head.appendChild(styleTag);


    // ============ 弹窗创建 ============
    function createNotice() {
        // 遮罩层
        const overlay = document.createElement('div');
        overlay.className = 'notice-overlay';
        overlay.id = 'noticeOverlay';

        // 弹窗HTML结构
        overlay.innerHTML = `
            <div class="notice-modal">
                <div class="notice-header">
                    <h3 class="notice-title">${CONFIG.title}</h3>
                    <span class="notice-countdown" id="noticeCountdown">${CONFIG.autoCloseTime}秒后关闭</span>
                </div>
                <div class="notice-body">
                    ${CONFIG.content}
                </div>
                <div class="notice-footer">
                    <button class="notice-btn notice-btn-jump" id="noticeJumpBtn">
                        ${CONFIG.jumpBtnText}
                    </button>
                    <button class="notice-btn notice-btn-close" id="noticeCloseBtn">
                        ${CONFIG.closeBtnText}
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        // 返回元素引用
        return {
            overlay,
            countdown: overlay.querySelector('#noticeCountdown'),
            jumpBtn: overlay.querySelector('#noticeJumpBtn'),
            closeBtn: overlay.querySelector('#noticeCloseBtn')
        };
    }


    // ============ 功能绑定 ============
    let elements = null;      // DOM元素引用
    let countdownTimer = null; // 倒计时定时器
    let remainingTime = CONFIG.autoCloseTime;

    // 关闭弹窗函数
    function closeNotice() {
        if (!elements) return;

        // 清除定时器
        if (countdownTimer) {
            clearInterval(countdownTimer);
            countdownTimer = null;
        }

        // 添加隐藏类
        elements.overlay.classList.add('notice-hidden');
    }

    // 跳转函数
    function jumpToUrl() {
        closeNotice();
        window.open(CONFIG.jumpUrl, '_blank');
    }

    // 启动倒计时
    function startCountdown() {
        countdownTimer = setInterval(function() {
            remainingTime--;
            
            if (remainingTime <= 0) {
                closeNotice();
            } else {
                elements.countdown.textContent = remainingTime + '秒后关闭';
            }
        }, 1000);
    }

    // 绑定事件
    function bindEvents() {
        // 点击遮罩关闭
        elements.overlay.addEventListener('click', function(e) {
            if (e.target === elements.overlay) {
                closeNotice();
            }
        });

        // 跳转按钮
        elements.jumpBtn.addEventListener('click', jumpToUrl);

        // 关闭按钮
        elements.closeBtn.addEventListener('click', closeNotice);
    }


    // ============ 初始化 ============
    function init() {
        // 等待DOM加载完成
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                elements = createNotice();
                bindEvents();
                startCountdown();
            });
        } else {
            elements = createNotice();
            bindEvents();
            startCountdown();
        }
    }

    // 执行初始化
    init();

})();

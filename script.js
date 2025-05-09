document.addEventListener('DOMContentLoaded', function() {
    // 課程數據
    const courseData = [
        {
            module: '課前必讀',
            chapters: [
                {
                    title: '發刊詞',
                    units: [
                        '幫助你跳出普通人的賽道，成為聰明工作，掌控生活的現代人。',
                        '課程使用說明書'
                    ]
                }
            ]
        },
        {
            module: '個體崛起的新機會：網路和科技',
            chapters: [
                {
                    title: '時代趨勢解構',
                    units: [
                        '職業座標系轉換：從爬山到航海',
                        '財富自由的邏輯：複利和專注力',
                        '內向者的職場槓桿：寫作與非同步'
                    ]
                },
                {
                    title: '生活黑客＆超級個體',
                    units: [
                        '新時代的生產力工作法',
                        '數位工具戰隊：最划算的投資',
                        '個人商業模式：不是叫你創業'
                    ]
                }
            ]
        },
        {
            module: '核心軟實力',
            chapters: [
                {
                    title: '成長思維',
                    units: [
                        '成長思維：付費就是撿便宜',
                        '問題分析：控制三分法'
                    ]
                },
                {
                    title: '現代人的高效學習法',
                    units: [
                        '珍惜你的「新手時刻」',
                        '學習的終極目的：執行力',
                        '三階段閱讀法：如何有效閱讀？',
                        '三階段閱讀法：連結真實經驗、知識萃取'
                    ]
                },
                {
                    title: '精準提問',
                    units: [
                        '強大自學能力的要素：提問能力',
                        '掌握 AI 時代的搜尋與提問技術'
                    ]
                }
            ]
        },
        {
            module: '核心硬實力',
            chapters: [
                {
                    title: '數位工具力',
                    units: [
                        '你使用的生產力工具，決定了你與一般人的差距',
                        '真正有效的第二大腦：不是收藏分類',
                        '真正有效的第二大腦做法：是解決問題的系統',
                        'AI 指令框架全指南'
                    ]
                },
                {
                    title: '人生複利：復盤的技術',
                    units: [
                        '有效復盤（上）：10 倍速成長',
                        '有效復盤：（下）：目標到底怎麼設定'
                    ]
                },
                {
                    title: '寫作',
                    units: [
                        '寫作是平凡人最好的投資',
                        '寫作實戰：怎麼從零開始寫出觀點？'
                    ]
                }
            ]
        },
        {
            module: '個人品牌',
            chapters: [
                {
                    title: '擴大影響力',
                    units: [
                        '如何在自己的圈子中創造影響力？',
                        '為什麼要寫個人使用說明書？',
                        '你應該避開的個人品牌誤區',
                        '不只是人脈，盤點你品牌資產'
                    ]
                }
            ]
        },
        {
            module: '協作力',
            chapters: [
                {
                    title: '團隊協作',
                    units: [
                        '職場中常見的坑：學生思維。',
                        '不靠會議，也能推動專案：非同步溝通',
                        '團隊知識手冊：提高新人訓練、老事重做的效率',
                        '如何談成一場好合作？'
                    ]
                }
            ]
        },
        {
            module: '效率管理',
            chapters: [
                {
                    title: '真正的時間管理',
                    units: [
                        '真正有效的時間管理：不是去管理時間',
                        '我們都用錯了「重要緊急四象線」',
                        '行事曆和待辦清單的正確用法？',
                        '我的任務管理系統'
                    ]
                },
                {
                    title: '精力管理',
                    units: [
                        '保護你的精力，遠離有毒的人',
                        '刻意保養你的內在動機',
                        '打造自己的工作環境、桌面、儀式感'
                    ]
                }
            ]
        },
        {
            module: '副業發展',
            chapters: [
                {
                    title: '發展副業',
                    units: [
                        '什麼是好的產品＆超級個體的商業模式？',
                        '超級個體的多元收入組合',
                        '重複販售你的時間：綜效和複利'
                    ]
                },
                {
                    title: '一人公司＆自由職業態',
                    units: [
                        '超級個體 vs 個人品牌 vs 一人公司',
                        '你適合遠距工作＆自由職業嗎？',
                        '個人化商業模式全解構：免費試吃品到付費產品'
                    ]
                }
            ]
        },
        {
            module: '人生設計',
            chapters: [
                {
                    title: '打破舊有認知',
                    units: [
                        '我們為什麼要工作？不只是薪水'
                    ]
                },
                {
                    title: '重塑自我',
                    units: [
                        '如何做出最好的選擇？價值觀',
                        '選擇擅長但犧牲喜歡，這是一個人生陷阱'
                    ]
                },
                {
                    title: '工作與生活整合',
                    units: [
                        '組合式工作',
                        '問答：朋友、知己、人生伴侶怎麼找？',
                        '找到你真正的事業，告別職業迷茫'
                    ]
                }
            ]
        },
        {
            module: '職人訪談',
            chapters: [
                {
                    title: '超級個體的實踐者',
                    units: [
                        '「超級個體」一詞的提出者：古典老師',
                        '台灣一人公司元老代表：于為暢'
                    ]
                },
                {
                    title: '正職與副業的平衡大師',
                    units: [
                        '電腦玩物站長：Esor',
                        'Podcaster＆電子報：曼尼 Manny'
                    ]
                },
                {
                    title: '跨領域的內容創作者',
                    units: [
                        '旅行部落客：馬摩',
                        '財經 YouTuber：Ray (MoneyXYZ)',
                        '喜劇演員 → 內容創作者：周加恩'
                    ]
                },
                {
                    title: '從正職到一人公司的轉型者',
                    units: [
                        '閱讀前哨站站長：瓦基',
                        '不正常人類研究所：張修修'
                    ]
                }
            ]
        }
    ];

    // 生成課程結構 HTML
    function generateCourseStructure() {
        const modulesContainer = document.getElementById('modules-container');
        
        courseData.forEach((moduleData, moduleIndex) => {
            // 創建模塊元素
            const moduleElement = document.createElement('div');
            moduleElement.className = 'module';
            moduleElement.id = `module-${moduleIndex}`;
            
            // 創建模塊標題
            const moduleHeader = document.createElement('div');
            moduleHeader.className = 'module-header';
            moduleHeader.innerHTML = `
                <div class="module-title">${moduleData.module}</div>
                <div class="toggle-icon">▼</div>
            `;
            moduleHeader.addEventListener('click', function() {
                toggleElement(`module-content-${moduleIndex}`);
                this.querySelector('.toggle-icon').classList.toggle('active');
            });
            
            // 創建模塊內容容器
            const moduleContent = document.createElement('div');
            moduleContent.className = 'module-content active'; // 預設為展開狀態
            moduleContent.id = `module-content-${moduleIndex}`;
            
            // 生成章節
            moduleData.chapters.forEach((chapterData, chapterIndex) => {
                // 創建章節元素
                const chapterElement = document.createElement('div');
                chapterElement.className = 'chapter';
                chapterElement.id = `chapter-${moduleIndex}-${chapterIndex}`;
                
                // 創建章節標題
                const chapterHeader = document.createElement('div');
                chapterHeader.className = 'chapter-header';
                chapterHeader.innerHTML = `
                    <div class="chapter-title">${chapterData.title}</div>
                    <div class="toggle-icon active">▼</div>
                `;
                chapterHeader.addEventListener('click', function() {
                    toggleElement(`chapter-content-${moduleIndex}-${chapterIndex}`);
                    this.querySelector('.toggle-icon').classList.toggle('active');
                });
                
                // 創建章節內容容器
                const chapterContent = document.createElement('div');
                chapterContent.className = 'chapter-content active'; // 預設為展開狀態
                chapterContent.id = `chapter-content-${moduleIndex}-${chapterIndex}`;
                
                // 生成單元
                chapterData.units.forEach((unitTitle, unitIndex) => {
                    const unitElement = document.createElement('div');
                    unitElement.className = 'unit';
                    unitElement.innerHTML = `<div class="unit-title">${unitTitle}</div>`;
                    chapterContent.appendChild(unitElement);
                });
                
                // 將章節標題和內容添加到章節元素
                chapterElement.appendChild(chapterHeader);
                chapterElement.appendChild(chapterContent);
                
                // 將章節元素添加到模塊內容
                moduleContent.appendChild(chapterElement);
            });
            
            // 將模塊標題和內容添加到模塊元素
            moduleElement.appendChild(moduleHeader);
            moduleElement.appendChild(moduleContent);
            
            // 將模塊元素添加到容器
            modulesContainer.appendChild(moduleElement);
        });
        
        // 所有模塊的圖標設為展開狀態
        document.querySelectorAll('.module-header .toggle-icon').forEach(icon => {
            icon.classList.add('active');
        });
    }
    
    // 切換元素的展開/收起狀態
    function toggleElement(elementId) {
        const element = document.getElementById(elementId);
        element.classList.toggle('active');
    }
    
    // 初始化頁面
    generateCourseStructure();
});
document.addEventListener('DOMContentLoaded', function() {
    // 課程數據
    const courseData = [
        {
            module: '課前必讀',
            chapters: [
                {
                    title: '發刊詞',
                    units: [
                        '助你跳出普通人的賽道，成為聰明工作，掌控生活的現代人。',
                        '課程的使用說明書',
                        '生產力工作法'
                    ]
                }
            ]
        },
        {
            module: '核心認知升級',
            chapters: [
                {
                    title: '網路和科技：個體崛起的新機會',
                    units: [
                        '職業座標系轉換：從爬山到航海',
                        '先天資源不如人，怎麼創造優勢？',
                        '財富自由的邏輯：複利和專注力'
                    ]
                },
                {
                    title: '打破舊有認知',
                    units: [
                        '我們為什麼要工作？不只是薪水',
                        '成長思維：付費就是撿便宜',
                        '數位工具戰隊：最划算的投資',
                        '這時代最需要的是「內向型人才」',
                        '個人商業模式：不是叫你創業'
                    ]
                }
            ]
        },
        {
            module: '知識系統（強化你所擅長的事）',
            chapters: [
                {
                    title: '第二大腦的正確用法',
                    units: [
                        '為什麼你用不好筆記工具？（上）',
                        '為什麼你用不好筆記工具？（下）',
                        '學習的終極目的：執行力'
                    ]
                },
                {
                    title: '現代人的高效學習法',
                    units: [
                        '我的閱讀到學習筆記工作流（上）',
                        '我的閱讀到學習筆記工作流（下）',
                        '珍惜你的「新手時刻」',
                        '精準提問：'
                    ]
                },
                {
                    title: '人生複利：復盤的技術',
                    units: [
                        '引入回饋：',
                        '有效復盤（上）：10 倍速成長',
                        '有效復盤：（下）：目標到底怎麼設定'
                    ]
                }
            ]
        },
        {
            module: '時間系統（找到你所熱愛的事）',
            chapters: [
                {
                    title: '真正的時間管理',
                    units: [
                        '為什麼時間無法被管理？',
                        '我的任務管理系統',
                        '行事曆和待辦清單的正確用法？',
                        '保護你的精力，遠離有毒的人'
                    ]
                },
                {
                    title: '熱愛不會憑空出現',
                    units: [
                        '選擇擅長但犧牲喜歡，這是一個人生陷阱',
                        '刻意保養你的內在動機'
                    ]
                }
            ]
        },
        {
            module: '影響力系統（建立關係和商業價值）',
            chapters: [
                {
                    title: '擴大影響力',
                    units: [
                        '寫作是平凡人最好的投資',
                        '為什麼要寫個人使用說明書？'
                    ]
                },
                {
                    title: '團隊協作',
                    units: [
                        '職場中常見的坑：學生思維。',
                        '遠距工作模式的關鍵＆適合你嗎？'
                    ]
                },
                {
                    title: '發展副業',
                    units: [
                        '個人商業模式（上）：什麼是好的產品？',
                        '個人商業模式（下）：免費品的設計',
                        '個人商業模式（中）：重複販售你的時間'
                    ]
                }
            ]
        },
        {
            module: '人生設計',
            chapters: [
                {
                    title: '工作與生活整合',
                    units: [
                        '組合式工作',
                        '控制二分法',
                        '問答：人生伴侶怎麼找？'
                    ]
                }
            ]
        },
        {
            module: '職人訪談直播',
            chapters: [
                {
                    title: '直播訪談',
                    units: [
                        '一年 6 位各領域的新時代專業工作者訪談'
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
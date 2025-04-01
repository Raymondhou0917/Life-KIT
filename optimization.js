document.addEventListener('DOMContentLoaded', function() {
    // 添加行動呼籲按鈕
    addCallToAction();
    
    // 添加學員見證 - 暫時隱藏，等有真實內容時再啟用
    // addTestimonials();
    
    // 添加課程亮點
    addCourseHighlights();
});

// 添加行動呼籲按鈕
function addCallToAction() {
    const courseIntro = document.querySelector('.course-intro');
    if (!courseIntro) return;
    
    const ctaSection = document.createElement('div');
    ctaSection.className = 'cta-section';
    ctaSection.innerHTML = `
        <div class="cta-container">
            <h3>準備好開始你的「超級個體」之路了嗎？</h3>
            <p>立即加入課程，開始聰明工作、掌握生活</p>
            <a href="#" class="cta-button">立即報名</a>
            <p class="cta-note">* 名額有限，報名從速</p>
        </div>
    `;
    
    courseIntro.appendChild(ctaSection);
}

// 添加學員見證
function addTestimonials() {
    const mainContent = document.querySelector('.main-content .container');
    if (!mainContent) return;
    
    const testimonialSection = document.createElement('section');
    testimonialSection.className = 'testimonials';
    testimonialSection.innerHTML = `
        <h2>學員心得分享</h2>
        <div class="testimonial-container">
            <div class="testimonial-card">
                <div class="testimonial-content">
                    <p>「這堂課徹底改變了我的工作方式。我現在能夠更有效地管理時間，建立自己的知識系統，並開始發展個人影響力。」</p>
                </div>
                <div class="testimonial-author">
                    <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="學員照片" class="testimonial-avatar">
                    <div class="testimonial-info">
                        <h4>陳小姐</h4>
                        <p>自由工作者</p>
                    </div>
                </div>
            </div>
            <div class="testimonial-card">
                <div class="testimonial-content">
                    <p>「雷蒙老師的課程不只是理論，更重要的是實際可行的方法。我已經開始建立自己的第二大腦，效率提升了至少30%。」</p>
                </div>
                <div class="testimonial-author">
                    <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="學員照片" class="testimonial-avatar">
                    <div class="testimonial-info">
                        <h4>林先生</h4>
                        <p>產品經理</p>
                    </div>
                </div>
            </div>
            <div class="testimonial-card">
                <div class="testimonial-content">
                    <p>「人生KIT課程幫助我找到了自己真正熱愛的事，現在我不僅工作更有效率，也更加享受工作的過程。」</p>
                </div>
                <div class="testimonial-author">
                    <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="學員照片" class="testimonial-avatar">
                    <div class="testimonial-info">
                        <h4>王小姐</h4>
                        <p>行銷顧問</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // 插入到課程結構之前
    const courseStructure = document.querySelector('.course-structure');
    if (courseStructure) {
        mainContent.insertBefore(testimonialSection, courseStructure);
    } else {
        mainContent.appendChild(testimonialSection);
    }
}

// 添加課程亮點
function addCourseHighlights() {
    const mainContent = document.querySelector('.main-content .container');
    if (!mainContent) return;
    
    const highlightsSection = document.createElement('section');
    highlightsSection.className = 'course-highlights';
    highlightsSection.innerHTML = `
        <h2>課程亮點</h2>
        <div class="highlights-container">
            <div class="highlight-item">
                <div class="highlight-icon">
                    <i class="fas fa-brain"></i>
                </div>
                <h3>實用知識系統</h3>
                <p>學習建立個人化的第二大腦，有效管理和利用你獲取的知識</p>
            </div>
            <div class="highlight-item">
                <div class="highlight-icon">
                    <i class="fas fa-clock"></i>
                </div>
                <h3>高效時間管理</h3>
                <p>掌握現代人的時間管理技巧，找到真正熱愛的事並持續投入</p>
            </div>
            <div class="highlight-item">
                <div class="highlight-icon">
                    <i class="fas fa-users"></i>
                </div>
                <h3>影響力建立</h3>
                <p>學習如何擴大個人影響力，建立人脈網絡和商業價值</p>
            </div>
            <div class="highlight-item">
                <div class="highlight-icon">
                    <i class="fas fa-laptop"></i>
                </div>
                <h3>數位工具應用</h3>
                <p>掌握現代數位工具，提升工作效率和生產力</p>
            </div>
        </div>
    `;
    
    // 插入到課程介紹之後，課程結構之前
    const courseIntro = document.querySelector('.course-intro');
    const courseStructure = document.querySelector('.course-structure');
    if (courseIntro && courseStructure) {
        mainContent.insertBefore(highlightsSection, courseStructure);
    } else if (courseIntro) {
        mainContent.insertBefore(highlightsSection, courseIntro.nextSibling);
    } else {
        mainContent.appendChild(highlightsSection);
    }
}
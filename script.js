const texts = [
    "The sun rises every morning, bringing new opportunities and fresh starts to everyone who wakes up with hope and determination.",
    
    "Technology continues to shape our daily lives, making communication faster and information more accessible than ever before.",
    
    "Healthy eating habits combined with regular exercise can significantly improve both physical and mental wellbeing over time.",
    
    "Learning a new skill opens doors to personal growth and career advancement in ways you might not expect initially.",
    
    "Travel broadens the mind and creates lasting memories that enrich our understanding of different cultures and perspectives.",
    
    "Reading books expands knowledge and vocabulary while providing entertainment and escape from daily stress.",
    
    "Building strong relationships with family and friends creates a support system that lasts through all of life's challenges.",
    
    "Financial planning and saving money wisely can lead to future security and freedom from money-related worries.",
    
    "Taking care of the environment through small daily actions helps preserve our planet for future generations.",
    
    "Music has the power to change moods, bring people together, and express emotions when words are not enough.",
    
    "Cooking at home with fresh ingredients is both a creative outlet and a way to maintain better nutrition.",
    
    "Regular exercise boosts energy levels, improves mood, and helps prevent many common health problems.",
    
    "Setting and achieving small goals builds confidence and momentum for tackling bigger challenges in life.",
    
    "Good sleep habits are essential for mental clarity, emotional balance, and overall physical health.",
    
    "Volunteering time to help others creates community connections and brings personal satisfaction.",
    
    "Learning to manage time effectively reduces stress and increases productivity in all areas of life.",
    
    "Practicing gratitude daily shifts focus toward positive aspects of life and improves overall happiness.",
    
    "Developing good communication skills improves relationships and opens doors in professional settings.",
    
    "Taking breaks from screens and social media helps maintain mental health and real-world connections.",
    
    "Gardening and growing plants connects people with nature and provides fresh, healthy food options.",
    
    "Playing games and puzzles keeps the mind sharp and provides fun ways to challenge yourself.",
    
    "Writing down thoughts and feelings in a journal helps process emotions and track personal growth.",
    
    "Trying new foods and cuisines expands cultural understanding and makes meals more interesting.",
    
    "Walking regularly is an easy exercise that improves health without requiring special equipment.",
    
    "Organizing living and working spaces creates a more peaceful and productive environment.",
    
    "Learning basic first aid skills prepares you to help others in emergency situations.",
    
    "Practicing mindfulness and meditation reduces anxiety and improves focus in daily activities.",
    
    "Building a personal library of favorite books provides endless entertainment and learning opportunities.",
    
    "Developing a morning routine sets a positive tone for the entire day and increases productivity.",
    
    "Taking photos of special moments creates lasting memories that can be shared and treasured forever.",
    
    "Learning to cook simple meals saves money and promotes healthier eating habits.",
    
    "Joining clubs or groups with similar interests builds friendships and expands social networks.",
    
    "Setting boundaries in relationships protects mental health and creates more balanced interactions.",
    
    "Learning to fix basic household problems saves money and builds practical skills.",
    
    "Creating art or music provides emotional expression and stress relief in daily life.",
    
    "Practicing public speaking skills builds confidence and improves career opportunities.",
    
    "Learning a new language opens doors to different cultures and travel experiences.",
    
    "Developing good posture prevents back pain and projects confidence in social situations.",
    
    "Building an emergency fund provides peace of mind and financial security during difficult times.",
    
    "Learning to negotiate effectively helps in both professional and personal situations.",
    
    "Practicing active listening improves relationships and prevents misunderstandings.",
    
    "Creating a budget helps control spending and achieve financial goals more effectively.",
    
    "Learning to say no to unreasonable requests protects time and energy for important priorities.",
    
    "Developing a hobby provides relaxation and enjoyment outside of work responsibilities.",
    
    "Practicing forgiveness reduces anger and improves emotional wellbeing.",
    
    "Learning basic car maintenance saves money and prevents breakdowns.",
    
    "Building professional networks creates opportunities for career advancement and support.",
    
    "Practicing regular digital detox improves mental health and real-world connections."
];

let currentTextIndex = 0;

// Game State
let balance = parseFloat(localStorage.getItem('typeCashBalance')) || 0;
let level = parseInt(localStorage.getItem('typeCashLevel')) || 1;
let tasksCompleted = parseInt(localStorage.getItem('typeCashTasks')) || 0;
let dailyStreak = parseInt(localStorage.getItem('typeCashStreak')) || 0;
let lastLogin = localStorage.getItem('typeCashLastLogin');
let isPremiumMode = false;
let premiumEndTime = null;
let popunderCount = parseInt(localStorage.getItem('popunderCount')) || 0;
let startTime = null;
let currentWPM = 0;
let currentAccuracy = 100;

// Timer variables
let timerInterval = null;
let elapsedSeconds = 0;
let premiumTimer = null;

// Navigation System
function navigateTo(page) {
    // Remove active class from all nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to clicked nav item
    event.target.classList.add('active');
    
    // Handle navigation
    switch(page) {
        case 'typing':
            showTypingInterface();
            break;
        case 'withdraw':
            showWithdrawalPopup();
            break;
        case 'statistics':
            showStatistics();
            break;
        case 'leaderboard':
            showLeaderboard();
            break;
        case 'settings':
            showSettings();
            break;
    }
}

function showTypingInterface() {
    // Show typing interface (default view)
    const centerConsole = document.querySelector('.center-console');
    if (centerConsole) {
        // This is already the default view, so we just ensure it's visible
        centerConsole.style.display = 'flex';
    }
}

function showStatistics() {
    // Show statistics popup
    const popup = document.createElement('div');
    popup.className = 'level-up-popup';
    popup.innerHTML = `
        <div class="popup-content">
            <h2>📊 Your Statistics</h2>
            <div style="text-align: left; margin: 20px 0;">
                <p><strong>Total Earnings:</strong> $${balance.toFixed(2)}</p>
                <p><strong>Current Level:</strong> ${level}</p>
                <p><strong>Daily Streak:</strong> ${dailyStreak} days</p>
                <p><strong>Tasks Completed:</strong> ${tasksCompleted}</p>
                <p><strong>Current WPM:</strong> ${currentWPM}</p>
                <p><strong>Accuracy Rate:</strong> ${currentAccuracy}%</p>
                <p><strong>Tasks Until Next Level:</strong> ${10 - tasksCompleted}</p>
            </div>
            <button onclick="this.parentElement.parentElement.remove()">Close</button>
        </div>
    `;
    document.body.appendChild(popup);
}

function showLeaderboard() {
    // Show expanded leaderboard popup
    const popup = document.createElement('div');
    popup.className = 'level-up-popup';
    popup.innerHTML = `
        <div class="popup-content">
            <h2>🏆 Global Leaderboard</h2>
            <div style="text-align: left; margin: 20px 0;">
                ${generateExpandedLeaderboard()}
            </div>
            <button onclick="this.parentElement.parentElement.remove()">Close</button>
        </div>
    `;
    document.body.appendChild(popup);
}

function generateExpandedLeaderboard() {
    const topEarners = [
        { name: "Sarah_99", earnings: 12.50, country: "🇺🇸", level: 15 },
        { name: "CryptoKing", earnings: 8.75, country: "🇬🇧", level: 12 },
        { name: "TypeMaster", earnings: 6.25, country: "🇨🇦", level: 10 },
        { name: "FastFingers", earnings: 4.80, country: "🇦🇺", level: 8 },
        { name: "MoneyTyper", earnings: 3.15, country: "🇩🇪", level: 6 },
        { name: "SpeedDemon", earnings: 2.90, country: "🇫🇷", level: 5 },
        { name: "TextWizard", earnings: 2.45, country: "🇯🇵", level: 5 },
        { name: "KeyboardNinja", earnings: 2.10, country: "🇮🇳", level: 4 }
    ];
    
    return topEarners.map((earner, index) => `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; margin-bottom: 8px; background: rgba(255,255,255,0.05); border-radius: 8px;">
            <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-weight: bold; color: ${index < 3 ? '#ffd700' : '#fff'};">${index + 1}.</span>
                <span>${earner.country}</span>
                <span>${earner.name}</span>
            </div>
            <div style="text-align: right;">
                <div style="color: var(--accent); font-weight: bold;">$${earner.earnings.toFixed(2)}</div>
                <div style="font-size: 0.8rem; color: #888;">Level ${earner.level}</div>
            </div>
        </div>
    `).join('');
}

function showSettings() {
    // Show settings popup
    const popup = document.createElement('div');
    popup.className = 'level-up-popup';
    popup.innerHTML = `
        <div class="popup-content">
            <h2>⚙️ Settings</h2>
            <div style="text-align: left; margin: 20px 0;">
                <div style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px;">Sound Effects</label>
                    <select style="width: 100%; padding: 8px; background: var(--card); border: 1px solid var(--border); border-radius: 5px; color: var(--text);">
                        <option>Enabled</option>
                        <option>Disabled</option>
                    </select>
                </div>
                <div style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px;">Theme</label>
                    <select style="width: 100%; padding: 8px; background: var(--card); border: 1px solid var(--border); border-radius: 5px; color: var(--text);">
                        <option>Dark Mode</option>
                        <option>Light Mode</option>
                        <option>Auto</option>
                    </select>
                </div>
                <div style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px;">Difficulty</label>
                    <select style="width: 100%; padding: 8px; background: var(--card); border: 1px solid var(--border); border-radius: 5px; color: var(--text);">
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                    </select>
                </div>
                <div style="margin-bottom: 15px;">
                    <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                        <input type="checkbox" checked>
                        <span>Show typing hints</span>
                    </label>
                </div>
                <div style="margin-bottom: 15px;">
                    <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                        <input type="checkbox" checked>
                        <span>Enable animations</span>
                    </label>
                </div>
            </div>
            <button onclick="this.parentElement.parentElement.remove()">Close</button>
        </div>
    `;
    document.body.appendChild(popup);
}

// Initialize premium status on page load
function initializePremium() {
    // Load saved premium end time
    const savedPremiumEndTime = localStorage.getItem('premiumEndTime');
    if (savedPremiumEndTime) {
        premiumEndTime = parseInt(savedPremiumEndTime);
    }
    
    // Check premium status
    checkPremiumStatus();
    
    // Update premium button
    updatePremiumButton();
}

// Premium System Functions
function checkPremiumStatus() {
    if (premiumEndTime && Date.now() < premiumEndTime) {
        isPremiumMode = true;
        const remainingTime = Math.ceil((premiumEndTime - Date.now()) / 1000);
        updatePremiumButton(remainingTime);
        startPremiumTimer(remainingTime);
    } else {
        isPremiumMode = false;
        premiumEndTime = null;
        updatePremiumButton();
    }
}

function startPremiumTimer(seconds) {
    if (premiumTimer) clearInterval(premiumTimer);
    
    premiumTimer = setInterval(() => {
        seconds--;
        updatePremiumButton(seconds);
        
        if (seconds <= 0) {
            clearInterval(premiumTimer);
            isPremiumMode = false;
            premiumEndTime = null;
            updatePremiumButton();
            showPremiumExpiredPopup();
        }
    }, 1000);
}

function updatePremiumButton(remainingTime = null) {
    const premiumBtn = document.getElementById('premium-btn');
    const premiumBtnMobile = document.getElementById('premium-btn-mobile');
    
    if (isPremiumMode && remainingTime !== null) {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        const timeText = `2x Active: ${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        if (premiumBtn) {
            premiumBtn.innerText = timeText;
            premiumBtn.classList.add('active');
        }
        if (premiumBtnMobile) {
            premiumBtnMobile.innerText = timeText;
            premiumBtnMobile.classList.add('active');
        }
    } else {
        const buttonText = `Unlock Premium`;
        
        if (premiumBtn) {
            premiumBtn.innerText = buttonText;
            premiumBtn.classList.remove('active');
        }
        if (premiumBtnMobile) {
            premiumBtnMobile.innerText = buttonText;
            premiumBtnMobile.classList.remove('active');
        }
    }
}

function handlePremiumUnlock() {
    if (isPremiumMode) {
        showPremiumActivePopup();
        return;
    }
    
    // Directly open popunder ad without any popup
    triggerPopunderAd();
}

function watchPopunderAd() {
    // Remove the ad popup first
    document.querySelector('.level-up-popup').remove();
    
    // Trigger actual popunder ad directly
    triggerPopunderAd();
    
    // Unlock premium immediately after triggering the ad
    isPremiumMode = true;
    premiumEndTime = Date.now() + (2 * 60 * 1000); // 2 minutes
    localStorage.setItem('premiumEndTime', premiumEndTime);
    
    updatePremiumButton(120); // 2 minutes in seconds
    startPremiumTimer(120);
    
    showPremiumUnlockedPopup();
}

function triggerPopunderAd() {
    // Create and trigger actual popunder ad
    const popunderWindow = window.open('', '_blank', 'width=800,height=600,left=100,top=100,scrollbars=yes,toolbar=yes,location=yes,resizable=yes');
    
    if (popunderWindow) {
        // Load the popunder ad script in the new window
        popunderWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Advertisement</title>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <script src="https://pl29015767.profitablecpmratenetwork.com/2d/cb/f1/2dcbf16797a4752c55580fa4140a27da.js"></script>
                <style>
                    body {
                        margin: 0;
                        padding: 0;
                        background: #000;
                        font-family: Arial, sans-serif;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        color: #666;
                    }
                    .loading {
                        text-align: center;
                    }
                    .loading-spinner {
                        border: 4px solid #333;
                        border-top: 4px solid #00ff88;
                        border-radius: 50%;
                        width: 40px;
                        height: 40px;
                        animation: spin 1s linear infinite;
                        margin: 0 auto 20px;
                    }
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                </style>
            </head>
            <body>
                <div class="loading">
                    <div class="loading-spinner"></div>
                    <h2>Loading Advertisement...</h2>
                    <p>Please wait while the ad loads</p>
                </div>
                <script>
                    // Fallback ad loading
                    setTimeout(function() {
                        document.body.innerHTML = \`
                            <div style="text-align: center; padding: 40px;">
                                <h2 style="color: #00ff88;">Advertisement Space</h2>
                                <p style="color: #666;">This is an advertisement window</p>
                                <p style="color: #888; font-size: 14px;">You can close this window when you're done</p>
                                <button onclick="window.close()" style="
                                    background: #00ff88;
                                    color: #000;
                                    border: none;
                                    padding: 10px 20px;
                                    border-radius: 5px;
                                    cursor: pointer;
                                    font-weight: bold;
                                    margin-top: 20px;
                                ">Close Window</button>
                            </div>
                        \`;
                    }, 3000);
                </script>
            </body>
            </html>
        `);
        
        // Focus on the new window to ensure it's visible
        popunderWindow.focus();
        
        // Monitor when the window is closed
        const checkWindowClosed = setInterval(() => {
            if (popunderWindow.closed) {
                clearInterval(checkWindowClosed);
                // Start premium timer when user closes the ad
                activatePremiumAfterAd();
            }
        }, 1000);
    }
    
    // Alternative method: trigger popunder through click simulation
    const popunderLink = document.createElement('a');
    popunderLink.href = 'about:blank';
    popunderLink.target = '_blank';
    popunderLink.style.display = 'none';
    document.body.appendChild(popunderLink);
    
    // Simulate click to trigger popunder
    const clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
        ctrlKey: true,
        shiftKey: true
    });
    popunderLink.dispatchEvent(clickEvent);
    
    // Clean up
    setTimeout(() => {
        if (popunderLink.parentNode) {
            popunderLink.parentNode.removeChild(popunderLink);
        }
    }, 1000);
}

function activatePremiumAfterAd() {
    // Unlock premium for 2 minutes after user closes the ad
    isPremiumMode = true;
    premiumEndTime = Date.now() + (2 * 60 * 1000); // 2 minutes
    localStorage.setItem('premiumEndTime', premiumEndTime);
    
    updatePremiumButton(120); // 2 minutes in seconds
    startPremiumTimer(120);
    
    showPremiumUnlockedPopup();
}

function completeAdWatch() {
    // Remove ad watching popup
    document.querySelector('.level-up-popup').remove();
    popup.innerHTML = `
        <div class="popup-content">
            <h2>🎉 Premium Mode Unlocked!</h2>
            <div class="bonus">2X EARNINGS ACTIVATED</div>
            <p>You now have <strong>2 minutes</strong> of double earnings!</p>
            <p>Complete as many tasks as possible to maximize your earnings!</p>
            <button onclick="this.parentElement.parentElement.remove()">Start Earning 2x!</button>
        </div>
    `;
    document.body.appendChild(popup);
}

function showPremiumActivePopup() {
    const remainingTime = Math.ceil((premiumEndTime - Date.now()) / 1000);
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    
    const popup = document.createElement('div');
    popup.className = 'level-up-popup';
    popup.innerHTML = `
        <div class="popup-content">
            <h2> Premium Mode Active</h2>
            <div class="bonus">2X EARNINGS</div>
            <p>Time remaining: <strong>${minutes}:${seconds.toString().padStart(2, '0')}</strong></p>
            <p>Keep typing to maximize your double earnings!</p>
            <button onclick="this.parentElement.parentElement.remove()">Continue Typing</button>
        </div>
    `;
    document.body.appendChild(popup);
}

function showPremiumExpiredPopup() {
    const popup = document.createElement('div');
    popup.className = 'level-up-popup';
    popup.innerHTML = `
        <div class="popup-content">
            <h2> Premium Mode Expired</h2>
            <p>Your 2x earnings period has ended.</p>
            <p>Watch 1 more popunder ad to unlock premium again!</p>
            <button onclick="this.parentElement.parentElement.remove()">Got it</button>
        </div>
    `;
    document.body.appendChild(popup);
}

function showPremiumUnlockedPopup() {
    const popup = document.createElement('div');
    popup.className = 'level-up-popup';
    popup.innerHTML = `
        <div class="popup-content">
            <h2> Premium Mode Unlocked!</h2>
            <div class="bonus">2X EARNINGS ACTIVATED</div>
            <p>You now have <strong>2 minutes</strong> of double earnings!</p>
            <p>Complete as many tasks as possible to maximize your earnings!</p>
            <button onclick="this.parentElement.parentElement.remove()">Start Earning 2x!</button>
        </div>
    `;
    document.body.appendChild(popup);
}

// Modify earnings calculation to include premium multiplier
function calculateEarnings(baseAmount) {
    if (isPremiumMode) {
        return baseAmount * 2; // 2x earnings
    }
    return baseAmount;
}

// Initialize premium status on page load
function initializePremium() {
    // Load saved premium end time
    const savedPremiumEndTime = localStorage.getItem('premiumEndTime');
    if (savedPremiumEndTime) {
        premiumEndTime = parseInt(savedPremiumEndTime);
    }
    
    // Check premium status
    checkPremiumStatus();
    
    // Update premium button
    updatePremiumButton();
}

// Initialize UI - Update all elements
function updateAllUIElements() {
    // Dashboard elements
    const balanceEl = document.getElementById('balance');
    const levelEl = document.getElementById('level');
    const wpmEl = document.getElementById('wpm');
    const accuracyEl = document.getElementById('accuracy');
    const streakEl = document.getElementById('streak');
    
    // Mobile elements
    const mobileBalanceEl = document.getElementById('balance-mobile');
    const mobileLevelEl = document.getElementById('level-mobile');
    const mobileWpmEl = document.getElementById('wpm-mobile');
    const mobileAccuracyEl = document.getElementById('accuracy-mobile');
    const mobileStreakEl = document.getElementById('streak-mobile');
    
    // Update dashboard elements
    if (balanceEl) balanceEl.innerText = balance.toFixed(2);
    if (levelEl) levelEl.innerText = level;
    if (wpmEl) wpmEl.innerText = currentWPM;
    if (accuracyEl) accuracyEl.innerText = currentAccuracy;
    if (streakEl) streakEl.innerText = dailyStreak;
    
    // Update mobile elements
    if (mobileBalanceEl) mobileBalanceEl.innerText = balance.toFixed(2);
    if (mobileLevelEl) mobileLevelEl.innerText = level;
    if (mobileWpmEl) mobileWpmEl.innerText = currentWPM;
    if (mobileAccuracyEl) mobileAccuracyEl.innerText = currentAccuracy;
    if (mobileStreakEl) mobileStreakEl.innerText = `${dailyStreak} days`;
}

// Initialize UI
updateAllUIElements();
initializePremium();

// Check daily streak

function showAd(type) {
    switch(type) {
        case 'banner':
            // Banner ads are handled by HTML scripts
            break;
        case 'social':
            // Social bar ads are handled by HTML scripts
            break;
        case 'popunder':
            // Popunder ads are handled by triggerPopunderAd function
            break;
        case 'rewarded':
            console.log("REWARDED VIDEO AD: Would show video ad for premium unlock");
            setTimeout(() => {
                isPremiumMode = true;
                updatePremiumButton();
                alert("Premium Mode Activated! Double earnings for next hour!");
            }, 2000);
            break;
    }
}

function checkDailyStreak() {
    const today = new Date().toDateString();
    if (lastLogin !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (lastLogin === yesterday.toDateString()) {
            dailyStreak++;
            balance += 0.50;
            localStorage.setItem('typeCashStreak', dailyStreak);
            localStorage.setItem('typeCashBalance', balance);
            document.getElementById('balance').innerText = balance.toFixed(2);
            alert(`🔥 Daily Streak: ${dailyStreak} days! $0.50 bonus added!`);
        } else {
            dailyStreak = 1;
            localStorage.setItem('typeCashStreak', dailyStreak);
        }
        
        localStorage.setItem('typeCashLastLogin', today);
    }
    
    updateStreakDisplay();
}

function updateStreakDisplay() {
    const streakElement = document.getElementById('streak');
    const desktopStreakElement = document.getElementById('streak-desktop');
    
    if (streakElement) {
        streakElement.innerText = `${dailyStreak} days`;
    }
    if (desktopStreakElement) {
        desktopStreakElement.innerText = `${dailyStreak} days`;
    }
}

function updateWithdrawalProgress() {
    const progress = (balance / 50) * 100;
    const remaining = (50 - balance).toFixed(2);
    
    // Update desktop progress bar
    const progressElement = document.getElementById('withdrawal-progress');
    if (progressElement) {
        progressElement.style.width = `${Math.min(progress, 100)}%`;
    }
    
    // Update mobile progress bar
    const mobileProgressElement = document.getElementById('withdrawal-progress-mobile');
    if (mobileProgressElement) {
        mobileProgressElement.style.width = `${Math.min(progress, 100)}%`;
    }
    
    // Update desktop text
    const progressText = document.getElementById('withdrawal-text');
    if (progressText) {
        progressText.innerText = `${remaining} until $50.00 Payout`;
    }
    
    // Update mobile text
    const mobileProgressText = document.getElementById('withdrawal-text-mobile');
    if (mobileProgressText) {
        mobileProgressText.innerText = `${remaining} until $50.00 Payout`;
    }
}

function updateLeaderboard() {
    const leaderboardElement = document.getElementById('leaderboard-list');
    if (leaderboardElement) {
        const fakeEarners = [
            { name: "Sarah_99", earnings: 12.50 },
            { name: "CryptoKing", earnings: 8.75 },
            { name: "TypeMaster", earnings: 6.25 },
            { name: "FastFingers", earnings: 4.80 },
            { name: "MoneyTyper", earnings: 3.15 }
        ];
        
        leaderboardElement.innerHTML = fakeEarners.map((earner, index) => 
            `<div class="leaderboard-item">
                <span>${index + 1}. ${earner.name}</span>
                <span>$${earner.earnings.toFixed(2)}</span>
            </div>`
        ).join('');
    }
}


function loadNewText() {
    // Get the current text based on index
    const currentText = texts[currentTextIndex];
    
    // Update both desktop and mobile target text elements
    const desktopTarget = document.getElementById('target-text');
    const mobileTarget = document.getElementById('target-text-mobile');
    
    if (desktopTarget) desktopTarget.innerText = currentText;
    if (mobileTarget) mobileTarget.innerText = currentText;
    
    // Clear input fields
    const desktopInput = document.getElementById('input-field');
    const mobileInput = document.getElementById('input-field-mobile');
    
    if (desktopInput) desktopInput.value = "";
    if (mobileInput) mobileInput.value = "";
    
    // Reset timer and stats
    startTime = null;
    elapsedSeconds = 0;
    currentWPM = 0;
    currentAccuracy = 100;
    
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    
    updateStats();
    updateSubmitButton();
    
    // Show ads
    showAd('banner');
    
}

function moveToNextText() {
    // Move to the next paragraph
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    
    // If we've completed all texts and looped back, show completion message
    if (currentTextIndex === 0) {
        showAllTextsCompletedMessage();
    }
    
    // Load the new text
    loadNewText();
}

function showAllTextsCompletedMessage() {
    const popup = document.createElement('div');
    popup.className = 'level-up-popup';
    popup.innerHTML = `
        <div class="popup-content">
            <h2>🎉 All Paragraphs Completed!</h2>
            <div class="bonus">CYCLE COMPLETE</div>
            <p>You've completed all ${texts.length} paragraphs!</p>
            <p>Starting again from the beginning with new opportunities to earn.</p>
            <button onclick="this.parentElement.parentElement.remove()">Continue Typing</button>
        </div>
    `;
    document.body.appendChild(popup);
}

function calculateWPM() {
    if (!startTime) return 0;
    
    const elapsedMinutes = elapsedSeconds / 60;
    const wordsTyped = document.getElementById('input-field').value.trim().split(/\s+/).length;
    
    return Math.round(wordsTyped / elapsedMinutes) || 0;
}

function calculateAccuracy() {
    const input = document.getElementById('input-field').value;
    const target = document.getElementById('target-text').innerText;
    
    if (input.length === 0) return 100;
    
    let correct = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === target[i]) {
            correct++;
        }
    }
    
    return Math.round((correct / input.length) * 100);
}

function updateStats() {
    currentWPM = calculateWPM();
    currentAccuracy = calculateAccuracy();
    
    // Update all UI elements
    updateAllUIElements();
    updateWithdrawalProgress();
}

function updateSubmitButton() {
    // Dashboard elements
    const input = document.getElementById('input-field');
    const target = document.getElementById('target-text');
    const submitBtn = document.getElementById('next-task');
    
    // Mobile elements
    const mobileInput = document.getElementById('input-field-mobile');
    const mobileTarget = document.getElementById('target-text-mobile');
    const mobileSubmitBtn = document.getElementById('next-task-mobile');
    
    // Update dashboard button
    if (input && target && submitBtn) {
        const isComplete = input.value.length === target.innerText.length;
        const isAccurate = currentAccuracy >= 95;
        submitBtn.disabled = !(isComplete && isAccurate);
        
        if (submitBtn.disabled) {
            submitBtn.classList.add('disabled');
        } else {
            submitBtn.classList.remove('disabled');
        }
    }
    
    // Update mobile button
    if (mobileInput && mobileTarget && mobileSubmitBtn) {
        const isComplete = mobileInput.value.length === mobileTarget.innerText.length;
        const isAccurate = currentAccuracy >= 95;
        mobileSubmitBtn.disabled = !(isComplete && isAccurate);
        
        if (mobileSubmitBtn.disabled) {
            mobileSubmitBtn.classList.add('disabled');
        } else {
            mobileSubmitBtn.classList.remove('disabled');
        }
    }
}

function checkTypingAccuracy() {
    // Dashboard elements
    const input = document.getElementById('input-field');
    const target = document.getElementById('target-text');
    const targetElement = document.getElementById('target-text');
    
    // Mobile elements
    const mobileInput = document.getElementById('input-field-mobile');
    const mobileTarget = document.getElementById('target-text-mobile');
    const mobileTargetElement = document.getElementById('target-text-mobile');
    
    // Update dashboard typing display
    if (input && target && targetElement) {
        let displayText = "";
        let wasCorrect = true;
        
        for (let i = 0; i < target.innerText.length; i++) {
            if (i < input.value.length) {
                if (input.value[i] === target.innerText[i]) {
                    displayText += `<span class="correct">${target.innerText[i]}</span>`;
                } else {
                    displayText += `<span class="incorrect">${target.innerText[i]}</span>`;
                    wasCorrect = false;
                }
            } else {
                displayText += target.innerText[i];
            }
        }
        
        targetElement.innerHTML = displayText;
        
        // Add shake animation for wrong input
        if (!wasCorrect && input.value.length > 0) {
            input.classList.add('shake');
            setTimeout(() => input.classList.remove('shake'), 300);
        }
        
        // Add correct flash for perfect typing
        if (wasCorrect && input.value.length === target.innerText.length && currentAccuracy === 100) {
            targetElement.classList.add('correct-flash');
            setTimeout(() => targetElement.classList.remove('correct-flash'), 300);
        }
    }
    
    // Update mobile typing display
    if (mobileInput && mobileTarget && mobileTargetElement) {
        let displayText = "";
        let wasCorrect = true;
        
        for (let i = 0; i < mobileTarget.innerText.length; i++) {
            if (i < mobileInput.value.length) {
                if (mobileInput.value[i] === mobileTarget.innerText[i]) {
                    displayText += `<span class="correct">${mobileTarget.innerText[i]}</span>`;
                } else {
                    displayText += `<span class="incorrect">${mobileTarget.innerText[i]}</span>`;
                    wasCorrect = false;
                }
            } else {
                displayText += mobileTarget.innerText[i];
            }
        }
        
        mobileTargetElement.innerHTML = displayText;
        
        // Add shake animation for wrong input
        if (!wasCorrect && mobileInput.value.length > 0) {
            mobileInput.classList.add('shake');
            setTimeout(() => mobileInput.classList.remove('shake'), 300);
        }
        
        // Add correct flash for perfect typing
        if (wasCorrect && mobileInput.value.length === mobileTarget.innerText.length && currentAccuracy === 100) {
            mobileTargetElement.classList.add('correct-flash');
            setTimeout(() => mobileTargetElement.classList.remove('correct-flash'), 300);
        }
    }
}

function levelUp() {
    level++;
    tasksCompleted = 0;
    localStorage.setItem('typeCashLevel', level);
    
    // Update all level displays
    document.getElementById('level').innerText = level;
    const mobileLevel = document.getElementById('level-mobile');
    if (mobileLevel) mobileLevel.innerText = level;
    
    // Show level up popup
    const popup = document.createElement('div');
    popup.className = 'level-up-popup';
    popup.innerHTML = `
        <div class="popup-content">
            <h2>🎉 LEVEL UP!</h2>
            <p>You reached Level ${level}!</p>
            <p class="bonus">+$1.00 Bonus!</p>
            <button onclick="this.parentElement.parentElement.remove()">Continue</button>
        </div>
    `;
    document.body.appendChild(popup);
    
    balance += 1.00;
    localStorage.setItem('typeCashBalance', balance);
    document.getElementById('balance').innerText = balance.toFixed(2);
    const mobileBalance = document.getElementById('balance-mobile');
    if (mobileBalance) mobileBalance.innerText = balance.toFixed(2);
}

function showWithdrawalPopup() {
    const popup = document.createElement('div');
    popup.className = 'level-up-popup';
    
    if (balance >= 50) {
        popup.innerHTML = `
            <div class="popup-content">
                <h2> Withdraw Funds</h2>
                <p>Available Balance: $${balance.toFixed(2)}</p>
                <p>Select your withdrawal method:</p>
                <div style="display: flex; flex-direction: column; gap: 10px; margin: 20px 0;">
                    <button class="withdraw-btn" onclick="processWithdrawal('paypal')">PayPal</button>
                    <button class="withdraw-btn" onclick="processWithdrawal('crypto')">Cryptocurrency</button>
                </div>
                <button onclick="this.parentElement.parentElement.remove()">Cancel</button>
            </div>
        `;
    } else {
        const remaining = (50 - balance).toFixed(2);
        popup.innerHTML = `
            <div class="popup-content">
                <h2> Insufficient Funds</h2>
                <p>Current Balance: $${balance.toFixed(2)}</p>
                <p>You need $${remaining} more to withdraw via PayPal/Crypto.</p>
                <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px; margin: 20px 0;">
                    <p style="margin: 0; font-size: 0.9rem;"> Account verification required for withdrawals</p>
                </div>
                                <button onclick="this.parentElement.parentElement.remove()" style="background: #666;">Keep Typing</button>
            </div>
        `;
    }
    
    document.body.appendChild(popup);
}
function verifyAccount() {
    // Remove current popup
    document.querySelector('.level-up-popup').remove();
    
    // Show verification popup with ad
    const popup = document.createElement('div');
    popup.className = 'level-up-popup';
    popup.innerHTML = `
        <div class="popup-content">
            <h2>🔐 Account Verification</h2>
            <p>Watch this short video to verify your account and prevent bot activity.</p>
            <div style="background: #111; border: 1px dashed #333; padding: 40px 20px; margin: 20px 0; border-radius: 10px;">
                <p style="color: #444; font-size: 12px;">REWARDED VIDEO AD</p>
                <p style="color: #666; font-size: 10px; margin-top: 10px;">Verifying...</p>
            </div>
            <button onclick="completeVerification()" style="background: #666;">I'm not a robot</button>
        </div>
    `;
    
    document.body.appendChild(popup);
    
    // Simulate ad watching
    setTimeout(() => {
        showAd('rewarded');
    }, 1000);
}

function completeVerification() {
    document.querySelector('.level-up-popup').remove();
    alert("✅ Account verified! You can now withdraw when you reach $50.00.");
}

function processWithdrawal(method) {
    alert(`🎉 Withdrawal initiated via ${method.toUpperCase()}!\n\nYou should receive your funds within 24-48 hours.\n\nAmount: $${balance.toFixed(2)}`);
    
    // Reset balance after withdrawal
    balance = 0;
    localStorage.setItem('typeCashBalance', balance);
    document.getElementById('balance').innerText = balance.toFixed(2);
    const mobileBalance = document.getElementById('balance-mobile');
    if (mobileBalance) mobileBalance.innerText = balance.toFixed(2);
    updateWithdrawalProgress();
}

// Event Listeners for Dashboard
document.addEventListener('DOMContentLoaded', () => {
    // Dashboard input field
    const dashboardInput = document.getElementById('input-field');
    if (dashboardInput) {
        dashboardInput.addEventListener('input', (e) => {
            // Start timer on first keystroke
            if (!startTime && e.target.value.length > 0) {
                startTime = Date.now();
                timerInterval = setInterval(() => {
                    elapsedSeconds++;
                    updateStats();
                }, 1000);
            }
            
            checkTypingAccuracy();
            updateStats();
            updateSubmitButton();
        });

        dashboardInput.addEventListener('keypress', (e) => {
            // Random social bar ads
            if (Math.random() < 0.1) {
                showAd('social');
            }
        });
    }

    // Dashboard submit button
    const dashboardSubmit = document.getElementById('next-task');
    if (dashboardSubmit) {
        dashboardSubmit.addEventListener('click', () => {
            const input = document.getElementById('input-field');
            const target = document.getElementById('target-text');
            
            if (input && target && input.value.length === target.innerText.length && currentAccuracy >= 95) {
                tasksCompleted++;
                
                // Calculate earnings
                let earnings = 0.05;
                if (isPremiumMode) {
                    earnings *= 2;
                }
                
                balance += earnings;
                localStorage.setItem('typeCashBalance', balance);
                localStorage.setItem('typeCashTasks', tasksCompleted);
                
                // Update all UI elements
                updateAllUIElements();
                
                // Check for level up
                if (tasksCompleted >= 10) {
                    levelUp();
                } else {
                    alert(`Success! $${earnings.toFixed(2)} added to your balance.`);
                }
                
                moveToNextText();
                updateLeaderboard();
            }
        });
    }

    // Mobile input field
    const mobileInput = document.getElementById('input-field-mobile');
    if (mobileInput) {
        mobileInput.addEventListener('input', (e) => {
            // Start timer on first keystroke
            if (!startTime && e.target.value.length > 0) {
                startTime = Date.now();
                timerInterval = setInterval(() => {
                    elapsedSeconds++;
                    updateStats();
                }, 1000);
            }
            
            checkTypingAccuracy();
            updateStats();
            updateSubmitButton();
        });

        mobileInput.addEventListener('keypress', (e) => {
            // Random social bar ads
            if (Math.random() < 0.1) {
                showAd('social');
            }
        });
    }

    // Mobile submit button
    const mobileSubmit = document.getElementById('next-task-mobile');
    if (mobileSubmit) {
        mobileSubmit.addEventListener('click', () => {
            const input = document.getElementById('input-field-mobile');
            const target = document.getElementById('target-text-mobile');
            
            if (input && target && input.value.length === target.innerText.length && currentAccuracy >= 95) {
                tasksCompleted++;
                
                // Calculate earnings
                let earnings = 0.05;
                if (isPremiumMode) {
                    earnings *= 2;
                }
                
                balance += earnings;
                localStorage.setItem('typeCashBalance', balance);
                localStorage.setItem('typeCashTasks', tasksCompleted);
                
                // Update all UI elements
                updateAllUIElements();
                
                // Check for level up
                if (tasksCompleted >= 10) {
                    levelUp();
                } else {
                    alert(`Success! $${earnings.toFixed(2)} added to your balance.`);
                }
                
                moveToNextText();
                updateLeaderboard();
            }
        });
    }

    // Prevent copy-paste in typing input fields
    function preventCopyPaste(inputElement) {
        if (inputElement) {
            // Prevent paste
            inputElement.addEventListener('paste', (e) => {
                e.preventDefault();
                return false;
            });
            
            // Prevent cut
            inputElement.addEventListener('cut', (e) => {
                e.preventDefault();
                return false;
            });
            
            // Prevent copy
            inputElement.addEventListener('copy', (e) => {
                e.preventDefault();
                return false;
            });
            
            // Prevent context menu
            inputElement.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                return false;
            });
            
            // Prevent drag and drop
            inputElement.addEventListener('dragover', (e) => {
                e.preventDefault();
                return false;
            });
            
            inputElement.addEventListener('drop', (e) => {
                e.preventDefault();
                return false;
            });
        }
    }
    
    preventCopyPaste(dashboardInput);
    preventCopyPaste(mobileInput);
    
    // Premium buttons
    const premiumBtn = document.getElementById('premium-btn');
    const mobilePremiumBtn = document.getElementById('premium-btn-mobile');
    
    if (premiumBtn) {
        premiumBtn.addEventListener('click', handlePremiumUnlock);
    }
    
    if (mobilePremiumBtn) {
        mobilePremiumBtn.addEventListener('click', handlePremiumUnlock);
    }
    
    // Initialize
    updateLeaderboard();
    updateWithdrawalProgress();
    updatePremiumButton();
});

// Initial Load
loadNewText();
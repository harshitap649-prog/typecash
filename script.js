const texts = [
    "Digital marketing is the component of marketing that uses the internet and online based digital technologies to promote products and services.",
    "Artificial intelligence is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by animals and humans.",
    "Cryptocurrency is a digital currency in which transactions are verified and records maintained by a decentralized system using cryptography."
];

// Game State
let balance = parseFloat(localStorage.getItem('typeCashBalance')) || 0;
let level = parseInt(localStorage.getItem('typeCashLevel')) || 1;
let tasksCompleted = parseInt(localStorage.getItem('typeCashTasks')) || 0;
let dailyStreak = parseInt(localStorage.getItem('typeCashStreak')) || 0;
let lastLogin = localStorage.getItem('typeCashLastLogin');
let isPremiumMode = false;
let startTime = null;
let currentWPM = 0;
let currentAccuracy = 100;

// Timer variables
let timerInterval = null;
let elapsedSeconds = 0;

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

// Check daily streak
function showAd(type) {
    switch(type) {
        case 'banner':
            console.log("BANNER AD: Would show banner ad here");
            break;
        case 'social':
            console.log("SOCIAL BAR AD: Would show social media bar ad here");
            break;
        case 'popunder':
            console.log("POPUNDER AD: Would show popunder ad here");
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
    const progressElement = document.getElementById('withdrawal-progress');
    if (progressElement) {
        const progress = (balance / 50) * 100;
        const remaining = (50 - balance).toFixed(2);
        progressElement.style.width = `${Math.min(progress, 100)}%`;
        document.getElementById('withdrawal-text').innerText = `${remaining} until $50.00 Payout`;
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

function updatePremiumButton() {
    const premiumBtn = document.getElementById('premium-btn');
    if (premiumBtn) {
        if (isPremiumMode) {
            premiumBtn.innerText = "Premium Active";
            premiumBtn.classList.add('active');
        } else {
            premiumBtn.innerText = "Unlock Premium";
            premiumBtn.classList.remove('active');
        }
    }
}

function loadNewText() {
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    document.getElementById('target-text').innerText = randomText;
    document.getElementById('input-field').value = "";
    
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
    
    // Show ad on level up
    showAd('popunder');
}

function showWithdrawalPopup() {
    const popup = document.createElement('div');
    popup.className = 'level-up-popup';
    
    if (balance >= 50) {
        popup.innerHTML = `
            <div class="popup-content">
                <h2>💰 Withdraw Funds</h2>
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
                <h2>💰 Insufficient Funds</h2>
                <p>Current Balance: $${balance.toFixed(2)}</p>
                <p>You need $${remaining} more to withdraw via PayPal/Crypto.</p>
                <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px; margin: 20px 0;">
                    <p style="margin: 0; font-size: 0.9rem;">⚠️ Account verification required for withdrawals</p>
                </div>
                <button class="withdraw-btn" onclick="verifyAccount()">Verify Account</button>
                <button onclick="this.parentElement.parentElement.remove()" style="background: #666; margin-top: 10px;">Keep Typing</button>
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
                
                loadNewText();
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
                
                loadNewText();
                updateLeaderboard();
            }
        });
    }

    // Premium buttons
    const premiumBtn = document.getElementById('premium-btn');
    const mobilePremiumBtn = document.getElementById('premium-btn-mobile');
    
    if (premiumBtn) {
        premiumBtn.addEventListener('click', () => {
            if (!isPremiumMode) {
                showAd('rewarded');
            }
        });
    }
    
    if (mobilePremiumBtn) {
        mobilePremiumBtn.addEventListener('click', () => {
            if (!isPremiumMode) {
                showAd('rewarded');
            }
        });
    }
    
    // Initialize
    updateLeaderboard();
    updateWithdrawalProgress();
    updatePremiumButton();
});

// Initial Load
loadNewText();
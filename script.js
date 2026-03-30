const texts = [
    "Digital marketing encompasses all marketing efforts that use electronic devices or the internet. Businesses leverage digital channels such as search engines, social media, email, and other websites to connect with current and prospective customers. The evolution of digital marketing has transformed how brands interact with their audiences, offering unprecedented opportunities for targeted advertising and real-time engagement. Unlike traditional marketing methods, digital marketing provides precise metrics and analytics, allowing businesses to track campaign performance, understand consumer behavior, and optimize strategies accordingly. From search engine optimization (SEO) and pay-per-click (PPC) advertising to content marketing and social media management, the digital marketing landscape offers diverse approaches to reach and engage target audiences effectively. The rise of mobile devices has further amplified the importance of digital marketing, with consumers increasingly accessing information and making purchasing decisions through smartphones and tablets. This shift has necessitated responsive design, mobile-first strategies, and location-based marketing to capture the attention of on-the-go consumers. As technology continues to advance, emerging trends like artificial intelligence, voice search, and augmented reality are reshaping the digital marketing landscape, presenting both challenges and opportunities for businesses seeking to maintain competitive advantage in an increasingly digital world.",

    "Artificial intelligence represents one of the most transformative technologies of our time, fundamentally changing how we interact with machines and process information. At its core, AI refers to the simulation of human intelligence in computers, enabling them to perform tasks that typically require human cognitive functions such as learning, problem-solving, perception, and language understanding. The field encompasses various subdomains including machine learning, neural networks, natural language processing, computer vision, and robotics, each contributing to different aspects of intelligent behavior. Machine learning algorithms enable systems to learn from data and improve their performance over time without explicit programming, while neural networks mimic the human brain's structure to recognize patterns and make complex decisions. Natural language processing allows machines to understand, interpret, and generate human language, powering applications from virtual assistants to translation services. Computer vision enables machines to interpret and analyze visual information from the world, driving innovations in autonomous vehicles, medical imaging, and facial recognition. The impact of AI extends across virtually every industry, revolutionizing healthcare through diagnostic tools and personalized treatment plans, transforming finance with algorithmic trading and fraud detection, enhancing manufacturing with predictive maintenance and quality control, and reshaping education through personalized learning platforms. As AI technology continues to advance, ethical considerations around privacy, bias, job displacement, and the potential for misuse become increasingly important, requiring thoughtful regulation and responsible development practices to ensure AI benefits society while minimizing potential harms.",

    "Cryptocurrency has emerged as a revolutionary digital asset class that challenges traditional financial systems and introduces new paradigms for money transfer and investment. Built on blockchain technology, cryptocurrencies are decentralized digital currencies that use cryptography for security and operate independently of central banks or governments. Bitcoin, created in 2009 by the pseudonymous Satoshi Nakamoto, pioneered this new financial landscape, introducing the concept of peer-to-peer electronic cash without intermediaries. The underlying blockchain technology serves as a distributed ledger that records all transactions across a network of computers, ensuring transparency, security, and immutability of transaction records. Since Bitcoin's inception, thousands of alternative cryptocurrencies have emerged, each with unique features and use cases. Ethereum introduced smart contracts, enabling programmable money and decentralized applications (DApps) that run on its blockchain. Other cryptocurrencies focus on privacy (Monero, Zcash), speed (Ripple, Stellar), or specific industry applications (Chainlink for oracles, Filecoin for storage). The cryptocurrency ecosystem has given rise to various financial innovations including decentralized finance (DeFi), non-fungible tokens (NFTs), and stablecoins pegged to traditional currencies. Despite their potential for financial inclusion and innovation, cryptocurrencies face significant challenges including price volatility, regulatory uncertainty, security concerns, and environmental impact due to energy consumption in mining processes. As institutional adoption increases and regulatory frameworks evolve, cryptocurrencies continue to reshape our understanding of money, value, and financial sovereignty in the digital age.",

    "Climate change represents one of the most pressing global challenges of our time, requiring urgent and coordinated action across nations, industries, and communities. The scientific consensus confirms that Earth's climate is warming at an unprecedented rate due to human activities, primarily the emission of greenhouse gases from burning fossil fuels, deforestation, and industrial processes. The consequences of climate change are already evident worldwide, manifesting as rising global temperatures, melting ice caps and glaciers, rising sea levels, more frequent and intense extreme weather events, and disruptions to ecosystems and biodiversity. These changes threaten food security, water resources, human health, and economic stability, disproportionately affecting vulnerable populations and developing nations. Addressing climate change requires a multifaceted approach combining mitigation efforts to reduce greenhouse gas emissions with adaptation strategies to cope with unavoidable impacts. Renewable energy technologies including solar, wind, hydroelectric, and geothermal power offer alternatives to fossil fuels, while energy efficiency measures can significantly reduce consumption across residential, commercial, and industrial sectors. Carbon capture and storage technologies, reforestation and afforestation programs, and sustainable agricultural practices provide additional pathways for emissions reduction. International cooperation through agreements like the Paris Climate Agreement establishes frameworks for collective action, though implementation and ambition levels vary among nations. The transition to a low-carbon economy presents both challenges and opportunities, driving innovation in clean technology, creating new jobs in renewable sectors, and potentially reshaping global economic relationships. As the window for limiting warming to 1.5°C narrows, the urgency for accelerated action and systemic transformation becomes increasingly critical for future generations.",

    "The Internet of Things (IoT) represents a paradigm shift in how we interact with the physical world, embedding intelligence and connectivity into everyday objects to create a seamlessly connected ecosystem of smart devices. IoT encompasses the network of physical devices, vehicles, home appliances, and other items embedded with sensors, software, and connectivity that enables them to collect and exchange data. This interconnected web of smart devices ranges from wearable fitness trackers and smart home thermostats to industrial sensors and autonomous vehicles, creating unprecedented opportunities for automation, efficiency, and data-driven decision-making. In residential settings, IoT enables smart homes where lighting, temperature, security systems, and entertainment devices can be controlled remotely and programmed to respond to occupants' preferences and behaviors. Smart cities leverage IoT technology to optimize traffic flow, manage waste collection, monitor air quality, and enhance public safety through intelligent infrastructure. Industrial IoT (IIoT) revolutionizes manufacturing through predictive maintenance, real-time production monitoring, and supply chain optimization, significantly reducing downtime and improving operational efficiency. Healthcare applications include remote patient monitoring, smart medical devices, and hospital asset tracking, enabling better patient outcomes and more efficient healthcare delivery. However, the proliferation of connected devices also introduces significant challenges related to security, privacy, and data management. The vast amount of data generated by IoT devices requires robust infrastructure for storage, processing, and analysis, while ensuring protection against cyber threats and unauthorized access. As 5G networks enable faster, more reliable connectivity and edge computing brings processing power closer to devices, the IoT ecosystem continues to expand, promising to transform how we live, work, and interact with our environment in increasingly sophisticated ways.",

    "Renewable energy has emerged as the cornerstone of global efforts to combat climate change and transition toward a sustainable energy future. Unlike finite fossil fuels, renewable energy sources are naturally replenished and include solar, wind, hydroelectric, geothermal, and biomass energy. Solar energy harnesses the power of the sun through photovoltaic panels that convert sunlight directly into electricity or through concentrated solar power systems that use mirrors to focus sunlight to generate heat. Wind energy captures the kinetic energy of moving air using turbines of various sizes, from small residential installations to massive offshore wind farms capable of powering entire cities. Hydroelectric power utilizes the energy of flowing water, traditionally through dams that create reservoirs and generate electricity as water passes through turbines. Geothermal energy taps into the Earth's internal heat, using steam and hot water from underground reservoirs to generate electricity or provide direct heating. Biomass energy derives from organic materials such as wood, agricultural crops, and waste, which can be burned directly or converted into biofuels. The transition to renewable energy offers numerous environmental benefits, including significantly reduced greenhouse gas emissions, improved air quality, and decreased water pollution compared to fossil fuels. Economically, renewable energy creates jobs in manufacturing, installation, and maintenance while reducing dependence on imported fuels and exposure to volatile energy prices. Technological advances have dramatically reduced costs, making renewable energy increasingly competitive with traditional sources. Energy storage solutions, particularly batteries, are becoming more efficient and affordable, addressing the challenge of intermittency inherent in solar and wind power. Smart grid technologies enable better integration of renewable sources, while demand response programs help match electricity supply with consumption patterns. Despite these advances, challenges remain including grid modernization, land use considerations, and the need for continued technological innovation and supportive policies to accelerate the global energy transition.",

    "Virtual reality (VR) and augmented reality (AR) technologies are transforming how we experience and interact with digital content, blurring the boundaries between physical and virtual worlds. Virtual reality creates fully immersive digital environments that users can explore and interact with through specialized headsets and controllers, effectively replacing their real-world surroundings with computer-generated environments. Augmented reality, in contrast, overlays digital information onto the real world, enhancing rather than replacing users' perception of their environment through smartphones, tablets, or specialized glasses. These technologies have applications spanning entertainment, education, healthcare, training, retail, and numerous other industries. In gaming and entertainment, VR offers unprecedented immersion, allowing players to step inside virtual worlds and interact with characters and environments as if they were real. Educational applications include virtual field trips to historical sites, interactive science simulations, and immersive language learning experiences that enhance engagement and retention. Healthcare professionals use VR for surgical training, pain management, and treating phobias through exposure therapy in controlled environments. Manufacturing and industrial applications enable remote assistance, complex assembly training, and virtual prototyping, reducing costs and improving safety. Retail experiences are enhanced through AR applications that allow customers to visualize products in their homes before purchase or access additional information by pointing their devices at products. The development of the metaverse represents the next evolution of these technologies, creating persistent, shared virtual spaces where users can interact through digital avatars for work, socializing, entertainment, and commerce. Technical challenges remain, including reducing motion sickness, improving resolution and field of view, developing more intuitive input methods, and creating more realistic haptic feedback. As hardware becomes more affordable and accessible, and content libraries expand, VR and AR are poised to become integral parts of how we work, learn, communicate, and entertain ourselves in increasingly digital ways.",

    "Cybersecurity has become a critical concern in our increasingly interconnected digital world, protecting systems, networks, and data from digital attacks, theft, and damage. As businesses and individuals rely more heavily on digital infrastructure for communication, commerce, and daily operations, the potential impact of cyber threats continues to grow in scope and sophistication. Cybersecurity encompasses various domains including network security, application security, information security, operational security, and disaster recovery planning. Common cyber threats include malware (viruses, worms, trojans, ransomware), phishing attacks, denial-of-service attacks, man-in-the-middle attacks, and advanced persistent threats from nation-state actors or organized criminal groups. The financial impact of cybercrime continues to rise, with businesses facing direct costs from data breaches, system downtime, and regulatory fines, along with indirect costs from reputational damage and loss of customer trust. Effective cybersecurity requires a multi-layered approach combining technological solutions, policies and procedures, and user education. Technical measures include firewalls, intrusion detection and prevention systems, encryption, multi-factor authentication, and regular security audits. Employee training programs help recognize and avoid phishing attempts and social engineering tactics, while incident response plans ensure rapid and effective response to security breaches. The rise of cloud computing, Internet of Things devices, and remote work arrangements has expanded the attack surface, requiring new approaches to security that protect distributed systems and remote access points. Regulatory frameworks such as GDPR, CCPA, and industry-specific compliance requirements mandate minimum security standards and breach notification procedures, increasing accountability for organizations handling sensitive data. As artificial intelligence and machine learning technologies advance, they offer both new tools for detecting and preventing cyber attacks and potential vulnerabilities that malicious actors could exploit. The cybersecurity field faces a significant talent shortage, creating opportunities for professionals with skills in ethical hacking, security analysis, and compliance. As threats continue to evolve in sophistication and scale, cybersecurity remains an ongoing challenge requiring constant vigilance, adaptation, and investment in protective measures.",

    "Sustainable development represents a holistic approach to meeting present needs without compromising the ability of future generations to meet their own needs, balancing economic growth, environmental protection, and social equity. The concept, popularized by the 1987 Brundtland Commission report, has become a guiding principle for global policy, business strategy, and community planning addressing interconnected challenges including climate change, resource depletion, poverty, inequality, and biodiversity loss. The United Nations Sustainable Development Goals (SDGs) provide a comprehensive framework with 17 specific goals and 169 targets covering areas from clean energy and sustainable cities to gender equality and responsible consumption. Economic sustainability requires creating prosperity and employment while reducing environmental impact and resource consumption through circular economy principles, green technologies, and sustainable business models. Environmental sustainability involves protecting ecosystems, conserving natural resources, reducing pollution, and mitigating climate change through renewable energy, sustainable agriculture, and conservation efforts. Social sustainability ensures equitable access to resources, opportunities, and services while promoting human rights, social justice, and community well-being. Businesses increasingly adopt sustainability strategies recognizing that long-term success depends on environmental stewardship, social responsibility, and good governance. Sustainable finance initiatives including green bonds, ESG (Environmental, Social, Governance) investing, and impact investing direct capital toward sustainable development projects and companies. Cities implement sustainable urban planning through compact development, public transportation, green spaces, and resilient infrastructure. Individuals contribute through lifestyle choices including reduced consumption, sustainable diets, renewable energy adoption, and support for sustainable businesses and policies. Technology plays a crucial role in sustainability through innovations in clean energy, precision agriculture, smart grids, sustainable materials, and digital solutions that reduce resource consumption and environmental impact. Education and awareness campaigns build public understanding and support for sustainable practices, while international cooperation addresses global challenges that transcend national boundaries. As the urgency of environmental and social challenges grows, sustainable development becomes increasingly critical for creating resilient, equitable, and prosperous societies that can thrive within planetary boundaries.",

    "Artificial intelligence in healthcare is revolutionizing medical diagnosis, treatment, and patient care through advanced algorithms and machine learning capabilities that can process vast amounts of medical data and identify patterns that might escape human detection. AI applications in healthcare range from diagnostic imaging and drug discovery to personalized treatment plans and administrative workflow optimization. In medical imaging, AI algorithms can analyze X-rays, CT scans, MRIs, and pathology slides with remarkable accuracy, often detecting early signs of disease such as cancer, diabetic retinopathy, or cardiovascular conditions. Machine learning models can predict patient outcomes, identify individuals at high risk for certain conditions, and recommend preventive interventions based on electronic health records, genetic information, and lifestyle factors. Drug discovery and development benefit from AI's ability to analyze molecular structures, predict drug interactions, and identify potential therapeutic compounds, significantly reducing the time and cost of bringing new medications to market. Personalized medicine leverages AI to tailor treatments based on individual patient characteristics, genetic profiles, and treatment responses, optimizing efficacy while minimizing side effects. Robotic surgery systems enhanced with AI capabilities provide greater precision and control during complex procedures, while virtual nursing assistants monitor patients remotely and provide personalized care recommendations. Administrative applications include automated scheduling, billing optimization, and clinical documentation, reducing healthcare costs and allowing medical professionals to focus more on patient care. AI-powered chatbots and virtual assistants provide 24/7 patient support, answering questions, scheduling appointments, and monitoring chronic conditions. The COVID-19 pandemic accelerated AI adoption in healthcare, supporting vaccine development, treatment optimization, and public health monitoring. However, implementing AI in healthcare presents challenges including data privacy concerns, algorithmic bias, regulatory approval processes, and the need for extensive validation and integration with existing healthcare systems. Ethical considerations around AI decision-making, accountability, and the potential for dehumanizing patient care require careful attention and thoughtful implementation. As AI technologies continue to advance and healthcare becomes increasingly data-driven, the integration of artificial intelligence promises to transform medical practice, improve patient outcomes, and make healthcare more accessible, efficient, and personalized while maintaining the essential human elements of compassion and empathy in patient care.",

    "The future of work is being fundamentally reshaped by technological advances, changing demographics, evolving worker expectations, and global events that have accelerated transformation across industries. Remote work, once a perk offered by progressive companies, has become mainstream, enabled by digital collaboration tools, cloud computing, and high-speed internet connectivity. This shift has profound implications for organizational structure, company culture, talent acquisition, and urban planning as businesses adapt to distributed teams and flexible work arrangements. Automation and artificial intelligence are transforming job roles, eliminating routine tasks while creating new opportunities in areas requiring creativity, critical thinking, and emotional intelligence. The gig economy continues to expand, offering flexibility and autonomy while raising questions about job security, benefits, and worker protections. Skills development and lifelong learning have become essential as the half-life of professional knowledge decreases, requiring workers to continuously update their capabilities to remain relevant. Diversity, equity, and inclusion have moved from peripheral concerns to central business priorities, as organizations recognize that diverse teams drive innovation and better reflect their customer bases. Mental health and well-being have gained prominence as employers understand the connection between employee wellness and productivity, leading to comprehensive benefits packages and supportive work environments. Four-day work weeks, unlimited vacation policies, and results-oriented work environments challenge traditional notions of work structure and time management. The physical workplace is evolving, with office spaces designed for collaboration rather than individual work, incorporating technology that supports hybrid meetings and flexible arrangements. Global talent markets have expanded as remote work eliminates geographical constraints, creating both opportunities and challenges for companies and workers navigating different cultures, time zones, and regulatory environments. Education and training systems are adapting to prepare students for this evolving landscape, emphasizing soft skills, digital literacy, and adaptability alongside traditional academic knowledge. As these trends continue to develop, the future of work will likely be characterized by greater flexibility, continuous learning, human-machine collaboration, and a reimagined relationship between employers and employees that prioritizes outcomes over presence and values contribution over hours worked.",

    "Blockchain technology extends far beyond cryptocurrency applications, offering a decentralized, transparent, and secure method for recording and verifying transactions across numerous industries. At its core, a blockchain is a distributed ledger that maintains a continuously growing list of records (blocks) linked and secured using cryptography, making it resistant to modification of the data. This technology enables trustless transactions, meaning parties can interact without requiring intermediaries or centralized authorities, potentially revolutionizing how we conduct business, manage identity, and transfer value. In supply chain management, blockchain provides unprecedented transparency and traceability, allowing companies and consumers to track products from origin to consumption, verifying authenticity, ensuring ethical sourcing, and reducing fraud. Smart contracts, self-executing contracts with terms directly written into code, automate complex business processes, reduce transaction costs, and eliminate the need for intermediaries in various applications including insurance, real estate, and legal agreements. Digital identity solutions built on blockchain give individuals control over their personal information, allowing selective disclosure and reducing identity theft risks while simplifying authentication processes. Intellectual property protection benefits from blockchain's ability to create timestamped, immutable records of creation and ownership, helping artists, writers, and innovators protect their work and track usage. Voting systems leveraging blockchain technology offer enhanced security, transparency, and accessibility, potentially increasing voter participation and trust in electoral processes while reducing fraud and administrative costs. Healthcare applications include secure sharing of medical records among authorized providers, clinical trial management, and pharmaceutical supply chain verification to combat counterfeit drugs. Financial services beyond cryptocurrency include cross-border payments, trade finance, and decentralized lending platforms that operate without traditional banking infrastructure. Energy trading platforms enable peer-to-peer buying and selling of renewable energy, while carbon credit markets use blockchain to track and verify environmental impact reductions. Despite its potential, blockchain faces challenges including scalability limitations, energy consumption concerns (particularly for proof-of-work systems), regulatory uncertainty, and the need for technical expertise to implement and maintain systems. As technology advances and use cases expand, blockchain continues to evolve toward mainstream adoption, promising to transform industries by enabling more efficient, transparent, and secure ways of conducting business and managing information in our increasingly digital world."
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
            <h2>⚡ Premium Mode Active</h2>
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
            <h2>⏰ Premium Mode Expired</h2>
            <p>Your 2x earnings period has ended.</p>
            <p>Watch 1 more popunder ad to unlock premium again!</p>
            <button onclick="this.parentElement.parentElement.remove()">Got it</button>
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
    
    // Show text progression notification
    showTextProgressNotification();
}

function showTextProgressNotification() {
    const progressText = `Paragraph ${currentTextIndex + 1} of ${texts.length}`;
    const remainingTexts = texts.length - currentTextIndex - 1;
    
    // Create a subtle notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--card);
        border: 1px solid var(--accent);
        border-radius: 10px;
        padding: 15px 20px;
        color: var(--text);
        font-family: 'Outfit', sans-serif;
        font-size: 0.9rem;
        z-index: 1000;
        backdrop-filter: blur(10px);
        box-shadow: 0 4px 15px rgba(0, 255, 136, 0.2);
        animation: slideInRight 0.3s ease;
    `;
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <span style="color: var(--accent); font-weight: bold;">📝</span>
            <div>
                <div style="font-weight: 600;">${progressText}</div>
                <div style="font-size: 0.8rem; color: var(--text-dim);">${remainingTexts} more paragraphs available</div>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 3000);
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
const puppeteer = require('puppeteer-core');

async function testWebsite() {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  const failedRequests = [];
  page.on('requestfailed', req => {
    failedRequests.push(`${req.method()} ${req.url()}: ${req.failure().errorText}`);
  });

  console.log('Navigating to http://localhost:5175/ ...');
  await page.goto('http://localhost:5175/', { waitUntil: 'networkidle0' });

  // 1. Check title and headings
  const title = await page.title();
  console.log('Page Title:', title);

  const verification = await page.evaluate(() => {
    const registerButtons = Array.from(document.querySelectorAll('a')).filter(a =>
      a.innerText.toUpperCase().includes('REGISTER')
    );
    const registerLinks = registerButtons.map(a => a.href);

    const instaLinks = Array.from(document.querySelectorAll('a[href*="instagram.com"]')).map(a => a.href);

    const sections = {
      hero: !!document.querySelector('h1'),
      heroHeading: document.querySelector('h1')?.innerText,
      video: !!document.getElementById('video'),
      attractions: !!document.getElementById('attractions'),
      entertainment: !!document.getElementById('entertainment'),
      foodFestival: !!document.getElementById('food-festival'),
      studentCreators: !!document.getElementById('student-creators') || !!document.getElementById('creators'),
      schedule: !!document.getElementById('schedule'),
      gallery: !!document.getElementById('gallery'),
      finalCta: !!document.getElementById('register'),
      footer: !!document.querySelector('footer'),
    };

    // Count attractions
    const attractionCards = document.querySelectorAll('#attractions .group');

    // Count food stalls
    const foodCards = document.querySelectorAll('#food-festival .group, #food-festival .rounded-2xl');

    // Reporting time & dress code present?
    const pageText = document.body.innerText;
    const hasReportingTime = pageText.includes('5:30 PM');
    const hasDressCode = pageText.includes('Traditional Wear');
    const hasWestinCollege = pageText.includes('WESTIN DIWALI CELEBRATIONS');

    return {
      sections,
      registerLinks,
      registerButtonsCount: registerButtons.length,
      instaLinks,
      attractionCount: attractionCards.length,
      hasReportingTime,
      hasDressCode,
      hasWestinCollege
    };
  });

  console.log('Verification Results:', JSON.stringify(verification, null, 2));

  // Take Desktop Hero screenshot
  await page.screenshot({ path: '/Users/sahith/.gemini/antigravity/scratch/westin-diwali-celebrations/screenshot_desktop_hero.png' });

  // Scroll to Attractions and screenshot
  await page.evaluate(() => document.getElementById('attractions')?.scrollIntoView());
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: '/Users/sahith/.gemini/antigravity/scratch/westin-diwali-celebrations/screenshot_desktop_attractions.png' });

  // Scroll to Food Festival and screenshot
  await page.evaluate(() => document.getElementById('food-festival')?.scrollIntoView());
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: '/Users/sahith/.gemini/antigravity/scratch/westin-diwali-celebrations/screenshot_desktop_food.png' });

  // Scroll to Schedule & Gallery
  await page.evaluate(() => document.getElementById('schedule')?.scrollIntoView());
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: '/Users/sahith/.gemini/antigravity/scratch/westin-diwali-celebrations/screenshot_desktop_schedule.png' });

  // Test Instagram popup after 6.5 seconds
  console.log('Waiting for Instagram popup (6.5s)...');
  await new Promise(r => setTimeout(r, 6500));

  const popupStatus = await page.evaluate(() => {
    const popup = document.querySelector('[role="dialog"]');
    if (!popup) return { visible: false };
    return {
      visible: true,
      heading: popup.querySelector('h3')?.innerText,
      text: popup.innerText,
    };
  });

  console.log('Instagram Popup Status:', popupStatus);

  if (popupStatus.visible) {
    await page.screenshot({ path: '/Users/sahith/.gemini/antigravity/scratch/westin-diwali-celebrations/screenshot_instagram_popup.png' });
  }

  // Test Mobile Viewport (iPhone 390x844)
  await page.setViewport({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: '/Users/sahith/.gemini/antigravity/scratch/westin-diwali-celebrations/screenshot_mobile_hero.png' });

  console.log('Console Errors:', consoleErrors);
  console.log('Failed Requests:', failedRequests);

  await browser.close();
  console.log('Test completed successfully!');
}

testWebsite().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});

import https from 'https';
import http from 'http';
import dns from 'dns/promises';
import { URL } from 'url';

async function fetchUrl(targetUrl, headers = {}) {
  return new Promise((resolve) => {
    try {
      const parsed = new URL(targetUrl);
      const client = parsed.protocol === 'https:' ? https : http;
      const req = client.request(parsed, {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          ...headers
        },
        timeout: 10000,
        rejectUnauthorized: false
      }, (res) => {
        let data = '';
        res.on('data', chunk => {
          if (data.length < 500000) data += chunk;
        });
        res.on('end', () => {
          resolve({
            url: targetUrl,
            status: res.statusCode,
            headers: res.headers,
            body: data
          });
        });
      });
      req.on('error', (err) => {
        resolve({ url: targetUrl, error: err.message });
      });
      req.on('timeout', () => {
        req.destroy();
        resolve({ url: targetUrl, error: 'TIMEOUT' });
      });
      req.end();
    } catch (e) {
      resolve({ url: targetUrl, error: e.message });
    }
  });
}

async function runScan() {
  console.log('=== 1. DNS RESOLUTION ===');
  const hostname = 'recr.edu.bd';
  try {
    const a = await dns.resolve4(hostname).catch(e => e.message);
    const ns = await dns.resolveNs(hostname).catch(e => e.message);
    const mx = await dns.resolveMx(hostname).catch(e => e.message);
    const txt = await dns.resolveTxt(hostname).catch(e => e.message);
    console.log({ hostname, a, ns, mx, txt });
  } catch (e) {
    console.log('DNS lookup error:', e);
  }

  console.log('\n=== 2. MAIN WEBSITE SCAN (https://www.recr.edu.bd/) ===');
  const main = await fetchUrl('https://www.recr.edu.bd/');
  if (main.error) {
    console.log('Main URL error:', main.error);
  } else {
    console.log('Status:', main.status);
    console.log('Headers:', JSON.stringify(main.headers, null, 2));
    const titleMatch = main.body.match(/<title>([^<]*)<\/title>/i);
    console.log('Title:', titleMatch ? titleMatch[1].trim() : 'No title');
    const generatorMatch = main.body.match(/<meta[^>]*name=["']generator["'][^>]*content=["']([^"']*)["']/i);
    console.log('Generator:', generatorMatch ? generatorMatch[1] : 'Unknown');
    const wpCheck = main.body.includes('wp-content') || main.body.includes('wp-includes');
    console.log('WordPress Detected:', wpCheck);
    
    // Check security headers
    const secHeaders = {
      'Strict-Transport-Security': main.headers['strict-transport-security'] || 'MISSING',
      'Content-Security-Policy': main.headers['content-security-policy'] || 'MISSING',
      'X-Frame-Options': main.headers['x-frame-options'] || 'MISSING',
      'X-Content-Type-Options': main.headers['x-content-type-options'] || 'MISSING',
      'Referrer-Policy': main.headers['referrer-policy'] || 'MISSING',
      'Permissions-Policy': main.headers['permissions-policy'] || 'MISSING',
      'Server': main.headers['server'] || 'HIDDEN / UNKNOWN',
      'X-Powered-By': main.headers['x-powered-by'] || 'NONE'
    };
    console.log('Security Headers Audit:', secHeaders);
  }

  console.log('\n=== 3. HACKED PAGE SCAN (https://www.recr.edu.bd/alumni) ===');
  const alumni = await fetchUrl('https://www.recr.edu.bd/alumni');
  if (alumni.error) {
    console.log('Alumni error:', alumni.error);
  } else {
    console.log('Status:', alumni.status);
    const titleMatch = alumni.body.match(/<title>([^<]*)<\/title>/i);
    console.log('Title:', titleMatch ? titleMatch[1].trim() : 'No title');
    const metaDesc = alumni.body.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
    console.log('Meta Description:', metaDesc ? metaDesc[1] : 'None');
    
    // Find outbound links to gambling or external domains
    const links = [...alumni.body.matchAll(/href=["'](https?:\/\/[^"']+)["']/gi)].map(m => m[1]);
    const externalLinks = Array.from(new Set(links.filter(l => !l.includes('recr.edu.bd')))).slice(0, 20);
    console.log('Sample External / Gambling Links on Hacked Page:', externalLinks);
  }

  console.log('\n=== 4. PROBING COMMON SENSITIVE ENDPOINTS & FILES ===');
  const pathsToProbe = [
    '/robots.txt',
    '/sitemap.xml',
    '/wp-login.php',
    '/wp-admin/',
    '/.env',
    '/.git/config',
    '/admin/',
    '/administrator/',
    '/phpinfo.php',
    '/test.php',
    '/backup.sql',
    '/cpanel',
    '/webmail'
  ];

  for (const p of pathsToProbe) {
    const res = await fetchUrl('https://www.recr.edu.bd' + p);
    if (!res.error) {
      console.log(`Path ${p} -> Status: ${res.status} (${res.body ? res.body.length : 0} bytes)`);
    } else {
      console.log(`Path ${p} -> Error: ${res.error}`);
    }
  }
}

runScan();

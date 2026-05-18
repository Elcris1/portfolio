// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import fs from 'fs';
import path from 'path';

function loadEnv() {
  const envFile = path.resolve(process.cwd(), '.env');
  const envVars = {};
  
  if (fs.existsSync(envFile)) {
    const envContent = fs.readFileSync(envFile, 'utf-8');
    envContent.split('\n').forEach(line => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const [key, ...valueParts] = trimmed.split('=');
        if (key && valueParts.length > 0) {
          envVars[key.trim()] = valueParts.join('=').trim().replace(/^["']|["']$/g, '');
        }
      }
    });
  }
  
  return envVars;
}

const envVars = loadEnv();
const isProd = envVars.ENV === 'prod' || process.env.NODE_ENV === 'production';

const config = {
  integrations: [tailwind()],
};

if (isProd) {
  config.site = envVars.SITE_URL || 'https://Elcris1.github.io';
  config.base = envVars.BASE_PATH || '/portfolio';
}

export default defineConfig(config);
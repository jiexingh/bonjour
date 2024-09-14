import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function buildUrlWithParams(baseUrl: string, params: Record<string, any>): string {
  const url = new URL(baseUrl);
  
  Object.keys(params).forEach(key => {
    const value = params[key];
    if (Array.isArray(value)) {
      value.forEach(v => url.searchParams.append(key, String(v)));
    } else if (value !== null && value !== undefined) {
      url.searchParams.append(key, String(value));
    }
  });

  return url.toString();
}

export function appendParamsToPath(path: string, params: Record<string, any>): string {
  const queryParams: string[] = [];

  Object.keys(params).forEach(key => {
    const value = params[key];
    if (Array.isArray(value)) {
      value.forEach(v => queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(v))}`));
    } else if (value !== null && value !== undefined) {
      queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
    }
  });

  const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
  return path + queryString; // 返回完整路径
}

export function sleep(timeout: number): Promise<void> {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, timeout);
    });
}
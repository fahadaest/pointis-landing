import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {nanoid} from "nanoid";
import {API_ROOT} from "@/components/shared";

export const BACKEND = 'api.pnt.is:443';
export const BACKEND_HTTP = `https://${BACKEND}`;
export const BACKEND_WS = `wss://${BACKEND}`;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const id = () => {
  return nanoid(11)
}

export const formatForMD = (text: string | null): string | null => {
  return !text ? null : text
      .replace(/^"+|"$|\\t$/g, '')
      .replace(/(\.)\\n([^a-z])/g, '$1  \n$2')
      .replace(/\\n/g, '\n')
      .replace(/(:)(\s+[1-9].)/g, '$1  \n$2')
}

export const emailHref = ({ email = '', subject = '', body = '' }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return `mailto:${email}${params}`
};

export const postAnalytics = async (page: string, action: string | null = null, app: string = "landing") => {
  try {
    const response = await fetch(`${API_ROOT}/a`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({app, page, action})
    })

    // TODO: temp, for while web dev
    // return await response.json()
  }
  catch (e) {
    console.log(e)
  }

  return null;
}

export async function fetchApi(endpoint: string, body: any, timeout = 60*1000) {
  return await fetchWithTimeout(`${BACKEND_HTTP}/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer landing`
    },
    body: JSON.stringify(body)
  }, timeout);
}

export async function fetchWithTimeout(url: string, opts = {}, timeout = 60*1000) {
  // Create a signal with timeout
  const signal = AbortSignal.timeout(timeout);

  // Await the fetch with a catch in case it's aborted which signals an error
  return await fetch(url, {
    ...opts,
    signal,
  });
}

let webSocket: WebSocket | null = null;

export const initializeWebSocket = (requestId: string, onMessage: (data: any) => any) => {
  webSocket = new WebSocket(`${BACKEND_WS}/ws/${requestId}`);

  webSocket.onopen = async (event) => {
    console.log("ws opened")
    webSocket?.send(JSON.stringify({id: requestId, key: `Bearer DEMO`}))
    console.log("ws opened done")
  }

  webSocket.onmessage = async (event) => {
    // console.log(event)
    onMessage(JSON.parse(event.data))
  };

  webSocket.onclose = (event) => webSocket = null;
}

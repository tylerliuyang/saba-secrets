import { ChatMessage } from "../messages/state";


export function storeMessages(session: { [recipient: string]: ChatMessage[] }, timestamp: number) {
    window.localStorage.setItem("session", JSON.stringify(session));
    window.localStorage.setItem("timestamp", JSON.stringify(timestamp));
}

export function restoreMessages() {
    const ls = JSON.parse(window.localStorage.getItem("session") ?? "{}");

    const timestamp = JSON.parse(window.localStorage.getItem("timestamp") ?? "0");
    return { session: ls, timestamp: timestamp };
}
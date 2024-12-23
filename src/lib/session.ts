import { IronSessionData, unsealData } from "iron-session";
import { sessionOptions } from "./iron-session-config";

export async function validateSession(token?: string) {
    if (!token) return null;
    try {
        const session: IronSessionData = await unsealData(token, { password: sessionOptions.password });
        return session;
    } catch {
        return null;
    }
}
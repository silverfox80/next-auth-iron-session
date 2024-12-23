## PRE-SETTINGS
You need to have an .env.local variable in your root folder that will look like this:

NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
GOOGLE_CLIENT_SECRET='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
IRON_SESSION_PASSWORD='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'

Google API will provide your credentials, just follow this guide ( https://support.google.com/cloud/answer/6158849#zippy= )
for the IRON_SESSION_PASSWORD, use a 32-bytes random generated password.

For production ( .env.production ) don't forget to add:
NODE_ENV = "production"

## RUN THE SERVER LOCALLY
> npm run dev

## Authentication flow using NEXT-AUTH, IRON-SESSION and GOOGLE OAUTH 2.0 provider. 
### It uses the next middleware.js to force authentication for the requests to access the protected pages.

- NextAuth Redirects to Google OAuth 2.0
    NextAuth sends the user to Google's OAuth 2.0 authorization endpoint.
    The request includes:
        The client_id (from the Google Console).
        The redirect_uri (set in the Google Console).
        The requested scopes (e.g., email, profile).

- Google Authentication Flow
    The user logs in or selects their Google account.
    Google requests the user’s consent to share their data with your application (if not already consented).
    Upon successful authentication, Google redirects the user back to the redirect_uri specified.

- NextAuth Callback
    Google redirects to NextAuth's callback URL (e.g., /api/auth/callback/google).
    NextAuth uses the authorization code from Google to fetch:
        An access token.
        A refresh token.
        The user’s profile data (name, email, avatar, etc.).

- JWT Token Creation
    NextAuth processes the user information:

    A JSON Web Token (JWT) is created and includes:
        User details (e.g., name, email, ID).
        Tokens (Google access token, refresh token).
        This JWT is encrypted and stored as a secure cookie on the client.

- Session Handling
    NextAuth provides an active session on the client using the useSession hook or getSession function.   

- Session Persistence (iron-session)
    The session is persisted using a secure HTTP-only cookie.
    If the session expires, the user is logged out, and they must reauthenticate.

- Token Refresh (Optional)
    If the Google access token expires, NextAuth can use the refresh token to fetch a new access token. This process is handled transparently in the background.

- Sign-Out
    When the user signs out, the session cookie is cleared, and they are redirected to the homepage (or another specified location).
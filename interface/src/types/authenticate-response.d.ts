interface AuthenticateResponse {
  /** Indicates if the user was pre-authenticated successfully. */
  success: boolean;

  /** Pre authorization token, used to be passed to next steps. */
  preAuthToken?: string;
}

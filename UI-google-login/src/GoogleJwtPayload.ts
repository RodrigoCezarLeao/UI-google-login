export interface GoogleJwtPayload {
  name: string;
  email: string;
  picture: string;
  sub: string;
  given_name?: string;
  family_name?: string;
  email_verified?: boolean;
  aud?: string;
  iss?: string;
  exp?: number;
  iat?: number;
  nbf?: number;
  jti?: string;
}

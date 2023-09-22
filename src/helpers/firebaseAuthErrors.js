const firebaseAuthErrors = {
  'auth/claims-too-large':
    'The claims payload provided to setCustomUserClaims() exceeds the maximum allowed size of 1000 bytes.',
  'auth/email-already-exists':
    'The provided email is already in use by an existing user. Each user must have a unique email.',
  'auth/id-token-expired': 'The provided Firebase ID token is expired.'
}

const getFirebaseAuthError = (error) => {
  return firebaseAuthErrors[error] || error
}

export default getFirebaseAuthError

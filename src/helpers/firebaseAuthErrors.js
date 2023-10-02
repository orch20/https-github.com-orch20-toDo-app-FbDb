export const showRelevantErrorMessage = (error) => {
  switch (error) {
    case 'auth/invalid-email':
      return 'The provided email is not valid'

    case 'auth/invalid-login-credentials':
      return 'The provided login or password credentials are not valid'

    case 'auth/missing-password':
      return 'Please provide a password'

    case 'auth/email-already-in-use':
      return 'The email provided already exists'

    case 'auth/weak-password':
      return 'The password provided is too weak.'

    case 'auth/user-not-found':
      return 'User not found. Please check your credentials and try again.'

    case 'auth/wrong-password':
      return 'The provided password is incorrect'

    case 'auth/user-disabled':
      return "The user's account has been disabled or deleted"

    case 'auth/invalid-api-key':
      return 'Invalid API key.'

    case 'auth/network-request-failed':
      return 'A network error occurred. Please try again later.'

    case 'auth/user-token-expired':
      return 'Your session has expired. Please log in again.'

    case 'auth/invalid-user-token':
      return 'Invalid user token. Please log in again.'

    // Extra cases for Firebase Database errors
    case 'database/permission-denied':
      return 'Permission denied when accessing the database. Check your permissions.'

    case 'database/disconnected':
      return 'Database connection lost. Please check your internet connection.'

    case 'database/timeout':
      return 'Database operation timed out. Please try again.'

    default:
      return error
  }
}

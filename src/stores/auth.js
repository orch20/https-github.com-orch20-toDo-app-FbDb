import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import router from '@/router'
// import { csrfCookie, login, register, logout, getUser } from '../http/auth-api'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth'
import { auth } from '@/server/firebase.js'
import { useTaskStore } from './task'
import { showRelevantErrorMessage } from '@/helpers/firebaseAuthErrors'
// import getFirebaseAuthError from '@/helpers/firebaseAuthErrors'

export const useAuthStore = defineStore('authStore', () => {
  const user = ref({
    id: '',
    email: '',
    name: ''
  })
  const errors = ref({
    message: ''
  })

  const isLoggedIn = computed(() => !!user.value.id)

  const errorDescription = computed(() => {
    if (errors.value.message) {
      return showRelevantErrorMessage(errors.value.message)
    }
    return 'Something went wrong. Please try again.'
  })

  const init = () => {
    const taskStore = useTaskStore()

    const removeListener = onAuthStateChanged(auth, async (currentUser) => {
      try {
        if (currentUser) {
          user.value.id = currentUser.uid
          user.value.email = currentUser.email
          user.value.name = currentUser.displayName

          router.push('/tasks')
          taskStore.init()
          removeListener()
        } else {
          console.log('No user is signed in.')
          user.value = {}
          router.replace({ name: 'home' })
        }
      } catch (error) {
        user.value = {}
        console.error('Error in authentication state change:', error)
      }
    })
  }

  const handelLogin = async (credentials) => {
    try {
      const errorCode = ''
      const errorMessage = ''
      const userCredential = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      )
    } catch (error) {
      errors.value.message = error.code
      // console.log('Login Error:', error.code, error.message)
      console.log(errors.value.message)
    }
  }

  const handelRegister = async (credentials) => {
    try {
      errors.value.message = ''
      await createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
      await updateProfile(auth.currentUser, { displayName: credentials.name })
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      console.error('Registration Error:', errorCode, errorMessage)
      errors.value.message = error.code
    }
  }

  const handelLogout = async () => {
    const taskStore = useTaskStore()
    try {
      await signOut(auth)
      taskStore.clearNotes()
      errors.value.message = ''
      // User signed out
      console.log('User signed out')
    } catch (error) {
      console.error('Error: ', error.message)
    }
    user.value = {}
  }
  return {
    user,
    isLoggedIn,
    errors,
    errorDescription,
    init,
    handelLogin,
    handelRegister,
    handelLogout
  }
})

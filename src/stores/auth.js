import { defineStore } from 'pinia'
import { ref, computed, reactive } from 'vue'

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

export const useAuthStore = defineStore('authStore', () => {
  const user = ref({
    id: '',
    email: '',
    name: ''
  })
  const errors = ref({})

  const isLoggedIn = computed(() => !!user.value.id)

  const init = async () => {
    const taskStore = useTaskStore()

    onAuthStateChanged(auth, async (currentUser) => {
      try {
        if (currentUser) {
          user.value.id = currentUser.uid
          user.value.email = currentUser.email
          user.value.name = currentUser.displayName

          // router.push('/tasks')
          taskStore.init()
        } else {
          console.log('No user is signed in.')
          user.value = {}
          user.value.router.replace({ name: 'home' })
          await taskStore.clear()
        }
      } catch (error) {
        user.value = {}
        console.error('Error in authentication state change:', error)
      }
    })
  }

  const handelLogin = async (credentials) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      )

      const user = userCredential.user
      // You can now access the signed-in user here
      console.log('User: ', user)
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      // Handle the sign-in error here
      console.error('Error: ', errorCode, errorMessage)
    }

    // try {
    //   await login(credentials)
    //   await fetchUser()
    //   errors.value = {}
    // } catch (error) {
    //   if (error.response && error.response.status === 422) {
    //     errors.value = error.response.data.errors
    //   }
    // }
  }

  const handelRegister = async (credentials) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      )

      user.value = userCredential.user

      await updateProfile(auth.currentUser, { displayName: credentials.name })

      console.log('User registered successfully:', user.value)
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      console.error('Registration Error:', errorCode, errorMessage)
    }

    // try {
    //   await register(newUser)
    //   await handelLogin({
    //     email: newUser.email,
    //     password: newUser.password
    //   })
    // } catch (error) {
    //   if (error.response && error.response.status === 422) {
    //     errors.value = error.response.data.errors
    //   }
    // }
  }

  const handelLogout = async () => {
    try {
      await signOut(auth)
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
    init,
    handelLogin,
    handelRegister,
    handelLogout
  }
})

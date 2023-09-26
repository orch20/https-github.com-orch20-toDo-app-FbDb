import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'
import { useAuthStore } from './auth'
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy
} from 'firebase/firestore'
import { db } from '@/server/firebase.js'

export const useTaskStore = defineStore('taskStore', () => {
  const tasks = ref([])
  const task = reactive({
    id: null,
    name: null,
    is_completed: false,
    date: null
  })
  const tasksLoaded = ref(false)

  let notesCollectionRef
  let notesCollectionQuery
  let getTaskSnapshot = null

  const completedTasks = computed(() => tasks.value.filter((task) => task.is_completed))
  const uncompletedTasks = computed(() => tasks.value.filter((task) => !task.is_completed))

  const init = () => {
    const authStore = useAuthStore()
    notesCollectionRef = collection(db, 'users', authStore.user.id, 'notes')
    notesCollectionQuery = query(notesCollectionRef, orderBy('date', 'desc'))
    fetchAllTasks()
  }

  const fetchAllTasks = async () => {
    getTaskSnapshot = onSnapshot(
      notesCollectionQuery,
      (querySnapshot) => {
        tasksLoaded.value = false
        const notes = []
        querySnapshot.forEach((doc) => {
          const note = {
            id: doc.id,
            name: doc.data().name,
            is_completed: doc.data().is_completed,
            date: doc.data().date
          }
          notes.push(note)
        })
        tasks.value = notes
        tasksLoaded.value = true
      },
      (error) => {
        throw new Error('Error getting tasks: ', error)
      }
    )
  }

  const clearNotes = () => {
    tasks.value = []
    if (getTaskSnapshot) getTaskSnapshot() // unsubscribe
  }

  const handelAddedTask = async ({ name, is_completed }) => {
    const date = new Date().toString()
    // get current date

    await addDoc(notesCollectionRef, {
      name,
      is_completed,
      date
    })
  }

  const handelUpdatedTask = async (task) => {
    const taskDocRef = doc(notesCollectionRef, task.id)
    await updateDoc(taskDocRef, { name: task.name })
  }

  const handelCompletedTask = async ({ id, is_completed }) => {
    const taskDocRef = doc(notesCollectionRef, id)
    await updateDoc(taskDocRef, { is_completed })
  }

  const handelRemovedTask = async (task) => {
    await deleteDoc(doc(notesCollectionRef, task.id))
  }

  return {
    init,
    tasks,
    task,
    completedTasks,
    uncompletedTasks,
    fetchAllTasks,
    handelAddedTask,
    handelUpdatedTask,
    handelCompletedTask,
    handelRemovedTask,
    clearNotes
  }
})

import { defineStore } from "pinia";
import { getDocs, collection } from 'firebase/firestore'

export const useTiresSTore = defineStore('tireStore', {
    state: () => ({
        tires: []
    }),
    actions: {
        async getTires() {
            this.tires = []
            const { $db } = useNuxtApp()
            const tiresReference = collection($db, 'Tires')
            try {
                const snapshots = await getDocs(tiresReference)
                
                snapshots.docs.forEach(doc => {
                    this.tires.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })
            } catch (error) {
                console.log(error)
            }
        }
    }
})
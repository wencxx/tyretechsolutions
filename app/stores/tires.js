import { defineStore } from "pinia";
import { getDocs, collection, doc, getDoc } from 'firebase/firestore'

export const useTiresSTore = defineStore('tireStore', {
    state: () => ({
        tires: [],
        tireDetails: null,
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
        },
        async getTireDetails(tireId) {
            this.tireDetails = null
            const { $db } = useNuxtApp()
            const tireReference = doc($db, 'Tires', tireId)
            try {
                const snapshot = await getDoc(tireReference)
                
                if(snapshot.exists()) return this.tireDetails = snapshot.data()

                return 'No data found'
            } catch (error) {
                console.log(error)
            }
        },
    }
})
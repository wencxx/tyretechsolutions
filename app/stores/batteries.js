import { defineStore } from "pinia";
import { getDocs, collection, doc, getDoc } from 'firebase/firestore'

export const useBatteriesStore = defineStore('batteryStore', {
    state: () => ({
        batteries: [],
        batteryDetails: null,
    }),
    actions: {
        async getBatteries() {
            this.batteries = []
            const { $db } = useNuxtApp()
            const batteriesReference = collection($db, 'Batteries')
            try {
                const snapshots = await getDocs(batteriesReference)
                
                snapshots.docs.forEach(doc => {
                    this.batteries.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })
            } catch (error) {
                console.log(error)
            }
        },
        async getBatteryDetails(batteryId) {
            this.batteryDetails = null
            const { $db } = useNuxtApp()
            const batteryReference = doc($db, 'Batteries', batteryId)
            try {
                const snapshot = await getDoc(batteryReference)
                
                if(snapshot.exists()) return this.batteryDetails = snapshot.data()

                return 'No data found'
            } catch (error) {
                console.log(error)
            }
        },
    }
})
import { defineStore } from "pinia";
import { getDocs, collection, doc, getDoc, where, query, and, limit } from 'firebase/firestore'

export const useTiresSTore = defineStore('tireStore', {
    state: () => ({
        tires: [],
        tireDetails: null,
        tireSizes: [],
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
                
                if(snapshot.exists()){
                    this.tireDetails = snapshot.data()
                    this.getTiresSize(snapshot.data().size, snapshot.data().imageUrl)
                }    
                return 'No data found'
            } catch (error) {
                console.log(error)
            }
        },
        async getTiresSize(size, imageUrl){
            this.tireSizes = []
            const { $db } = useNuxtApp()
            try {
                const q = query(
                    collection($db, 'Tires'),
                    and(
                        where('size', '==', size),
                        where('imageUrl', '!=', imageUrl),
                    ),
                    limit(3)
                )

                const snapshots = await getDocs(q)
                
                snapshots.docs.forEach(doc => {
                    this.tireSizes.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })

                return 'No data found'
            } catch (error) {
                console.log(error)
            }
        }
    }
})
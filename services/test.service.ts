import { firestore } from "../utils/firebase";

export class TestService {
    async get(): Promise<any[]> {
        try {
            let allData = await firestore.collection('test').get();
            return allData.docs.map(_data => {
                return {
                    created: ((_data.data() as any).created.toDate() as Date).toISOString(),
                    id: _data.id
                };
            });
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}
const token = 'a0090895c29ad14bec5330be9669a7192c87b3647c0aa54f';

export const server_calls = {
    get: async () => { 
        const response = await fetch(`https://night-owl.onrender.com/api/books`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
               
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },
    create: async (data: any = {}) => {
        const response = await fetch(`https://night-owl.onrender.com/api/book`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id: string, data:any = {}) => {
        console.log(id)
        console.log(data)
        const response = await fetch(`https://night-owl.onrender.com/api/books/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if (!response.ok) {
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },
    delete: async (id: string) => {
        const response = await fetch(`https://night-owl.onrender.com/api/books/${id}`, {
           method: 'DELETE',
           headers: {
              'Content-Type': 'application/json',
              'x-access-token': `Bearer ${token}`
           },
        });
  
        if (!response.ok) {
           throw new Error('Failed to delete data from the server');
        }
  
        return;
     },
    
}
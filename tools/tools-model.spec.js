const db = require('../data/dbConfig');

const { add, find, findById, update, remove } = require('./tools-model');

describe('tools model', () => {
    beforeEach(async () => {
        await db('tools').truncate();
    })

    it('should set environment to development', () => {
        expect(process.env.DB_ENV).toBe('development');
    })


    describe('find()', () => {
        it('should return all tools', async () => {
            await add({ 
            owner_id: 1,
            image: "cooltool.jpg",
            location: "TBD",
            tool_name: "Test Tool",
            tool_description: "Test description",
            rental_price: "$100",
            length_of_rental: "24 hours",
            status: "Rental"
            })

            const tools = await find();

            expect(tools).toHaveLength(1)
        })

        it('should return empty array', async () => {
            const tools = await db('tools');

            expect(tools).toEqual([]);
        })
    })

    describe('findById()', () => {
        it('should return a specified user', async () => {
            
            const tool = await add({ 
                owner_id: 2,
                image: "cooltool.jpg",
                location: "TBD",
                tool_name: "Test Tool",
                tool_description: "Test description",
                rental_price: "$100",
                length_of_rental: "24 hours",
                status: "Rental" 
            })

            const result = await findById(1)

            expect(tool.tool_description).toBe(result.tool_description)
        })
    })

    describe('add()', () => {
        it('should insert the provided tool', async () => {
            await add({      
                owner_id: 2,
                image: "cooltool.jpg",
                location: "TBD",
                tool_name: "Test Tool",
                tool_description: "Test description",
                rental_price: "$100",
                length_of_rental: "24 hours",
                status: "Rental"  
            })

            const tools = await db('tools');

            expect(tools).toHaveLength(1)
        })
    })

    describe('remove()', () => {
        it('should remove the user with id', async() => {
            const tool = await add({     
                owner_id: 2,
                image: "cooltool.jpg",
                location: "TBD",
                tool_name: "Test Tool",
                tool_description: "Test description",
                rental_price: "$100",
                length_of_rental: "24 hours",
                status: "Rental"   
            })

            let tools = await find();
            expect(tools.length).toBe(1);
            
            await remove(1);
            tools = await find();
            expect(tools.length).toBe(0)
        })
    })

})

// Relational Database => SQL + JSON

/*
> npm y init -y 
> npm hello - prisma
> npm insall prisma --save-dev
*/

// schema.prisama 
model User{
    id Init @id @default(autoincrement())
    email String @unique
    name string?
    createdAt DateTime @default(now())
    updateAt DateTime @default(now()) @updateAt
}

// > npx prisma migrate dev --name init

// Goto sql => select * from user to see the crated table

// index.js

import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();


const main = async()=>{
    //insert Data single user
    /*
    const user= await prisma.user.create({
        data:{
            name:"vinod",
            email:"thapa@latest.com"
        }
    })
    console.log(user)
    */

    //Add Multiple User
    const newusers= await prisma.user.createMany({
        data:[
            {
                name:"vinod",
                email:"thapa@latest.com"
            },
            {
                name:"Bod",
                email:"bod@latest.com"
            },
        ]
        
    })
    console.log(user)

    //✅ Read All Data (Fetch Data)
    const Users = await prisma.user.findMany()
    console.log(Users);

    //✅ Get Single User by ID
    const oneUser = await prisma.user.findUnique({
        where: {id: 2}
    })
    console.log(oneUser);

    //✅ Get User with filtering
    const filterUser = await prisma.user.findMany({
        where: {name: "vinod"}
    })
    console.log(filterUser);

    //✅ Update or Mofify data
    const updatedUser = await prisma.user.update({
        where:{id:3}, //this fild have to unique
        data:{
            name:"BobTheBuilder"
        },
    })
    console.log(updatedUser);

    //✅ Update Maltiple User
    const updateMultipleUser = await prisma.user.updateMany({
        where:{id:3}, 
        data:{
            name:"Bob"
        },
    })
    console.log(updateMultipleUser);


    //✅ Deleted User
    const deleteUser=await prisma.user.delete({
        where:{id: 3}
    })
    console.log(deleteUser)


}

main().catch((e)=> console.error(e))
.finally(async()=>{
    await prisma.$disconnect()
})

//> node index.js 
//> npx prisma generate (if prisma client is not generate then run the command)




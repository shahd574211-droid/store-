
// import { PrismaClient } from '@prisma/client'

// const prismaClientSingleton = () => {
//   // في الإصدار 7، هذه هي الطريقة الأضمن لتمرير الرابط وتجنب أخطاء TypeScript
//   return new PrismaClient({
//     datasourceUrl: process.env.DATABASE_URL,
//   })
// }

// declare const globalThis: {
//   prismaGlobal: ReturnType<typeof prismaClientSingleton>;
// } & typeof global;

// const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

// export default prisma

// if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
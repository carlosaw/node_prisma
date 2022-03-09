import { PrismaClient } from '@prisma/client';

 const prisma = new PrismaClient();

 type createDataProp = {
   title: string;
   body: string;
   authorId: number;
 }
 type updateDataProp = {
   title?: string;
   body?: string;
   authorId?: number;
   published?: boolean;
 }

 export const PostService = {
  // Pega todos os posts em ordem decrescente
   findAll: async () => {
    return await prisma.post.findMany({
      where: {
        published: true
      },
      orderBy: {
        id: 'desc'
      }
    });
   },
   // Pega um post específico
   findOne: async (id: number) => {
    return await prisma.post.findUnique({
      where: { id }
    });
   },
   // Criar post
   create: async (data: createDataProp) => {
    return await prisma.post.create({ data });   
   },
   // Modificar publiado
   update: async (id: number, data: updateDataProp) => {
    return await prisma.post.update({
      where: { id }, data      
    });
   },
   // Deletar post
   delete: async(id: number) => {
    return await prisma.post.delete({ where: { id } });    
   }
 }